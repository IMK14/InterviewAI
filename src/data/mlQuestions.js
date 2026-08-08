const mlQuestions = {
  Easy: [
    {
      id: 1,
      question: "What is Machine Learning?",
      answer:
        "Machine Learning is a branch of Artificial Intelligence that enables computers to learn patterns from data without explicit programming.",
      keywords: ["machine learning", "AI", "data", "patterns"],
      marks: 10,
      topic: "Introduction",
    },
    {
      id: 2,
      question: "What is Artificial Intelligence?",
      answer:
        "Artificial Intelligence is the simulation of human intelligence in machines that can think, learn, and make decisions.",
      keywords: ["AI", "intelligence", "machines"],
      marks: 10,
      topic: "Introduction",
    },
    {
      id: 3,
      question: "What is Supervised Learning?",
      answer:
        "Supervised learning trains a model using labeled data to predict outputs.",
      keywords: ["supervised", "labeled", "training"],
      marks: 10,
      topic: "Learning",
    },
    {
      id: 4,
      question: "What is Unsupervised Learning?",
      answer:
        "Unsupervised learning finds hidden patterns in unlabeled data.",
      keywords: ["unsupervised", "unlabeled", "clustering"],
      marks: 10,
      topic: "Learning",
    },
    {
      id: 5,
      question: "What is Reinforcement Learning?",
      answer:
        "Reinforcement learning trains an agent through rewards and penalties.",
      keywords: ["reward", "agent", "reinforcement"],
      marks: 10,
      topic: "Learning",
    },
    {
      id: 6,
      question: "What is a Dataset?",
      answer:
        "A dataset is a collection of data used to train and evaluate machine learning models.",
      keywords: ["dataset", "data", "training"],
      marks: 10,
      topic: "Data",
    },
    {
      id: 7,
      question: "What is Training Data?",
      answer:
        "Training data is the data used to teach a machine learning model.",
      keywords: ["training", "dataset"],
      marks: 10,
      topic: "Data",
    },
    {
      id: 8,
      question: "What is Testing Data?",
      answer:
        "Testing data is used to evaluate a trained model on unseen examples.",
      keywords: ["testing", "evaluation"],
      marks: 10,
      topic: "Data",
    },
    {
      id: 9,
      question: "What is Overfitting?",
      answer:
        "Overfitting occurs when a model memorizes training data and performs poorly on new data.",
      keywords: ["overfitting", "training", "generalization"],
      marks: 10,
      topic: "Model Evaluation",
    },
    {
      id: 10,
      question: "What is Underfitting?",
      answer:
        "Underfitting occurs when a model is too simple to learn the underlying patterns in the data.",
      keywords: ["underfitting", "model", "training"],
      marks: 10,
      topic: "Model Evaluation",
    },
  ],

  Medium: [
    {
      id: 101,
      question: "Explain Gradient Descent.",
      answer:
        "Gradient Descent minimizes the loss function by updating model parameters in the direction of the negative gradient.",
      keywords: ["gradient", "loss", "optimization", "learning rate"],
      marks: 15,
      topic: "Optimization",
    },
    {
      id: 102,
      question: "Explain Decision Trees.",
      answer:
        "Decision Trees split data into branches based on feature values to make predictions.",
      keywords: ["tree", "classification", "regression"],
      marks: 15,
      topic: "Algorithms",
    },
    {
      id: 103,
      question: "What is Random Forest?",
      answer:
        "Random Forest is an ensemble learning algorithm that combines multiple decision trees.",
      keywords: ["random forest", "ensemble", "trees"],
      marks: 15,
      topic: "Algorithms",
    },
    {
      id: 104,
      question: "What is Cross Validation?",
      answer:
        "Cross validation evaluates model performance by splitting data into multiple training and testing folds.",
      keywords: ["cross validation", "fold", "testing"],
      marks: 15,
      topic: "Evaluation",
    },
    {
      id: 105,
      question: "Explain Logistic Regression.",
      answer:
        "Logistic Regression is a classification algorithm that predicts probabilities using the sigmoid function.",
      keywords: ["logistic", "classification", "sigmoid"],
      marks: 15,
      topic: "Algorithms",
    },
    {
      id: 106,
      question: "What is Precision?",
      answer:
        "Precision measures how many predicted positive values are actually correct.",
      keywords: ["precision", "true positive"],
      marks: 15,
      topic: "Metrics",
    },
    {
      id: 107,
      question: "What is Recall?",
      answer:
        "Recall measures how many actual positive values are correctly identified.",
      keywords: ["recall", "true positive"],
      marks: 15,
      topic: "Metrics",
    },
    {
      id: 108,
      question: "What is F1 Score?",
      answer:
        "F1 Score is the harmonic mean of precision and recall.",
      keywords: ["f1", "precision", "recall"],
      marks: 15,
      topic: "Metrics",
    },
    {
      id: 109,
      question: "Explain Feature Engineering.",
      answer:
        "Feature Engineering involves creating and selecting meaningful features to improve model performance.",
      keywords: ["feature", "engineering", "selection"],
      marks: 15,
      topic: "Features",
    },
    {
      id: 110,
      question: "What is ROC Curve?",
      answer:
        "ROC Curve evaluates classification performance by plotting true positive rate against false positive rate.",
      keywords: ["roc", "classification", "auc"],
      marks: 15,
      topic: "Evaluation",
    },
  ],

  Hard: [
    {
      id: 201,
      question: "Explain Transformer Architecture.",
      answer:
        "Transformers use self-attention mechanisms and positional encoding to process sequential data.",
      keywords: ["transformer", "attention", "NLP"],
      marks: 20,
      topic: "Deep Learning",
    },
    {
      id: 202,
      question: "Difference between CNN and RNN.",
      answer:
        "CNNs are used mainly for images, while RNNs process sequential data such as text and time series.",
      keywords: ["cnn", "rnn", "images", "sequence"],
      marks: 20,
      topic: "Deep Learning",
    },
    {
      id: 203,
      question: "Explain LSTM.",
      answer:
        "LSTM is a type of recurrent neural network designed to remember long-term dependencies.",
      keywords: ["lstm", "memory", "sequence"],
      marks: 20,
      topic: "Deep Learning",
    },
    {
      id: 204,
      question: "Explain Attention Mechanism.",
      answer:
        "Attention allows a model to focus on important parts of the input sequence.",
      keywords: ["attention", "focus"],
      marks: 20,
      topic: "Deep Learning",
    },
    {
      id: 205,
      question: "What is XGBoost?",
      answer:
        "XGBoost is an optimized gradient boosting algorithm widely used for structured data.",
      keywords: ["xgboost", "boosting"],
      marks: 20,
      topic: "Algorithms",
    },
    {
      id: 206,
      question: "Explain PCA.",
      answer:
        "Principal Component Analysis reduces dimensionality while preserving important information.",
      keywords: ["pca", "dimensionality"],
      marks: 20,
      topic: "Dimensionality Reduction",
    },
    {
      id: 207,
      question: "What are GANs?",
      answer:
        "Generative Adversarial Networks consist of a generator and discriminator competing to create realistic data.",
      keywords: ["gan", "generator", "discriminator"],
      marks: 20,
      topic: "Deep Learning",
    },
    {
      id: 208,
      question: "Explain Batch Normalization.",
      answer:
        "Batch Normalization normalizes inputs between layers to improve training speed and stability.",
      keywords: ["batch normalization", "training"],
      marks: 20,
      topic: "Optimization",
    },
    {
      id: 209,
      question: "How do you optimize Deep Learning models?",
      answer:
        "Optimization techniques include learning rate tuning, regularization, dropout, and better optimizers.",
      keywords: ["dropout", "learning rate", "optimizer"],
      marks: 20,
      topic: "Optimization",
    },
    {
      id: 210,
      question: "What is Transfer Learning?",
      answer:
        "Transfer Learning reuses a pretrained model for a new but related task.",
      keywords: ["transfer learning", "pretrained"],
      marks: 20,
      topic: "Deep Learning",
    },
  ],
};

export default mlQuestions;