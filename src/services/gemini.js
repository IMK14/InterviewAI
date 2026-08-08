import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-pro",
});

export async function evaluateWithGemini(question, answer) {
  try {
    const prompt = `
You are an expert AI technical interviewer.

Evaluate the candidate's answer professionally.

Question:
${question}

Candidate Answer:
${answer}

Rules:
- Score should be between 0 and 100.
- Mention 2 strengths.
- Mention 2 weaknesses.
- Give short professional feedback.

Return ONLY valid JSON.

{
  "score": 85,
  "strengths": [
    "Strength 1",
    "Strength 2"
  ],
  "weaknesses": [
    "Weakness 1",
    "Weakness 2"
  ],
  "feedback": "Overall feedback"
}
`;

    const result = await model.generateContent(prompt);

    const response = await result.response;

    let text = response.text();

    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const data = JSON.parse(text);

    return {
      score: Number(data.score) || 0,
      strengths: data.strengths || [],
      weaknesses: data.weaknesses || [],
      feedback: data.feedback || "",
    };
  } catch (error) {
    console.error("Gemini Error:", error);

    alert(error.message);

    return {
      score: 0,
      strengths: [],
      weaknesses: [],
      feedback:
        "AI evaluation unavailable. Keyword evaluation will be used.",
    };
  }
}