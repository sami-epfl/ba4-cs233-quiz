// ============================================================
//  Review — Regularization & Linear Classifiers
// ============================================================

registerTopic("Review",

  // --- Regularization ---

  {
    type: "flashcard",
    question: "Why use a regularizer?",
    answer: "To prevent overfitting. A model that's too flexible fits training data closely but generalizes poorly. A regularizer adds a penalty to large weights, discouraging excess complexity — it trades a slightly worse training fit for better generalization."
  },

  {
    type: "flashcard",
    question: "When should you use regularization?",
    answer: "When your model performs well on training data but poorly on validation or test data — a classic sign of overfitting."
  },

  {
    type: "flashcard",
    question: "How do you choose the regularization parameter λ?",
    answer: "Use a validation set or cross-validation to find the value of λ that minimizes held-out error."
  },

  {
    type: "mcq",
    question: "What is the key difference between L1 (Lasso) and L2 (Ridge) regularization?",
    options: [
      "L1 shrinks all weights smoothly; L2 promotes sparsity.",
      "L1 promotes sparsity (many weights go to zero); L2 shrinks all weights smoothly.",
      "L1 is only used for classification; L2 is only used for regression.",
      "L1 penalizes Σwᵢ²; L2 penalizes Σ|wᵢ|."
    ],
    answer: 1,
    explanation: "L1 penalizes Σ|wᵢ|, promoting sparsity (many weights become exactly zero). L2 penalizes Σwᵢ², shrinking all weights smoothly without zeroing them out."
  },

  {
    type: "flashcard",
    question: "Why is L2 easier to optimize than L1?",
    answer: "L2 is a convex, differentiable function everywhere — gradient descent applies directly. L1 is convex but not differentiable at zero, requiring subgradient methods or coordinate descent."
  },

  // --- Linear Models ---

  {
    type: "flashcard",
    question: "What is linear regression?",
    answer: "A linear model that predicts a continuous output: ŷ = wᵀx + b. Trained by minimizing squared error loss."
  },

  {
    type: "flashcard",
    question: "What is least squares classification?",
    answer: "A classifier that fits a linear model using squared error loss and assigns labels based on the sign of the output. Simple but sensitive to outliers and class imbalance."
  },

  {
    type: "flashcard",
    question: "What is logistic regression?",
    answer: "A linear classifier that passes the output through the sigmoid function to produce a probability. Trained by minimizing cross-entropy (log loss), which is better suited to classification than squared error."
  },

  // --- Decision Boundaries & SVM ---

  {
    type: "flashcard",
    question: "What makes a good decision boundary?",
    answer: "One that maximizes the margin — the distance between the boundary and the nearest training samples from each class."
  },

  {
    type: "flashcard",
    question: "What is a Support Vector Machine (SVM)?",
    answer: "A linear classifier that maximizes the margin while correctly classifying training examples (hard-margin) or tolerating a few violations (soft-margin). The samples closest to the boundary are the support vectors. Trained with hinge loss."
  },

  // --- The Three Linear Classifiers ---

  {
    type: "mcq",
    question: "All three linear classifiers (least squares, logistic regression, SVM) use wᵀx + b. What is the only thing that differentiates them?",
    options: [
      "The activation function applied to the output.",
      "The number of layers used during training.",
      "The loss function used during training.",
      "The type of regularization applied."
    ],
    answer: 2,
    explanation: "All three use wᵀx + b as the model. The difference is the loss: squared error for least squares, cross-entropy for logistic regression, and hinge loss for SVM."
  },

  {
    type: "mcq",
    question: "Match each classifier to its loss function — which row is correct?",
    options: [
      "Least squares → hinge loss / Logistic → squared error / SVM → cross-entropy",
      "Least squares → cross-entropy / Logistic → hinge loss / SVM → squared error",
      "Least squares → squared error / Logistic → cross-entropy / SVM → hinge loss",
      "All three use cross-entropy but with different margins."
    ],
    answer: 2,
    explanation: "Least squares uses squared error (y − ŷ)², logistic regression uses cross-entropy/log loss, and SVM uses hinge loss max(0, 1 − y·ŷ)."
  },

  {
    type: "mcq",
    question: "Which statement about logistic regression's output is correct?",
    options: [
      "It outputs a raw margin score like SVM.",
      "It outputs a probability in [0, 1] via the sigmoid function.",
      "It outputs a discrete label directly without a probability.",
      "It outputs a real value like linear regression."
    ],
    answer: 1,
    explanation: "Logistic regression passes wᵀx + b through the sigmoid function, producing a probability in [0, 1]. This makes it probabilistic and well-calibrated."
  },

  // --- Feature Expansion ---

  {
    type: "flashcard",
    question: "What hyperparameter must you choose when using polynomial feature expansion?",
    answer: "The degree of the polynomial. A higher degree gives the model more flexibility but risks overfitting."
  },

  {
    type: "tf",
    question: "Polynomial functions are the only valid choice for feature expansion.",
    answer: false,
    explanation: "There is no reason to limit ourselves to polynomial functions — any basis functions (e.g. sinusoids, exponentials) can be used for feature expansion."
  },

  {
    type: "mcq",
    question: "What is the main risk of using very high-degree polynomials or many different basis functions for feature expansion?",
    options: [
      "The model becomes too simple and underfits the training data.",
      "The model may overfit — it fits the training data well but generalizes poorly.",
      "Gradient descent cannot converge when too many features are used.",
      "The loss function becomes non-convex."
    ],
    answer: 1,
    explanation: "Using high-degree polynomials or many other functions greatly increases model capacity. Without regularization, this typically leads to overfitting."
  },

  {
    type: "mcq",
    question: "Why is cross-validation not a practical solution for choosing which basis functions to use in feature expansion?",
    options: [
      "Cross-validation cannot be applied to non-polynomial models.",
      "Cross-validation requires labeled test data which is rarely available.",
      "The number of possible combinations of functions grows in a combinatorial manner, making exhaustive search infeasible.",
      "Cross-validation only works when the degree of the polynomial is fixed."
    ],
    answer: 2,
    explanation: "While cross-validation could in principle select the best set of basis functions, the number of choices grows combinatorially with the number of candidate functions, making it impractical."
  },

  {
    type: "tf",
    question: "Cross-validation could in principle be used to choose which basis functions to include in a feature expansion.",
    answer: true,
    explanation: "It is theoretically possible, but impractical because the number of combinations of functions grows in a combinatorial manner — the search space becomes too large."
  },

  {
    type: "mcq",
    question: "What is the core challenge that feature expansion introduces compared to raw linear models?",
    options: [
      "Feature expansion makes the model non-linear, so gradient descent no longer applies.",
      "You must choose which features (functions) to include, and making the wrong choice can cause overfitting or underfitting.",
      "Feature expansion always increases the training error.",
      "Feature expansion removes the ability to use regularization."
    ],
    answer: 1,
    explanation: "Feature expansion adds flexibility but forces a model selection problem: which basis functions to use? Too many leads to overfitting; too few to underfitting. Cross-validation is theoretically possible but combinatorially expensive."
  },

  {
    type: "mcq",
    question: "Which of the following is true about feature expansion?",
    options: [
      "It is limited to polynomial transformations of the input.",
      "It always improves generalization regardless of the functions chosen.",
      "It transforms the input into a richer feature space, allowing a linear model to capture non-linear patterns.",
      "It requires more training data only when using L1 regularization."
    ],
    answer: 2,
    explanation: "Feature expansion maps inputs into a higher-dimensional feature space using basis functions. The linear model then operates in this new space, effectively fitting non-linear patterns in the original input."
  },

  {
    type: "flashcard",
    question: "What is the fundamental trade-off in feature expansion?",
    answer: "More basis functions (higher degree polynomials, more function types) give the model more capacity to fit complex patterns, but increase the risk of overfitting. Fewer functions reduce overfitting risk but may underfit. Choosing the right set is a model selection problem that grows combinatorially."
  },

);
