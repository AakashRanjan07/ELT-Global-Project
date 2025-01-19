import '@testing-library/jest-dom'; 
import { render, screen, fireEvent } from "@testing-library/react";
import { questions } from "../utils/questions"; 
import ExamPage from "../app/exam/page";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("sonner", () => ({
  toast: jest.fn(),
}));

describe("ExamPage Component", () => {
  const mockPush = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  // Test component renders
  test("renders the component correctly", () => {
    render(<ExamPage />);
    expect(screen.getByText("Assessment")).toBeInTheDocument();
    expect(screen.getByText(`Question 1 of ${questions.length}`)).toBeInTheDocument();
  });

  // Test 'Next' button 
  test("displays the next question on clicking 'Next'", () => {
    render(<ExamPage />);
    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);
    expect(screen.getByText(`Question 2 of ${questions.length}`)).toBeInTheDocument();
  });

  // Test 'Previous' button 
  test("displays the previous question on clicking 'Previous'", () => {
    render(<ExamPage />);
    const nextButton = screen.getByRole("button", { name: /next/i });
    const prevButton = screen.getByRole("button", { name: /previous/i });
    fireEvent.click(nextButton);
    fireEvent.click(prevButton);
    expect(screen.getByText(`Question 1 of ${questions.length}`)).toBeInTheDocument();
  });

  // Test 'Previous' button disabled 
  test("disables the 'Previous' button on the first question", () => {
    render(<ExamPage />);
    const prevButton = screen.getByRole("button", { name: /previous/i });
    expect(prevButton).toBeDisabled();
  });

  // Test flagging and unflagging a question
  test("flags and unflags a question on clicking the 'Flag' button", () => {
    render(<ExamPage />);
    const flagButton = screen.getByRole("button", { name: /flag/i });
    fireEvent.click(flagButton);
    expect(flagButton).toHaveTextContent("Unflag");
    fireEvent.click(flagButton);
    expect(flagButton).toHaveTextContent("Flag");
  });

  // Test selecting an answer
  test("selects an answer and marks it as answered", () => {
    render(<ExamPage />);
    const optionInput = screen.getByLabelText(questions[0].options[0].option);
    fireEvent.click(optionInput);
    expect(optionInput).toBeChecked();
  });

  // Test submission popup visibility
  test("shows the submission popup when clicking 'End and Submit'", () => {
    render(<ExamPage />);
    const submitButton = screen.getByRole("button", { name: /end and submit/i });
    fireEvent.click(submitButton);
    expect(screen.getByText("Do you want to submit?")).toBeInTheDocument();
  });

  // Test assessment submission and navigation
  test("submits the assessment and navigates to the results page", () => {
    render(<ExamPage />);
    const submitButton = screen.getByRole("button", { name: /end and submit/i });
    fireEvent.click(submitButton);
    const confirmButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(confirmButton);
    expect(mockPush).toHaveBeenCalledWith(expect.stringContaining("/results?answers="));
    expect(toast).toHaveBeenCalledWith("Assessment Successfully Submitted");
  });

  // Test canceling submission
  test("cancels the submission popup", () => {
    render(<ExamPage />);
    const submitButton = screen.getByRole("button", { name: /end and submit/i });
    fireEvent.click(submitButton);
    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(cancelButton);
    expect(screen.queryByText("Do you want to submit?")).not.toBeInTheDocument();
  });

  // Test pagination 
  test("toggles pagination visibility on mobile", () => {
    render(<ExamPage />);
    const togglePaginationButton = screen.getByText(/jump to question/i);
    fireEvent.click(togglePaginationButton);
    const paginationButtons = screen.getAllByRole("button");
    expect(paginationButtons).toHaveLength(questions.length);
    fireEvent.click(togglePaginationButton);
    expect(screen.queryAllByRole("button").length).toBeLessThan(questions.length);
  });
});
