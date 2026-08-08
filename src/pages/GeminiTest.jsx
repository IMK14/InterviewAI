import { useState } from "react";
import { evaluateWithGemini } from "../services/gemini";

function GeminiTest() {
  const [result, setResult] = useState("");

  const testGemini = async () => {
    const response = await evaluateWithGemini(
      "What is Machine Learning?",
      "Machine learning is a subset of artificial intelligence that enables computers to learn from data."
    );

    setResult(JSON.stringify(response, null, 2));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">
        Gemini Test
      </h1>

      <button
        onClick={testGemini}
        className="bg-cyan-500 px-6 py-3 rounded-xl"
      >
        Test Gemini
      </button>

      <pre className="bg-slate-800 p-5 rounded-xl mt-8 whitespace-pre-wrap">
        {result}
      </pre>
    </div>
  );
}

export default GeminiTest;