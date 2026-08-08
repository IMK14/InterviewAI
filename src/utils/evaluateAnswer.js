export function evaluateAnswer(question, userAnswer) {
  if (!question || !question.keywords) {
    return {
      score: 0,
      matched: [],
      missing: [],
      feedback: "No evaluation available.",
    };
  }

  const answer = userAnswer.toLowerCase();

  const matched = [];
  const missing = [];

  question.keywords.forEach((keyword) => {
    if (answer.includes(keyword.toLowerCase())) {
      matched.push(keyword);
    } else {
      missing.push(keyword);
    }
  });

  const score = Math.round(
    (matched.length / question.keywords.length) * question.marks
  );

  let feedback = "";

  if (score >= question.marks * 0.9) {
    feedback = "Excellent answer.";
  } else if (score >= question.marks * 0.7) {
    feedback = "Good answer. You can add a little more detail.";
  } else if (score >= question.marks * 0.5) {
    feedback = "Average answer. Some important points are missing.";
  } else {
    feedback = "Needs improvement. Review this topic again.";
  }

  return {
    score,
    matched,
    missing,
    feedback,
  };
}