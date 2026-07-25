const mlQuestions = {
  Easy: [
    {
      id: 1,
      question: "What is Machine Learning?",
      answer:
        "Machine Learning is a branch of Artificial Intelligence where computers learn patterns from data without explicit programming.",
      keywords: [
        "Artificial Intelligence",
        "data",
        "learn",
        "patterns"
      ],
      marks: 10,
      topic: "Introduction"
    },

    {
      id: 2,
      question: "What is Artificial Intelligence?",
      answer:
        "Artificial Intelligence enables machines to simulate human intelligence for decision making and problem solving.",
      keywords: [
        "machines",
        "intelligence",
        "decision making"
      ],
      marks: 10,
      topic: "Introduction"
    },

    {
      id: 3,
      question: "Define Dataset.",
      answer:
        "A dataset is a collection of data used to train and test machine learning models.",
      keywords: [
        "collection",
        "training",
        "testing"
      ],
      marks: 10,
      topic: "Dataset"
    }
  ],

  Medium: [
    {
      id: 101,
      question: "Explain Gradient Descent.",
      answer:
        "Gradient Descent is an optimization algorithm that minimizes the loss function by updating model parameters.",
      keywords: [
        "optimization",
        "loss",
        "gradient"
      ],
      marks: 15,
      topic: "Optimization"
    },

    {
      id: 102,
      question: "Explain Decision Tree.",
      answer:
        "Decision Tree is a supervised learning algorithm used for classification and regression.",
      keywords: [
        "classification",
        "regression",
        "tree"
      ],
      marks: 15,
      topic: "Algorithms"
    }
  ],

  Hard: [
    {
      id: 201,
      question: "Explain Transformer Architecture.",
      answer:
        "Transformer is a deep learning architecture based on self-attention mechanisms used in NLP and modern AI.",
      keywords: [
        "attention",
        "NLP",
        "deep learning"
      ],
      marks: 20,
      topic: "Deep Learning"
    }
  ]
};

export default mlQuestions;