import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { extractResumeText } from "../utils/resumeParser";
import { analyzeResume } from "../utils/resumeAnalyzer";

function ResumeAnalyzer() {
  const navigate = useNavigate();

  const [fileName, setFileName] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeUploadedResume = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setError("");
    setAnalysis(null);
    setFileName(file.name);

    // PDF validation
    if (file.type !== "application/pdf") {
      setError("Please upload a PDF resume.");
      setFileName("");
      return;
    }

    // File size validation - 5 MB
    if (file.size > 5 * 1024 * 1024) {
      setError("Resume file must be smaller than 5 MB.");
      setFileName("");
      return;
    }

    setLoading(true);

    try {
      const resumeText = await extractResumeText(file);

      if (!resumeText || resumeText.trim().length < 20) {
        throw new Error("Unable to extract enough text from the resume.");
      }

      const result = analyzeResume(resumeText);

      setAnalysis(result);
    } catch (error) {
      console.error("Resume analysis error:", error);
      setError(
        "Unable to analyze this resume. Please make sure the PDF contains readable text."
      );
    } finally {
      setLoading(false);
    }
  };

  const analyzeAnotherResume = () => {
    setFileName("");
    setAnalysis(null);
    setError("");

    const input = document.getElementById("resume-upload");

    if (input) {
      input.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 sm:p-6 md:p-10">

      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8">

          <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-cyan-400">
              AI Resume Analyzer
            </h1>

            <p className="text-gray-400 mt-2">
              Analyze your resume and identify skills that can improve your ATS score.
            </p>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl whitespace-nowrap"
          >
            ← Dashboard
          </button>

        </div>

        {/* Upload Area */}

        {!analysis && !loading && (

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-center">

            <div className="text-6xl mb-5">
              📄
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold">
              Upload Your Resume
            </h2>

            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              Upload your PDF resume to analyze your skills,
              identify missing keywords and receive improvement suggestions.
            </p>

            <label
              htmlFor="resume-upload"
              className="inline-block mt-7 bg-cyan-500 hover:bg-cyan-600 px-7 py-3 rounded-xl font-semibold cursor-pointer transition"
            >
              Choose Resume
            </label>

            <input
              id="resume-upload"
              type="file"
              accept=".pdf,application/pdf"
              onChange={analyzeUploadedResume}
              className="hidden"
            />

            <p className="text-gray-500 text-sm mt-4">
              PDF only • Maximum 5 MB
            </p>

          </div>

        )}

        {/* Loading */}

        {loading && (

          <div className="bg-slate-900 rounded-3xl p-10 text-center">

            <div className="text-5xl mb-5 animate-pulse">
              🔍
            </div>

            <h2 className="text-2xl font-bold">
              Analyzing Resume...
            </h2>

            <p className="text-gray-400 mt-2">
              Extracting skills and checking your resume.
            </p>

            <div className="w-full max-w-md mx-auto bg-slate-700 rounded-full h-2 mt-6 overflow-hidden">
              <div className="bg-cyan-500 h-2 rounded-full w-2/3 animate-pulse" />
            </div>

          </div>

        )}

        {/* Error */}

        {error && !loading && (

          <div className="bg-red-950/40 border border-red-500/30 rounded-2xl p-6 text-center">

            <h2 className="text-xl font-bold text-red-400">
              Resume Analysis Failed
            </h2>

            <p className="text-gray-300 mt-2">
              {error}
            </p>

            <button
              onClick={analyzeAnotherResume}
              className="mt-5 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl"
            >
              Try Another Resume
            </button>

          </div>

        )}

        {/* Uploaded Resume */}

        {!loading && fileName && analysis && (

          <div className="bg-slate-900 rounded-2xl p-5 mb-6">

            <p className="text-gray-400">
              Analyzed Resume
            </p>

            <p className="text-white font-semibold mt-1 break-all">
              {fileName}
            </p>

          </div>

        )}

        {/* Results */}

        {!loading && analysis && (

          <div>

            {/* ATS Score */}

            <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 mb-6">

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5">

                <div>
                  <h2 className="text-2xl font-bold">
                    ATS Score
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Your resume's current keyword match score.
                  </p>
                </div>

                <p className="text-6xl font-bold text-green-400">
                  {analysis.score}%
                </p>

              </div>

              <div className="w-full bg-slate-700 rounded-full h-4 mt-7 overflow-hidden">

                <div
                  className="bg-green-500 h-4 rounded-full transition-all"
                  style={{
                    width: `${Math.min(analysis.score, 100)}%`,
                  }}
                />

              </div>

            </div>

            {/* Skills */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Skills Found */}

              <div className="bg-slate-900 rounded-3xl p-6">

                <h2 className="text-2xl font-bold text-green-400 mb-4">
                  Skills Found
                </h2>

                {analysis.strengths.length > 0 ? (

                  <ul className="space-y-3">

                    {analysis.strengths.map((skill, index) => (
                      <li
                        key={index}
                        className="bg-slate-800 rounded-xl px-4 py-3"
                      >
                        ✓ {skill}
                      </li>
                    ))}

                  </ul>

                ) : (

                  <p className="text-gray-400">
                    No matching skills found.
                  </p>

                )}

              </div>

              {/* Missing Skills */}

              <div className="bg-slate-900 rounded-3xl p-6">

                <h2 className="text-2xl font-bold text-red-400 mb-4">
                  Missing Skills
                </h2>

                {analysis.missing.length > 0 ? (

                  <ul className="space-y-3">

                    {analysis.missing.map((skill, index) => (
                      <li
                        key={index}
                        className="bg-slate-800 rounded-xl px-4 py-3"
                      >
                        • {skill}
                      </li>
                    ))}

                  </ul>

                ) : (

                  <p className="text-green-400">
                    Great! No important skills are missing.
                  </p>

                )}

              </div>

            </div>

            {/* Suggestions */}

            <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 mt-6">

              <h2 className="text-2xl font-bold text-cyan-400 mb-5">
                Improvement Suggestions
              </h2>

              {analysis.suggestions.length > 0 ? (

                <ul className="space-y-3">

                  {analysis.suggestions.map((item, index) => (
                    <li
                      key={index}
                      className="bg-slate-800 rounded-xl px-4 py-3"
                    >
                      {index + 1}. {item}
                    </li>
                  ))}

                </ul>

              ) : (

                <p className="text-gray-400">
                  No additional suggestions available.
                </p>

              )}

            </div>

            {/* Actions */}

            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <button
                onClick={analyzeAnotherResume}
                className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold"
              >
                Analyze Another Resume
              </button>

              <button
                onClick={() => navigate("/dashboard")}
                className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl"
              >
                Back to Dashboard
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default ResumeAnalyzer;