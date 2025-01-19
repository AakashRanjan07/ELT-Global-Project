'use client'
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { toast } from "sonner";

export default function Home() {
  const handleStartExam = () => {
    toast(`Exam Started, All the Best!👍`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <section className="text-center py-12 bg-blue-500 text-white mr-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to ELT Global</h1>
        <p className="text-lg mb-6">
          Your trusted platform for secure and efficient online exams.
        </p>
        <Link
          href="/exam"
          className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-200"
          onClick={handleStartExam}
        >
          Start Exam
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 mr-3">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Choose ELT Global?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
            <Image
              src="/images/easytouse.jpg"
              alt="Easy to Use"
              width={500}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p>An intuitive and user-friendly interface for everyone.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
            <Image
              src="/images/secure3.jpg"
              alt="Secure"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Secure Exams</h3>
            <p>
              Conduct exams with advanced security features to ensure integrity.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
            <Image
              src="/images/results.jpg"
              alt="Results"
              width={500}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
            <p>Get results immediately after completing the exam.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800 mr-4">
        <h2 className="text-2xl font-bold text-center mb-8 mr-6">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Step 1</h3>
            <p>Register or log in to your account.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Step 2</h3>
            <p>Select your exam from the dashboard.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Step 3</h3>
            <p>Take the exam at your convenience.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Step 4</h3>
            <p>Receive your results instantly.</p>
          </div>
        </div>
      </section>
      <div className="mr-4 mt-6">
        <Footer />
      </div>
    </div>
  );
}
