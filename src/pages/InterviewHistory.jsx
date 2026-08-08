import { useNavigate } from "react-router-dom";

function InterviewHistory() {
  const navigate = useNavigate();

  const history = JSON.parse(
    localStorage.getItem("interviewHistory") || "[]"
  );

  const reversedHistory = history.slice().reverse();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 sm:p-6 md:p-10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">

          <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-cyan-400">
              Interview History
            </h1>

            <p className="text-gray-400 mt-2">
              Review your previous interview performance.
            </p>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl"
          >
            ← Dashboard
          </button>

        </div>

        {/* Empty State */}

        {history.length === 0 ? (

          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-center">

            <div className="text-6xl mb-5">
              📊
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold">
              No Interviews Yet
            </h2>

            <p className="text-gray-400 mt-3 max-w-lg mx-auto">
              Complete your first AI interview to start
              tracking your scores, performance and progress.
            </p>

            <button
              onClick={() => navigate("/interview")}
              className="mt-7 bg-cyan-500 hover:bg-cyan-600 px-7 py-3 rounded-xl font-semibold"
            >
              Start Your First Interview
            </button>

          </div>

        ) : (

          <div className="space-y-5">

            {/* Summary */}

            <div className="bg-slate-900 rounded-2xl p-5">

              <p className="text-gray-400">
                Total Interviews
              </p>

              <p className="text-3xl font-bold text-cyan-400 mt-1">
                {history.length}
              </p>

            </div>

            {/* History */}

            {reversedHistory.map((item, index) => (

              <div
                key={index}
                className="bg-slate-900 rounded-3xl p-5 sm:p-6"
              >

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">

                  {/* Interview Details */}

                  <div className="min-w-0">

                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      {item.role || "Interview"}
                    </h2>

                    <p className="text-gray-400 mt-2">
                      {item.date}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">

                      <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
                        Difficulty: {item.difficulty || "Unknown"}
                      </span>

                      <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
                        Mode: {item.mode || "Text"}
                      </span>

                    </div>

                  </div>

                  {/* Score */}

                  <div className="flex items-center justify-between md:block md:text-right">

                    <p className="text-gray-400 text-sm">
                      Score
                    </p>

                    <p
                      className={`text-4xl sm:text-5xl font-bold ${
                        item.score >= 80
                          ? "text-green-400"
                          : item.score >= 60
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      {item.score}%
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </div>
  );
}

export default InterviewHistory;