const requiredSkills = [
  "python",
  "java",
  "c",
  "c++",
  "javascript",
  "react",
  "node",
  "express",
  "html",
  "css",
  "sql",
  "mysql",
  "mongodb",
  "firebase",
  "machine learning",
  "deep learning",
  "artificial intelligence",
  "tensorflow",
  "keras",
  "pytorch",
  "pandas",
  "numpy",
  "opencv",
  "git",
  "github",
  "docker",
  "aws",
  "linux",
];

export function analyzeResume(text) {
  const resume = text.toLowerCase();

  const strengths = [];
  const missing = [];

  requiredSkills.forEach((skill) => {
    if (resume.includes(skill)) {
      strengths.push(skill);
    } else {
      missing.push(skill);
    }
  });

  const score = Math.round(
    (strengths.length / requiredSkills.length) * 100
  );

  const suggestions = [];

  if (!resume.includes("project")) {
    suggestions.push("Add your academic or personal projects.");
  }

  if (!resume.includes("intern")) {
    suggestions.push("Include internship experience if available.");
  }

  if (!resume.includes("github")) {
    suggestions.push("Add your GitHub profile.");
  }

  if (!resume.includes("linkedin")) {
    suggestions.push("Add your LinkedIn profile.");
  }

  if (!resume.includes("certification")) {
    suggestions.push("Mention relevant certifications.");
  }

  if (suggestions.length === 0) {
    suggestions.push("Your resume is well structured. Keep updating your skills.");
  }

  return {
    score,
    strengths,
    missing,
    suggestions,
  };
}