import { useState } from "react";
import { extractResumeText } from "../utils/resumeParser";
import { analyzeResume } from "../utils/resumeAnalyzer";

function ResumeAnalyzer() {
  const [fileName, setFileName] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeUploadedResume = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFileName(file.name);
    setLoading(true);

    try {
      const resumeText = await extractResumeText(file);
      const result = analyzeResume(resumeText);
      setAnalysis(result);
    } catch (error) {
      console.error(error);
      alert("Failed to analyze resume.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl p-10">

        <h1 className="text-5xl font-bold text-cyan-400 mb-8">
          AI Resume Analyzer
        </h1>

        <input
          type="file"
          accept=".pdf"
          onChange={analyzeUploadedResume}
          className="mb-8"
        />

        {fileName && (
          <p className="mb-6 text-gray-300">
            Uploaded Resume: <strong>{fileName}</strong>
          </p>
        )}

        {loading && (
          <p className="text-cyan-400 text-lg">
            Analyzing resume...
          </p>
        )}

        {!loading && analysis && (
          <>
            <div className="bg-slate-800 rounded-2xl p-6 mb-8">
              <h2 className="text-3xl font-bold">ATS Score</h2>

              <p className="text-6xl font-bold text-green-400 mt-5">
                {analysis.score}%
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-slate-800 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-green-400 mb-4">
                  Skills Found
                </h2>

                <ul className="list-disc ml-6 space-y-2">
                  {analysis.strengths.length > 0 ? (
                    analysis.strengths.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))
                  ) : (
                    <li>No matching skills found.</li>
                  )}
                </ul>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-red-400 mb-4">
                  Missing Skills
                </h2>

                <ul className="list-disc ml-6 space-y-2">
                  {analysis.missing.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="bg-slate-800 rounded-2xl p-6 mt-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                Suggestions
              </h2>

              <ul className="list-disc ml-6 space-y-2">
                {analysis.suggestions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default ResumeAnalyzer;