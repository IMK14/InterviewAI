import { useNavigate } from "react-router-dom";

function InterviewHistory() {
  const navigate = useNavigate();

  const history = JSON.parse(
    localStorage.getItem("interviewHistory") || "[]"
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-cyan-400 mb-8">
          Interview History
        </h1>

        {history.length === 0 ? (
          <div className="bg-slate-900 rounded-2xl p-10 text-center">
            <h2 className="text-2xl">
              No interviews completed yet.
            </h2>
          </div>
        ) : (
          <div className="space-y-5">

            {history
              .slice()
              .reverse()
              .map((item, index) => (

                <div
                  key={index}
                  className="bg-slate-900 rounded-2xl p-6 flex justify-between items-center"
                >

                  <div>

                    <h2 className="text-2xl font-bold">
                      {item.role}
                    </h2>

                    <p className="text-gray-400 mt-2">
                      {item.date}
                    </p>

                    <p className="mt-2">
                      Difficulty: {item.difficulty}
                    </p>

                    <p>
                      Mode: {item.mode}
                    </p>

                  </div>

                  <div className="text-right">

                    <h2 className="text-5xl text-green-400 font-bold">
                      {item.score}%
                    </h2>

                  </div>

                </div>

              ))}

          </div>
        )}

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-10 bg-cyan-500 px-6 py-3 rounded-xl"
        >
          Back to Dashboard
        </button>

      </div>
    </div>
  );
}

export default InterviewHistory;