import { useNavigate } from "react-router-dom";

function Results() {
  const navigate = useNavigate();

  const answers = JSON.parse(
    localStorage.getItem("interviewAnswers") || "[]"
  );

  const totalQuestions = answers.length;

  const answeredQuestions = answers.filter(
    (answer) => answer.trim() !== ""
  ).length;

  const score = answeredQuestions * 20;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-10">

        <h1 className="text-5xl font-bold text-cyan-400 mb-8">
          Interview Results
        </h1>

        <div className="space-y-6 text-xl">

          <div className="flex justify-between">
            <span>Total Questions</span>
            <span>{totalQuestions}</span>
          </div>

          <div className="flex justify-between">
            <span>Answered</span>
            <span>{answeredQuestions}</span>
          </div>

          <div className="flex justify-between">
            <span>Score</span>
            <span>{score} / 100</span>
          </div>

        </div>

        <div className="mt-10">

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Performance
          </h2>

          <div className="w-full bg-slate-700 rounded-full h-5">

            <div
              className="bg-cyan-500 h-5 rounded-full"
              style={{ width: `${score}%` }}
            ></div>

          </div>

        </div>

        <div className="mt-10 flex gap-5">

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-cyan-500 px-6 py-3 rounded-xl"
          >
            Dashboard
          </button>

          <button
            onClick={() => navigate("/interview")}
            className="bg-green-500 px-6 py-3 rounded-xl"
          >
            Start New Interview
          </button>

        </div>

      </div>

    </div>
  );
}

export default Results;