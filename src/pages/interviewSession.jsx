import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { startSpeechRecognition } from "../utils/speechRecognition";

function InterviewSession() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const [isRecording, setIsRecording] = useState(false);

  // Load questions from localStorage
  useEffect(() => {
    const savedQuestions = JSON.parse(
      localStorage.getItem("interviewQuestions") || "[]"
    );

    if (savedQuestions.length === 0) {
      navigate("/interview");
      return;
    }

    setQuestions(savedQuestions);
    setAnswers(new Array(savedQuestions.length).fill(""));
  }, [navigate]);

  // Timer
  useEffect(() => {
    if (questions.length === 0) return;

    if (timeLeft <= 0) {
      finishInterview();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, questions]);

  const handleAnswerChange = (e) => {
    const updated = [...answers];
    updated[currentIndex] = e.target.value;
    setAnswers(updated);
  };
  const startRecording = () => {
  setIsRecording(true);

  startSpeechRecognition(
    (text) => {
      const updated = [...answers];
      updated[currentIndex] = text;
      setAnswers(updated);
    },
    () => {
      setIsRecording(false);
     }
    );
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

    localStorage.setItem(
      "completedQuestions",
      JSON.stringify(questions)
    );

    const currentCount = Number(
      localStorage.getItem("interviewCount") || 0
    );

    localStorage.setItem(
      "interviewCount",
      currentCount + 1
    );

    navigate("/results");
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
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

        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-cyan-400">
            AI Interview Session
          </h1>

          <div className="text-2xl font-bold text-red-400">
            ⏱ {formatTime(timeLeft)}
          </div>
        </div>

        <p className="text-gray-400 mt-2">
          Question {currentIndex + 1} of {questions.length}
        </p>

        <div className="w-full bg-slate-700 rounded-full h-3 mt-4 mb-8">
          <div
            className="bg-cyan-500 h-3 rounded-full"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        <div className="bg-slate-800 rounded-2xl p-6">

          <h2 className="text-2xl font-semibold mb-6">
            {typeof questions[currentIndex] === "string"
              ? questions[currentIndex]
              : questions[currentIndex]?.question}
          </h2>

          <textarea
            rows={8}
            placeholder="Type your answer here..."
            value={answers[currentIndex] || ""}
            onChange={handleAnswerChange}
            className="w-full bg-slate-700 rounded-xl p-4 outline-none"
          />
          <button
  onClick={startRecording}
  className={`mt-4 px-5 py-3 rounded-xl font-semibold ${
    isRecording
      ? "bg-red-500"
      : "bg-cyan-500 hover:bg-cyan-600"
  }`}
>
  {isRecording ? "🎙 Listening..." : "🎤 Speak Answer"}
</button>

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