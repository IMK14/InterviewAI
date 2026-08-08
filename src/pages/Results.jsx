import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { evaluateAnswer } from "../utils/evaluateAnswer";
import { generateInterviewReport } from "../utils/pdfReport";
import { evaluateWithGemini } from "../services/gemini";

 function Results() {
  const navigate = useNavigate();
  const questions = JSON.parse(
    localStorage.getItem("completedQuestions") || "[]"
  );

  const answers = JSON.parse(
    localStorage.getItem("interviewAnswers") || "[]"
  );

  let totalScore = 0;
  let totalMarks = 0;

  const evaluations = questions.map((question, index) => {
    const result = evaluateAnswer(
      question,
      answers[index] || ""
    );

    totalScore += result.score;
    totalMarks += question.marks;

    return {
      question,
      answer: answers[index] || "",
      ...result,
    };
  });

  const percentage =
    totalMarks === 0
      ? 0
      : Math.round((totalScore / totalMarks) * 100);

  localStorage.setItem("lastScore", percentage);

  const scoreHistory = JSON.parse(
  localStorage.getItem("scoreHistory") || "[]"
);

scoreHistory.push(percentage);

localStorage.setItem(
  "scoreHistory",
  JSON.stringify(scoreHistory)
);

const interviewHistory = JSON.parse(
  localStorage.getItem("interviewHistory") || "[]"
);

const settings = JSON.parse(
  localStorage.getItem("interviewSettings") || "{}"
);

interviewHistory.push({
  date: new Date().toLocaleString(),
  role: settings.role || "Unknown",
  difficulty: settings.difficulty || "Unknown",
  mode: settings.mode || "Text",
  score: percentage,
});

localStorage.setItem(
  "interviewHistory",
  JSON.stringify(interviewHistory)
);
  const downloadReport = () => {
  const reportData = {
    score: percentage,
    evaluations: evaluations.map((item) => ({
      question: item.question.question,
      userAnswer: item.answer,
      score: item.score,
      maxMarks: item.question.marks,
    })),
  };

  generateInterviewReport(reportData);
};

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-cyan-400 mb-8">
          AI Interview Results
        </h1>

        {/* Overall */}

        <div className="bg-slate-900 rounded-3xl p-8 mb-10">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="text-center">

              <h2 className="text-gray-400">
                Overall Score
              </h2>

              <p className="text-5xl font-bold text-green-400 mt-3">
                {percentage}%
              </p>

            </div>

            <div className="text-center">

              <h2 className="text-gray-400">
                Marks
              </h2>

              <p className="text-5xl font-bold mt-3">
                {totalScore} / {totalMarks}
              </p>

            </div>

            <div className="text-center">

              <h2 className="text-gray-400">
                Questions
              </h2>

              <p className="text-5xl font-bold mt-3">
                {questions.length}
              </p>

            </div>

          </div>

          <div className="w-full bg-slate-700 rounded-full h-5 mt-8">

            <div
              className="bg-cyan-500 h-5 rounded-full"
              style={{
                width: `${percentage}%`,
              }}
            ></div>

          </div>

        </div>

        {/* Question Review */}

        <div className="space-y-8">

          {evaluations.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 rounded-3xl p-8"
            >

              <h2 className="text-2xl font-bold text-cyan-400">
                Question {index + 1}
              </h2>

              <p className="mt-5 text-xl">
                {item.question.question}
              </p>

              <div className="mt-6">

                <h3 className="text-green-400 font-bold">
                  Your Answer
                </h3>

                <div className="bg-slate-800 rounded-xl p-4 mt-2">
                  {item.answer || "No answer provided."}
                </div>

              </div>

              <div className="mt-6">

                <h3 className="text-cyan-400 font-bold">
                  Expected Answer
                </h3>

                <div className="bg-slate-800 rounded-xl p-4 mt-2">
                  {item.question.answer}
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">

                <div>

                  <h3 className="text-green-400 font-bold">
                    Keywords Found
                  </h3>

                  <ul className="mt-2 list-disc ml-6">

                    {item.matched.length === 0 ? (
                      <li>None</li>
                    ) : (
                      item.matched.map((keyword, i) => (
                        <li key={i}>{keyword}</li>
                      ))
                    )}

                  </ul>

                </div>

                <div>

                  <h3 className="text-red-400 font-bold">
                    Keywords Missing
                  </h3>

                  <ul className="mt-2 list-disc ml-6">

                    {item.missing.length === 0 ? (
                      <li>None</li>
                    ) : (
                      item.missing.map((keyword, i) => (
                        <li key={i}>{keyword}</li>
                      ))
                    )}

                  </ul>

                </div>

              </div>

              <div className="mt-8 flex justify-between items-center">

                <div>

                  <h3 className="text-yellow-400 font-bold">
                    AI Feedback
                  </h3>

                  <p>{item.feedback}</p>

                </div>

                <div className="text-3xl font-bold text-cyan-400">

                  {item.score} / {item.question.marks}

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="flex gap-5 mt-10">
          <button
  onClick={downloadReport}
  className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
>
  📄 Download Report
</button>

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