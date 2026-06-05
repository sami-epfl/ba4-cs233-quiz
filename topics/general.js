// ============================================================
//  General — Questions générales du cours CS233
// ============================================================

registerTopic("General",

  // Q1
  {
    type: "mcq",
    question: "What parts of the linear regression equation are updated during training?",
    options: [
      "The bias and weights",
      "The prediction",
      "The feature values"
    ],
    answer: 0,
    explanation: "During training, the model updates the bias and weights."
  },

  // Q2
  {
    type: "mcq",
    question: "What's the role of gradient descent in linear regression?",
    options: [
      "Gradient descent helps to determine what type of loss to use when training a model, for example, L1 or L2.",
      "Gradient descent removes outliers from the dataset to help the model make better predictions.",
      "Gradient descent is an iterative process that finds the best weights and bias that minimize the loss."
    ],
    answer: 2,
    explanation: "Gradient descent is an iterative process that finds the best weights and bias that minimize the loss."
  },

  // Q3
  {
    type: "mcq",
    question: "What is the ideal learning rate?",
    options: [
      "The ideal learning rate is problem-dependent.",
      "1.0",
      "0.01"
    ],
    answer: 0,
    explanation: "Each model and dataset will have its own ideal learning rate."
  },

  // Q4
  {
    type: "mcq",
    question: "What's the best batch size when using mini-batch SGD?",
    options: [
      "It depends",
      "10 examples per batch",
      "100 examples per batch"
    ],
    answer: 0,
    explanation: "The ideal batch size depends on the dataset and the available compute resources."
  },

  // Q5
  {
    type: "mcq",
    question: "Which of the following statements is true?",
    options: [
      "Doubling the learning rate can slow down training.",
      "Larger batches are unsuitable for data with many outliers."
    ],
    answer: 0,
    explanation: "Doubling the learning rate can result in a learning rate that is too large, and therefore cause the weights to \"bounce around,\" increasing the amount of time needed to converge. Larger batches actually help with outliers by averaging more gradients together."
  },

  // Q6
  {
    type: "mcq",
    question: "A model outputs 5 TP, 6 TN, 3 FP, and 2 FN. Calculate the recall.",
    options: [
      "0.714",
      "0.625",
      "0.455"
    ],
    answer: 0,
    explanation: "Recall = TP / (TP + FN) = 5 / (5 + 2) = 5/7 ≈ 0.714."
  },

  // Q7
  {
    type: "mcq",
    question: "A model outputs 3 TP, 4 TN, 2 FP, and 1 FN. Calculate the precision.",
    options: [
      "0.6",
      "0.429",
      "0.75"
    ],
    answer: 0,
    explanation: "Precision = TP / (TP + FP) = 3 / (3 + 2) = 3/5 = 0.6."
  },

  // Q8
  {
    type: "mcq",
    question: "When should you use accuracy as a metric?",
    options: [
      "As a rough indicator of training progress on balanced datasets, combined with other metrics.",
      "When false negatives are more expensive than false positives.",
      "When it's very important for positive predictions to be accurate.",
      "When the dataset is highly imbalanced."
    ],
    answer: 0,
    explanation: "Accuracy is best used as a rough indicator of training progress/convergence for balanced datasets. It should be combined with other metrics and avoided for imbalanced datasets."
  },

  // Q9
  {
    type: "mcq",
    question: "In a medical screening test, missing a sick patient (false negative) is far more dangerous than a false alarm. Which metric should you prioritize?",
    options: [
      "Precision",
      "Accuracy",
      "Recall (True positive rate)",
      "False positive rate"
    ],
    answer: 2,
    explanation: "Recall should be used when false negatives are more expensive than false positives — such as missing a sick patient."
  },

  // Q10
  {
    type: "mcq",
    question: "A spam filter that wrongly blocks legitimate emails causes major disruptions. Which metric should you prioritize to minimize this?",
    options: [
      "Recall",
      "Accuracy",
      "Precision",
      "False positive rate"
    ],
    answer: 3,
    explanation: "False positive rate should be used when false positives are more expensive than false negatives — such as wrongly blocking legitimate emails."
  },

  // Q11
  {
    type: "mcq",
    question: "A fraud detection system flags transactions as fraudulent. Each flagged transaction triggers a costly manual review. Which metric should you prioritize?",
    options: [
      "Accuracy",
      "Recall",
      "False positive rate",
      "Precision"
    ],
    answer: 3,
    explanation: "Precision should be used when it's very important for positive predictions to be accurate — here, each positive prediction triggers an expensive action."
  },

  // Q12
  {
    type: "mcq",
    question: "You're building a binary classifier that checks photos of insect traps for whether a dangerous invasive species is present. If the model detects the species, the entomologist on duty is notified. Early detection is critical to preventing an infestation. A false alarm is easy to handle: the entomologist sees the photo was misclassified and marks it as such. Assuming an acceptable accuracy level, which metric should this model be optimized for?",
    options: [
      "Recall",
      "Precision",
      "False positive rate (FPR)"
    ],
    answer: 0,
    explanation: "In this scenario, false alarms (FP) are low-cost, and false negatives are highly costly, so it makes sense to maximize recall, or the probability of detection."
  }

);
