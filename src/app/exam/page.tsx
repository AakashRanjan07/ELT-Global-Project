"use client";
import React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "../../utils/questions";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";
import {
  ChevronLeft,
  ChevronRight,
  Flag,
  CheckCircle,
  AlertTriangle,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { toast } from "sonner";

export default function ExamPage() {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleAnswerChange = (optionId: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: optionId });
  };
  const [showPagination, setShowPagination] = useState(false); 

  const togglePagination = () => {
    setShowPagination((prev) => !prev); 
  };

  const toggleFlag = () => {
    if (flaggedQuestions.includes(currentQuestion)) {
      setFlaggedQuestions(
        flaggedQuestions.filter((q) => q !== currentQuestion)
      );
    } else {
      setFlaggedQuestions([...flaggedQuestions, currentQuestion]);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1)
      setCurrentQuestion(currentQuestion + 1);
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handlePaginationClick = (index: number) => {
    setCurrentQuestion(index);
  };

  const handlePopupSubmit = () => {
    setShowPopup(false);
    router.push(`/results?answers=${JSON.stringify(answers)}`);
    toast("Assessment Successfully Submitted!✔️");
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const getCircleClass = (index: number) => {
    if (flaggedQuestions.includes(index)) return "bg-orange-500 text-white";
    if (answers[questions[index].id]) return "bg-green-500 text-white";
    return "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100";
  };

  const unansweredCount = questions.length - Object.keys(answers).length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8 relative">
      {/* Popup */}
      {showPopup && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-11/12 md:w-80 shadow-lg">
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-red-500 w-6 h-6 mr-2" />
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                Confirmation
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              You have{" "}
              <span className="font-bold text-red-500">
                ({unansweredCount})
              </span>{" "}
              unanswered questions. Do you want to submit?
            </p>
            <div className="flex justify-between mt-6">
              <button
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 w-1/2 mr-2"
                onClick={handlePopupSubmit}
              >
                Submit
              </button>
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 w-1/2"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4 md:mb-0">
          Assessment
        </h1>
        <Timer initialTime={3600} />
      </header>

      <ProgressBar progress={progress} />

      <div className="flex flex-wrap mt-6">
        <div className="w-full md:w-1/3 p-4 border border-gray-200 dark:border-gray-700 rounded mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Overview
          </h3>

       
          <div className="grid grid-cols-5 gap-2 md:overflow-hidden overflow-x-auto hidden md:grid">
            {questions.map((_, index) => (
              <button
                key={index}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${getCircleClass(
                  index
                )}`}
                onClick={() => handlePaginationClick(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              className="w-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-2 rounded flex justify-between items-center"
              onClick={togglePagination}
            >
              <span>Jump to Question</span>
              {showPagination ? (
                <ChevronUp className="w-5 h-5" /> 
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            {/* Show Pagination when the toggle is clicked */}
            {showPagination && (
              <div className="mt-2 grid grid-cols-5 gap-2 md:overflow-hidden overflow-x-auto">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${getCircleClass(
                      index
                    )}`}
                    onClick={() => handlePaginationClick(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Question Section */}
        <div className="w-full md:flex-1 ml-0 md:ml-6">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-2">
            {questions[currentQuestion].question}
          </h2>

          <div className="mt-4">
            {questions[currentQuestion].options.map((option) => (
              <div key={option.id} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="option"
                    value={option.id}
                    onChange={() => handleAnswerChange(option.id)}
                    className="mr-2"
                    checked={
                      answers[questions[currentQuestion].id] === option.id
                    }
                  />
                  <span className="text-gray-800 dark:text-gray-100">
                    {option.option}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8">
        <div className="flex justify-between items-center space-x-2 md:hidden">
          <button
            className="p-2 bg-green-500 text-white rounded hover:bg-green-600 flex-1 flex justify-center items-center"
            onClick={() => setShowPopup(true)}
          >
            <CheckCircle className="w-5 h-5" />
          </button>

          <button
            className="p-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 flex-1 flex justify-center items-center"
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            className={`p-2 rounded flex-1 flex justify-center items-center ${
              flaggedQuestions.includes(currentQuestion)
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={toggleFlag}
          >
            <Flag className="w-5 h-5" />
          </button>

          <button
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex-1 flex justify-center items-center"
            onClick={nextQuestion}
            disabled={currentQuestion === questions.length - 1}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop View*/}
        <div className="hidden md:flex flex-wrap justify-between items-center space-y-4 md:space-y-0">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full md:w-auto"
            onClick={() => setShowPopup(true)}
          >
            <CheckCircle className="inline-block mr-2" /> End and Submit
          </button>

          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 w-full md:w-auto"
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
          >
            <ChevronLeft className="inline-block mr-2" /> Previous
          </button>

          <button
            className={`px-4 py-2 rounded w-full md:w-auto ${
              flaggedQuestions.includes(currentQuestion)
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={toggleFlag}
          >
            <Flag className="inline-block mr-2" />
            {flaggedQuestions.includes(currentQuestion) ? "Unflag" : "Flag"}
          </button>

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full md:w-auto"
            onClick={nextQuestion}
            disabled={currentQuestion === questions.length - 1}
          >
            Next <ChevronRight className="inline-block ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
