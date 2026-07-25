import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questionsData from "../data/questions";

function InterviewStudio() {
  const navigate = useNavigate();

  const [role, setRole] = useState("Machine Learning Engineer");
  const [difficulty, setDifficulty] = useState("Medium");
  const [mode, setMode] = useState("Text");
  const [duration, setDuration] = useState("20 Minutes");

  const generateInterview = () => {
    const roleQuestions = questionsData[role]?.[difficulty] || [];

    if (roleQuestions.length === 0) {
      alert("No questions found for this role.");
      return;
    }

    const shuffled = [...roleQuestions].sort(() => Math.random() - 0.5);
    const selectedQuestions = shuffled.slice(0, 5);

    localStorage.setItem(
      "interviewQuestions",
      JSON.stringify(selectedQuestions)
    );

    localStorage.setItem(
      "interviewSettings",
      JSON.stringify({
        role,
        difficulty,
        mode,
        duration,
      })
    );

    navigate("/interview-session");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold text-cyan-400 mb-2">
        AI Interview Studio
      </h1>

      <p className="text-gray-400 mb-10">
        Configure your interview before starting.
      </p>

      <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl p-8">

        {/* Role */}

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Choose Role</h2>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Machine Learning Engineer",
              "Software Engineer",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setRole(item)}
                className={`p-5 rounded-xl border transition ${
                  role === item
                    ? "bg-cyan-500 border-cyan-300"
                    : "bg-slate-800 border-slate-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty */}

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Difficulty</h2>

          <div className="grid grid-cols-3 gap-4">
            {["Easy", "Medium", "Hard"].map((item) => (
              <button
                key={item}
                onClick={() => setDifficulty(item)}
                className={`p-5 rounded-xl border ${
                  difficulty === item
                    ? "bg-cyan-500 border-cyan-300"
                    : "bg-slate-800 border-slate-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Mode */}

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Interview Mode</h2>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setMode("Text")}
              className={`p-5 rounded-xl border ${
                mode === "Text"
                  ? "bg-cyan-500"
                  : "bg-slate-800"
              }`}
            >
              📝 Text
            </button>

            <button
              onClick={() => setMode("Voice")}
              className={`p-5 rounded-xl border ${
                mode === "Voice"
                  ? "bg-cyan-500"
                  : "bg-slate-800"
              }`}
            >
              🎤 Voice
            </button>
          </div>
        </div>

        {/* Duration */}

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Duration</h2>

          <div className="grid grid-cols-3 gap-4">
            {["10 Minutes", "20 Minutes", "30 Minutes"].map((item) => (
              <button
                key={item}
                onClick={() => setDuration(item)}
                className={`p-5 rounded-xl border ${
                  duration === item
                    ? "bg-cyan-500"
                    : "bg-slate-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={generateInterview}
          className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 rounded-xl p-5 text-xl font-bold"
        >
          🚀 Launch Interview
        </button>

      </div>
    </div>
  );
}

export default InterviewStudio;