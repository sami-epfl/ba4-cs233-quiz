// ============================================================
//  KNN — K-Nearest Neighbors & Classification basics
// ============================================================

registerTopic("KNN",

  // Q1
  {
    type: "scq",
    question: "In a weight classification task (underweight / normal weight / overweight), which of the following are the features used to predict the labels?",
    options: [
      "Underweight, normal weight, overweight",
      "Height and weight",
      "Age and gender",
      "BMI only"
    ],
    answer: 1,
    explanation: "The labels are the classes to predict (underweight, normal, overweight). The features used to make the prediction are height and weight."
  },

  // Q1b
  {
    type: "scq",
    question: "In a weight classification task, which of the following are the labels?",
    options: [
      "Height and weight",
      "Age and BMI",
      "Underweight, normal weight, overweight",
      "Mean and standard deviation"
    ],
    answer: 2,
    explanation: "Labels are the target classes the model learns to predict. Here: underweight, normal weight, overweight."
  },

  // Q2
  {
    type: "tf",
    question: "A classification problem where classes are well-separated is always easy, regardless of where the class boundaries are drawn.",
    answer: false,
    explanation: "Ambiguities at class boundaries can still make classification difficult, and difficulty depends on how much mis-classification we are willing to allow."
  },

  // Q3
  {
    type: "scq",
    question: "What should the test set share in common with the training set?",
    options: [
      "The same number of samples",
      "A similar data distribution",
      "The same mean and standard deviation",
      "The same labels in the same proportions"
    ],
    answer: 1,
    explanation: "Both sets should come from a similar data distribution so that performance on the test set is representative of real-world performance."
  },

  // Q4
  {
    type: "scq",
    question: "Why do we use the mean and std of the training set — and not the test set — to normalize the test data?",
    options: [
      "Because the test set is always larger than the training set",
      "Because we are not supposed to know anything about the test set during training",
      "Because the test set's mean and std are always zero",
      "To make the test set harder to overfit"
    ],
    answer: 1,
    explanation: "Using test set statistics during training would constitute data leakage. We assume training and test data share the same distribution, so training statistics are valid to apply to both."
  },

  // Q4b
  {
    type: "tf",
    question: "It is acceptable to use the mean and standard deviation of the test set to normalize the training data.",
    answer: false,
    explanation: "We must not use any information from the test set during training. The training set's mean and std are used to normalize both training and test data."
  },

  // Q5
  {
    type: "scq",
    question: "Which of the following is a key limitation of using accuracy as the sole evaluation metric?",
    options: [
      "Accuracy is too slow to compute",
      "Accuracy does not account for class imbalances",
      "Accuracy requires normalized data",
      "Accuracy only works for binary classification"
    ],
    answer: 1,
    explanation: "If most samples belong to one class, a model that always predicts that class achieves high accuracy without learning anything useful. Accuracy also ignores the severity of specific mistakes."
  },

  // Q5b
  {
    type: "tf",
    question: "A model that always predicts the majority class can achieve high accuracy on an imbalanced dataset.",
    answer: true,
    explanation: "This is exactly why accuracy alone is misleading on imbalanced datasets — it rewards predicting the dominant class without any real learning."
  },

  // Q6
  {
    type: "scq",
    question: "Which tool gives a detailed view of what specific mistakes a classification model makes?",
    options: [
      "Learning curve",
      "Confusion matrix",
      "ROC curve",
      "Loss function"
    ],
    answer: 1,
    explanation: "A confusion matrix counts all predictions vs. expected labels, letting you see exactly which classes are being confused with which."
  },

  // Q6b
  {
    type: "scq",
    question: "How can accuracy be improved to better handle class imbalances?",
    options: [
      "By increasing the number of features",
      "By normalizing the data",
      "By assigning higher weights to underrepresented classes",
      "By using a larger test set"
    ],
    answer: 2,
    explanation: "Weighted accuracy assigns more importance to correctly classifying rare classes, making the metric more meaningful on imbalanced datasets."
  },

  // Q7
  {
    type: "scq",
    question: "Besides accuracy, which of the following should be considered when choosing hyperparameters?",
    options: [
      "The number of training epochs only",
      "Model complexity, robustness, speed, and scalability",
      "The size of the confusion matrix",
      "The number of output classes"
    ],
    answer: 1,
    explanation: "When possible, simpler models should be preferred over complex ones. Other important criteria include robustness, speed, and scalability."
  },

  // Q7b
  {
    type: "tf",
    question: "When two models achieve similar accuracy, we should generally prefer the more complex one.",
    answer: false,
    explanation: "One should choose simpler models over more complicated ones when performance is comparable — this reduces overfitting risk and improves generalization."
  }

);
