export function evaluateAnswer(userAnswer, questionData) {
  const answer = userAnswer.toLowerCase();

  let matched = [];

  questionData.keywords.forEach((keyword) => {
    if (answer.includes(keyword.toLowerCase())) {
      matched.push(keyword);
    }
  });

  const score = Math.round(
    (matched.length / questionData.keywords.length) *
      questionData.marks
  );

  return {
    score,
    matched,
    missing: questionData.keywords.filter(
      (k) => !matched.includes(k)
    ),
    expectedAnswer: questionData.answer,
  };
}