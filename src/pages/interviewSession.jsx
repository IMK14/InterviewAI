import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function InterviewSession() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const [isFinishing, setIsFinishing] = useState(false);

  const [mode, setMode] = useState("Text");
  const [isListening, setIsListening] = useState(false);

  const recognitionRef = useRef(null);

  // Load interview
  useEffect(() => {
    const savedQuestions = JSON.parse(
      localStorage.getItem("interviewQuestions") || "[]"
    );

    const settings = JSON.parse(
      localStorage.getItem("interviewSettings") || "{}"
    );

    if (savedQuestions.length === 0) {
      navigate("/interview");
      return;
    }

    setQuestions(savedQuestions);
    setAnswers(new Array(savedQuestions.length).fill(""));
    setMode(settings.mode || "Text");

    let durationInMinutes = 20;

    if (settings.duration === "10 Minutes") {
      durationInMinutes = 10;
    } else if (settings.duration === "30 Minutes") {
      durationInMinutes = 30;
    }

    setTimeLeft(durationInMinutes * 60);
  }, [navigate]);

  // Timer
  useEffect(() => {
    if (questions.length === 0 || isFinishing) {
      return;
    }

    if (timeLeft <= 0) {
      finishInterview();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((previous) => previous - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, questions, isFinishing]);

  // Stop speech when changing question
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [currentIndex]);

  const handleAnswerChange = (event) => {
    const updatedAnswers = [...answers];

    updatedAnswers[currentIndex] = event.target.value;

    setAnswers(updatedAnswers);
  };

  // Start voice recognition
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Speech recognition is not supported in this browser. Please use Google Chrome."
      );
      return;
    }

    if (isListening) {
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      let transcript = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {
        transcript += event.results[i][0].transcript;
      }

      setAnswers((previousAnswers) => {
        const updatedAnswers = [...previousAnswers];

        const existingAnswer =
          updatedAnswers[currentIndex] || "";

        updatedAnswers[currentIndex] =
          existingAnswer +
          (existingAnswer ? " " : "") +
          transcript.trim();

        return updatedAnswers;
      });
    };

    recognition.onerror = (event) => {
      console.error(
        "Speech Recognition Error:",
        event.error
      );

      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    try {
      recognition.start();
    } catch (error) {
      console.error("Unable to start speech recognition:", error);
      setIsListening(false);
    }
  };

  // Stop voice recognition
  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }

    setIsListening(false);
  };

  const nextQuestion = () => {
    stopListening();

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((previous) => previous + 1);
    }
  };

  const previousQuestion = () => {
    stopListening();

    if (currentIndex > 0) {
      setCurrentIndex((previous) => previous - 1);
    }
  };

  const finishInterview = () => {
    if (isFinishing) {
      return;
    }

    stopListening();

    setIsFinishing(true);

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
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-xl text-cyan-400">
          Loading Interview...
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const questionText =
    typeof currentQuestion === "string"
      ? currentQuestion
      : currentQuestion?.question;

  const progress =
    ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-6 sm:p-10">

      <div className="max-w-4xl mx-auto">

        {/* Header */}

        <div className="bg-slate-900 rounded-3xl p-5 sm:p-8">

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

            <div>
              <h1 className="text-2xl sm:text-4xl font-bold text-cyan-400">
                AI Interview Session
              </h1>

              <p className="text-gray-400 mt-2">
                Question {currentIndex + 1} of {questions.length}
              </p>
            </div>

            <div
              className={`text-2xl sm:text-3xl font-bold ${
                timeLeft <= 60
                  ? "text-red-400"
                  : "text-yellow-400"
              }`}
            >
              ⏱ {formatTime(timeLeft)}
            </div>

          </div>

          {/* Progress */}

          <div className="w-full bg-slate-700 rounded-full h-3 mt-6">

            <div
              className="bg-cyan-500 h-3 rounded-full transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* Question Card */}

        <div className="bg-slate-900 rounded-3xl p-5 sm:p-8 mt-6">

          <div className="flex justify-between items-start gap-4">

            <span className="text-sm text-cyan-400 font-semibold">
              QUESTION {currentIndex + 1}
            </span>

            <span className="text-sm text-gray-400">
              {currentQuestion?.marks || 10} marks
            </span>

          </div>

          <h2 className="text-xl sm:text-2xl font-semibold mt-5 leading-relaxed">
            {questionText}
          </h2>

          {/* Answer */}

          <textarea
            rows={8}
            placeholder={
              mode === "Voice"
                ? "Press Start Speaking and answer the question..."
                : "Type your answer here..."
            }
            value={answers[currentIndex] || ""}
            onChange={handleAnswerChange}
            className="w-full mt-6 bg-slate-800 border border-slate-700 rounded-2xl p-4 text-white placeholder-gray-500 outline-none focus:border-cyan-400 resize-y"
          />

          {/* Voice Controls */}

          {mode === "Voice" && (
            <div className="mt-5 flex flex-col sm:flex-row gap-3">

              {!isListening ? (
                <button
                  onClick={startListening}
                  disabled={isFinishing}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold disabled:opacity-50"
                >
                  🎤 Start Speaking
                </button>
              ) : (
                <button
                  onClick={stopListening}
                  className="w-full sm:w-auto bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold animate-pulse"
                >
                  🔴 Stop Speaking
                </button>
              )}

              {isListening && (
                <div className="flex items-center justify-center sm:justify-start text-green-400 font-semibold px-3">
                  ● Listening...
                </div>
              )}

            </div>
          )}

          <p className="text-gray-500 text-sm mt-3">
            {mode === "Voice"
              ? "Speak clearly. Press Stop Speaking when you finish your answer."
              : "Type your answer in the box above."}
          </p>

        </div>

        {/* Navigation */}

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">

          <button
            onClick={previousQuestion}
            disabled={
              currentIndex === 0 ||
              isFinishing
            }
            className="w-full sm:w-auto bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl disabled:opacity-40"
          >
            ← Previous
          </button>

          {currentIndex === questions.length - 1 ? (

            <button
              onClick={finishInterview}
              disabled={isFinishing}
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold disabled:opacity-50"
            >
              {isFinishing
                ? "Finishing..."
                : "Finish Interview"}
            </button>

          ) : (

            <button
              onClick={nextQuestion}
              disabled={isFinishing}
              className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold disabled:opacity-50"
            >
              Next →
            </button>

          )}

        </div>

      </div>

    </div>
  );
}

export default InterviewSession;