import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function InterviewSession() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const savedQuestions = JSON.parse(
      localStorage.getItem("interviewQuestions")
    );

    if (!savedQuestions || savedQuestions.length === 0) {
      navigate("/interview");
      return;
    }

    setQuestions(savedQuestions);
    setAnswers(new Array(savedQuestions.length).fill(""));
  }, [navigate]);

  const handleAnswerChange = (e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const finishInterview = () => {
    localStorage.setItem(
      "interviewAnswers",
      JSON.stringify(answers)
    );

    alert("Interview Completed Successfully!");

    navigate("/results");
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-950 text-white">
        Loading Interview...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-cyan-400 mb-2">
          AI Interview Session
        </h1>

        <p className="text-gray-400 mb-8">
          Question {currentIndex + 1} of {questions.length}
        </p>

        <div className="bg-slate-800 rounded-2xl p-6">

        <div className="mb-6">
         <h2 className="text-2xl font-semibold mb-6">
          {questions[currentIndex]}
         </h2>
         </div>

          <textarea
            rows={8}
            placeholder="Type your answer here..."
            value={answers[currentIndex] || ""}
            onChange={handleAnswerChange}
            className="w-full rounded-xl bg-slate-700 p-4 outline-none"
          />

        </div>

        <div className="flex justify-between mt-8">

          <button
            onClick={previousQuestion}
            disabled={currentIndex === 0}
            className="bg-gray-700 px-6 py-3 rounded-xl disabled:opacity-40"
          >
            Previous
          </button>

          {currentIndex === questions.length - 1 ? (
            <button
              onClick={finishInterview}
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl"
            >
              Finish Interview
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl"
            >
              Next
            </button>
          )}

        </div>

      </div>

    </div>
  );
}

export default InterviewSession;