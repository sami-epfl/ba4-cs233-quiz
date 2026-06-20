// ============================================================
//  CS233 — 2019 Exam (corrected)
// ============================================================

// ── Explanation helpers using the engine's CSS variables ──────────────────
const _section = (title, color, body) =>
  `<div style="margin:8px 0 4px;padding:8px 11px;background:var(--bg);border:1px solid var(--border);border-left:3px solid ${color};border-radius:0 8px 8px 0">` +
  `<div style="font-size:.68em;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:${color};margin-bottom:5px">${title}</div>` +
  `<div style="display:flex;flex-direction:column;gap:4px">${body}</div>` +
  `</div>`;

const _row = (color, text) =>
  `<div style="padding-left:8px;border-left:2px solid ${color}44;font-size:.95em;line-height:1.5">${text}</div>`;

const _badge = (cls, text) => `<span class="opt-tag ${cls}">${text}</span>`;
const _ok    = () => _badge("tag-correct", "✓");
const _ko    = () => _badge("tag-wrong",   "✗");
const _tip   = () => _badge("tag-also",    "💡");

const _code  = t => `<code style="background:var(--surface);color:var(--accent);padding:1px 5px;border-radius:4px;font-size:.88em">${t}</code>`;

registerTopic("Exam 2019",

  // Q1 — MCQ
  {
    type: "mcq",
    question: "Which of the following statements regarding the K-means algorithm are true?",
    options: [
      "The number of clusters is unknown during the process of the K-means algorithm",
      "The K-means algorithm may NOT converge",
      "The K-means algorithm always converges to the best (desired) solution",
      "With K-means, different distance metrics will NOT change the final assignment of each cluster",
      "The K-means algorithm is unsupervised"
    ],
    answers: [4],
    explanation:
      _section("Correct", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>Unsupervised</strong> — K-means groups data using distances only, no labels needed.`)
      ) +
      _section("Incorrect", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} <strong>K is not unknown</strong> — K must be fixed by the user before running.`) +
        _row("var(--wrong)", `${_ko()} <strong>Converges, but not to the best solution</strong> — The objective is non-increasing so it always converges, but only to a local minimum.`) +
        _row("var(--wrong)", `${_ko()} <strong>Metric does matter</strong> — Switching L₁ ↔ L₂ ↔ cosine can change which cluster each point belongs to.`)
      )
  },

  // Q2 — MCQ
  {
    type: "mcq",
    question: "Alex plans to use the K-means algorithm to cluster data for 200 people into males and females. The attributes include height (meters), weight (kilograms), 100m sprint record (seconds), high jump record (meters), and long jump record (meters). Which of the following processes are well suited to this dataset?",
    options: [
      "Use the L₁ distance with the raw data",
      "Set number of clusters to 100 in order to reduce the average within-cluster sum of squares",
      "Use the Euclidean distance with the raw data",
      "Scale each attribute appropriately"
    ],
    answers: [3],
    explanation:
      _section("Correct", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>Scale each attribute</strong> — Features are in completely different units (kg, m, s). Without scaling, weight (e.g. 70) would dominate height (e.g. 1.75) in every distance computation.`)
      ) +
      _section("Incorrect", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} <strong>Raw data + any distance</strong> — Whether L₁ or L₂, high-magnitude features dominate. The metric choice alone can't fix this.`) +
        _row("var(--wrong)", `${_ko()} <strong>K = 100 for 2 classes</strong> — We want to separate males from females, so K = 2 is the right choice. K = 100 produces arbitrary clusters useless for this task.`)
      )
  },

  // Q3 — MCQ
  {
    type: "mcq",
    question: "Which of the following statements regarding the SVM algorithm are true?",
    options: [
      "The Lagrangian dual function provides an upper bound to the original problem",
      "The SVM formulation is a linear program with quadratic constraints",
      "The SVM algorithm aims to minimize the distance between the decision boundary and the point closest to this boundary",
      "The support vectors are subset of the data points"
    ],
    answers: [3],
    explanation:
      _section("Correct", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>Support vectors ⊆ data points</strong> — They are exactly the training points lying on or inside the margin. All other points are irrelevant to the solution.`)
      ) +
      _section("Incorrect", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} <strong>Quadratic program, not linear</strong> — The objective ${_code("½‖w‖²")} is quadratic; the constraints are linear.`) +
        _row("var(--wrong)", `${_ko()} <strong>Maximizes margin, doesn't minimize it</strong> — SVM maximizes the distance to the nearest points.`) +
        _row("var(--wrong)", `${_ko()} <strong>Dual = lower bound</strong> — For a minimization problem, the Lagrangian dual always gives a lower bound. Strong duality holds at optimum (KKT conditions).`)
      )
  },

  // Q4 — MCQ
  {
    type: "mcq",
    question: "The soft-margin SVM problem minimizes ½‖w‖² + C∑ξᵢ subject to yᵢ(wᵀxᵢ + w₀) ≥ 1 − ξᵢ and ξᵢ ≥ 0. Which of the following statements are true?",
    options: [
      "If 0 < ξᵢ ≤ 1, sample i is correctly classified",
      "Increasing the value of C would allow more samples to be misclassified",
      "If ξᵢ ≥ 1, sample i is correctly classified",
      "If 0 < ξᵢ ≤ 1, sample i lies inside the margin"
    ],
    answers: [0, 3],
    explanation:
      _section("Slack variable ξᵢ — interpretation", "var(--accent)",
        _row("var(--accent)", `${_code("ξᵢ = 0")} → outside or on the margin, correctly classified`) +
        _row("var(--accent)", `${_code("0 < ξᵢ ≤ 1")} → inside the margin, but still on the correct side — correctly classified`) +
        _row("var(--accent)", `${_code("ξᵢ > 1")} → misclassified (wrong side of the boundary)`)
      ) +
      _section("Effect of C", "var(--text-muted)",
        _row("var(--text-muted)", `${_tip()} <strong>Larger C</strong> penalizes slack more → fewer violations → harder margin. Larger C means <em>fewer</em> misclassifications, not more.`)
      )
  },

  // Q5 — SCQ
  {
    type: "scq",
    question: "The Gaussian RBF kernel is k(xᵢ, xⱼ) = exp(−‖xᵢ − xⱼ‖² / 2σ²). We have three points z₁, z₂, and x. z₁ is geometrically very close to x, and z₂ is geometrically far away from x. What is the value of k(z₁, x) and k(z₂, x)?",
    options: [
      "k(z₁, x) will be close to 1 and k(z₂, x) will be close to 0",
      "k(z₁, x) will be close to c₁, with c₁ ≫ 1, and k(z₂, x) will be close to c₂, with c₂ ≪ 0",
      "k(z₁, x) will be close to 0 and k(z₂, x) will be close to 1",
      "k(z₁, x) will be close to c₁, with c₁ ≪ 0, and k(z₂, x) will be close to c₂, with c₂ ≫ 1"
    ],
    answer: 0,
    explanation:
      _section("RBF kernel = similarity score in (0, 1]", "var(--accent)",
        _row("var(--accent)", `${_code("k(xᵢ, xⱼ) = exp(−‖xᵢ − xⱼ‖² / 2σ²)")}`)
      ) +
      _section("Evaluating both cases", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>z₁ close to x</strong> → ${_code("‖z₁ − x‖² ≈ 0")} → ${_code("exp(0) = 1")} → k ≈ 1`) +
        _row("var(--correct)", `${_ok()} <strong>z₂ far from x</strong> → ${_code("‖z₂ − x‖²")} large → ${_code("exp(−∞) → 0")} → k ≈ 0`)
      ) +
      _section("Why B and D are impossible", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} The RBF output is <strong>always in (0, 1]</strong>. Values above 1 or below 0 are mathematically impossible.`)
      )
  },

  // Q6 — MCQ
  {
    type: "mcq",
    question: "The kernel trick:",
    options: [
      "Exploits the fact that, in many learning algorithms, the weights can be written as a linear combination of the training samples",
      "Changes ridge regression so that we can solve a D×D linear system instead of an N×N system, given N training samples with D features",
      "Enables the use of infinite-dimensional feature spaces",
      "Results in non-linear decision boundaries using algorithms designed originally for linear models",
      "Generates a symmetric and invertible kernel matrix"
    ],
    answers: [0, 2, 3],
    explanation:
      _section("Correct", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>Representer theorem</strong> — The optimal solution can be written as ${_code("w = Σ αᵢ xᵢ")}, a linear combination of training samples. This is what makes kernelization possible.`) +
        _row("var(--correct)", `${_ok()} <strong>Infinite-dimensional features</strong> — The RBF kernel corresponds to an infinite-dimensional feature map, computed implicitly via ${_code("k(x, x') = φ(x)·φ(x')")}.`) +
        _row("var(--correct)", `${_ok()} <strong>Non-linear boundaries</strong> — A linear algorithm in feature space becomes non-linear in the original input space.`)
      ) +
      _section("Incorrect", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} <strong>N×N, not D×D</strong> — The kernel trick replaces the D×D system with an N×N system. Useful when D ≫ N, not the reverse.`) +
        _row("var(--wrong)", `${_ko()} <strong>Not necessarily invertible</strong> — The kernel matrix K is symmetric and positive semi-definite, but not guaranteed invertible.`)
      )
  },

  // Q7 — MCQ
  {
    type: "mcq",
    question: "Which of the following statements about overfitting are correct?",
    options: [
      "The training set loss is higher than the validation set loss as the model overfits",
      "Choosing more complex machine learning methods will typically reduce overfitting",
      "The validation set loss is higher than the training set loss as the model overfits",
      "Training with more data will typically reduce overfitting",
      "In general, the gap between the validation set loss and the training set loss increases with the iterations",
      "Regularization of the model parameters will typically reduce overfitting"
    ],
    answers: [2, 3, 4, 5],
    explanation:
      _section("Correct", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>Val loss > Train loss</strong> — The model memorizes training data, so training loss is low while validation loss stays high.`) +
        _row("var(--correct)", `${_ok()} <strong>More data reduces overfitting</strong> — With more samples the model can't memorize everything and is forced to generalize.`) +
        _row("var(--correct)", `${_ok()} <strong>Gap grows with iterations</strong> — Past the optimal stopping point, training loss keeps falling while validation loss rises.`) +
        _row("var(--correct)", `${_ok()} <strong>Regularization reduces overfitting</strong> — L1/L2 penalties constrain weights, reducing model complexity.`)
      ) +
      _section("Incorrect", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} <strong>Train loss > val loss</strong> — This is the signature of underfitting, not overfitting.`) +
        _row("var(--wrong)", `${_ko()} <strong>More complex = less overfit</strong> — More complex models are more prone to overfitting, not less.`)
      )
  },

  // Q8 — SCQ
  {
    type: "scq",
    question: "You are developing a deep learning system to predict whether a car driver is drowsy (1) or attentive (0), to prevent accidents. Which evaluation metric is the most useful to assess the performance of the model?",
    options: [
      "Accuracy",
      "Loss value",
      "Precision",
      "Recall"
    ],
    answer: 3,
    explanation:
      _section("Why Recall is critical here", "var(--correct)",
        _row("var(--correct)", `${_ok()} ${_code("Recall = TP / (TP + FN)")} — Measures how many actual drowsy drivers are correctly detected.`) +
        _row("var(--correct)", `A <strong>False Negative</strong> (missed drowsy driver) can cause a fatal accident. A <strong>False Positive</strong> (unnecessary alert) is merely annoying. We must minimize FN → maximize Recall.`)
      ) +
      _section("Why the others fall short", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} <strong>Accuracy</strong> — Misleading on imbalanced data. A model predicting "attentive" every time can score 95% while missing all drowsy drivers.`) +
        _row("var(--wrong)", `${_ko()} <strong>Precision</strong> — ${_code("TP / (TP + FP)")} focuses on false alarms, not missed detections. Wrong priority.`) +
        _row("var(--wrong)", `${_ko()} <strong>Loss value</strong> — A training objective, not a deployable evaluation metric.`)
      )
  },

  // Q9 — MCQ
  {
    type: "mcq",
    question: "We have a dataset of EPFL alumni who graduated in 2019 with semester-wise grades and current salary. We wish to use regression to predict salary from grades. Which of the following statements are true?",
    options: [
      "If grades are positively correlated with salary, we can conclude that people with lower grades will never get a higher salary",
      "With linear regression, a very large value of the bias term indicates that none of the features are influential, and that the dataset is very noisy",
      "It is typically easier to identify the influential features of the data leading to prediction for neural networks than for linear regression",
      "If you have to use additional data, using data from the class who graduated in 2018 might be more useful than that of 2010",
      "Linear regression is typically a better method than deep neural networks if the dataset is small"
    ],
    answers: [3, 4],
    explanation:
      _section("Correct", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>2018 data is more relevant</strong> — The 2018 cohort entered a similar job market as 2019. The 2010 class graduated during a post-crisis period with very different conditions.`) +
        _row("var(--correct)", `${_ok()} <strong>Linear regression wins on small data</strong> — Deep networks have millions of parameters and need large datasets. On small datasets, simpler models generalize better.`)
      ) +
      _section("Incorrect", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} <strong>Correlation ≠ no exceptions</strong> — A positive correlation means higher grades tend to predict higher salaries on average. It doesn't rule out individual exceptions.`) +
        _row("var(--wrong)", `${_ko()} <strong>Large bias ≠ uninformative features</strong> — The bias captures the mean prediction level. A large intercept just shifts predictions up, it says nothing about feature importance.`) +
        _row("var(--wrong)", `${_ko()} <strong>Neural networks are less interpretable</strong> — Linear regression weights are directly readable. Neural networks are black boxes.`)
      )
  },

  // Q10 — MCQ
  {
    type: "mcq",
    question: "You find that your linear regression model is underfitting the data. Which of the following options can potentially help?",
    options: [
      "Removing some features",
      "Using polynomial feature expansion",
      "Adding more features",
      "Adding ridge regularization on the model weights"
    ],
    answers: [1, 2],
    explanation:
      _section("Underfitting = model too simple", "var(--accent)",
        _row("var(--accent)", `${_tip()} Both training and validation loss are high. The fix is to <strong>increase model capacity</strong>.`)
      ) +
      _section("What helps", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>Polynomial feature expansion</strong> — Adding ${_code("x², x³, x₁x₂, …")} lets the model capture non-linear relationships while staying linear in parameters.`) +
        _row("var(--correct)", `${_ok()} <strong>Adding more features</strong> — New informative features give the model more signal, increasing predictive power.`)
      ) +
      _section("What makes it worse", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} <strong>Removing features</strong> — Fewer features = simpler model = more underfitting.`) +
        _row("var(--wrong)", `${_ko()} <strong>Ridge regularization</strong> — Regularization further constrains the model. If it already underfits, adding constraints makes it worse.`)
      )
  },

  // Q11 — MCQ
  {
    type: "mcq",
    question: "If we increase the regularization strength λ in ridge regression, which of the following statements are true?",
    options: [
      "The model underfits as the regularization parameter λ tends to ∞",
      "The weights tend to zero as the regularization parameter λ tends to ∞",
      "The model overfits as the regularization parameter λ tends to ∞",
      "Nothing can be said"
    ],
    answers: [0, 1],
    explanation:
      _section("Ridge regression", "var(--accent)",
        _row("var(--accent)", `Objective: ${_code("min ‖Xw − y‖² + λ‖w‖²")}`) +
        _row("var(--accent)", `Solution: ${_code("w* = (XᵀX + λI)⁻¹Xᵀy")}`)
      ) +
      _section("As λ → ∞", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>Weights → 0</strong> — The regularization term dominates and forces all weights toward zero.`) +
        _row("var(--correct)", `${_ok()} <strong>Model underfits</strong> — With all weights near zero, the model predicts approximately the mean of y regardless of input.`)
      ) +
      _section("Bias–variance tradeoff", "var(--text-muted)",
        _row("var(--text-muted)", `${_tip()} Small λ → low bias, high variance (overfit). Large λ → high bias, low variance (underfit). Optimal λ found via cross-validation.`)
      )
  },

  // Q12 — MCQ
  {
    type: "mcq",
    question: "Which ones of the following statements about PCA are correct?",
    options: [
      "After PCA, the data features become uncorrelated because the principal components are orthonormal",
      "PCA can be used to reduce noise in the data",
      "If we do not drop any principal components, it is always possible to reconstruct the original data without any loss of information",
      "PCA is an unsupervised method which can be used to do data feature manipulation",
      "In PCA, the principal components are ordered by the magnitude of the eigenvectors"
    ],
    answers: [0, 1, 2, 3],
    explanation:
      _section("Correct", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>Uncorrelated features</strong> — PCA diagonalizes the covariance matrix. Orthonormal eigenvectors → zero covariance in the new basis.`) +
        _row("var(--correct)", `${_ok()} <strong>Noise reduction</strong> — Low-variance components often capture noise. Dropping them removes noise while retaining signal.`) +
        _row("var(--correct)", `${_ok()} <strong>Perfect reconstruction</strong> — Keeping all components makes the transformation invertible. No information is lost.`) +
        _row("var(--correct)", `${_ok()} <strong>Unsupervised</strong> — PCA uses only the data matrix X, no labels needed.`)
      ) +
      _section("Incorrect", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} <strong>Ordered by eigenvalue, not eigenvector magnitude</strong> — Components are sorted by variance explained (eigenvalue). All eigenvectors are unit vectors.`)
      )
  },

  // Q13 — SCQ
  {
    type: "scq",
    question: `<img src="topics/images/2019_q13.png" style="max-width:420px;display:block;margin:8px auto;border-radius:8px;">Given a 2D dataset with two classes as shown above, and performing dimensionality reduction with PCA and LDA: what is the approximate direction of the first projection vector for each?`,
    options: [
      "y = x for PCA and y = x for LDA",
      "y = -x for PCA and y = x for LDA",
      "y = -x for PCA and y = -x for LDA",
      "y = x for PCA and y = -x for LDA"
    ],
    answer: 3,
    explanation:
      _section("PCA — maximize variance", "var(--accent)",
        _row("var(--accent)", `${_ok()} Data is spread along ${_code("y = x")}. PCA projects onto the direction of greatest variance → ${_code("y = x")}.`)
      ) +
      _section("LDA — maximize class separation", "var(--correct)",
        _row("var(--correct)", `${_ok()} The two classes overlap along y = x but are separated <em>perpendicularly</em>. LDA projects onto the direction that best separates the classes → ${_code("y = −x")}.`)
      ) +
      _section("Key distinction", "var(--text-muted)",
        _row("var(--text-muted)", `${_tip()} PCA is <strong>unsupervised</strong> (ignores labels). LDA is <strong>supervised</strong> (uses class information). Same data, completely different projections.`)
      )
  },

  // Q14 — SCQ
  {
    type: "scq",
    question: "Consider a normalized data matrix X̄. We solve Mcᵢ = λᵢcᵢ for M = (1/N)X̄X̄ᵀ. We want to recover the eigenvector bᵢ of the data covariance matrix S = (1/N)X̄ᵀX̄ with the same eigenvalue λᵢ. Which statement is true?",
    options: [
      "bᵢ = cᵢ",
      "bᵢ cannot be found",
      "bᵢ = X̄ᵀcᵢ + cᵢ",
      "bᵢ = X̄ᵀcᵢ"
    ],
    answer: 3,
    explanation:
      _section("Algebraic derivation", "var(--accent)",
        _row("var(--accent)", `Start: ${_code("(1/N) X̄X̄ᵀ cᵢ = λᵢ cᵢ")}`) +
        _row("var(--accent)", `Multiply left by X̄ᵀ: ${_code("(1/N) X̄ᵀX̄ (X̄ᵀcᵢ) = λᵢ (X̄ᵀcᵢ)")}`) +
        _row("var(--accent)", `This is ${_code("S · bᵢ = λᵢ bᵢ")} with ${_code("bᵢ = X̄ᵀcᵢ")}. ✓`)
      ) +
      _section("Why this matters", "var(--text-muted)",
        _row("var(--text-muted)", `${_tip()} When D > N, computing eigenvectors of the small N×N matrix M and recovering D-dimensional eigenvectors via ${_code("bᵢ = X̄ᵀcᵢ")} is much cheaper than solving the full D×D system.`)
      )
  },

  // Q15 — MCQ
  {
    type: "mcq",
    question: "Which of the following statements are true for a k-NN classifier?",
    options: [
      "The decision boundary becomes smoother as we increase the value of k",
      "k-NN is a parametric method",
      "k-NN can be used only in classification but not for regression problems",
      "The decision boundary becomes smoother as we decrease the value of k",
      "The training time is longer for a 10-NN classifier than for a 1-NN classifier"
    ],
    answers: [0],
    explanation:
      _section("Correct", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>Larger k → smoother boundary</strong> — With k = 1, each point is decided by its single nearest neighbor → jagged, high-variance boundary. As k grows, averaging over more neighbors smooths the boundary.`)
      ) +
      _section("Incorrect", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} <strong>Non-parametric, not parametric</strong> — k-NN has no fixed parameter vector. It stores the entire training set and classifies at inference time.`) +
        _row("var(--wrong)", `${_ko()} <strong>Works for regression too</strong> — k-NN regression predicts the average label of the k nearest neighbors.`) +
        _row("var(--wrong)", `${_ko()} <strong>Training time is the same (≈ zero)</strong> — k-NN stores data without training. All computation happens at prediction time, regardless of k.`)
      )
  },

  // Q16 — MCQ
  {
    type: "mcq",
    question: "Which of the following statements are true for logistic regression?",
    options: [
      "Logistic regression is a regression method",
      "Logistic regression is robust to outliers, as opposed to classification performed using linear regression",
      "In logistic regression, it is impossible to use regularization",
      "The prediction found as the output of the sigmoid function or the softmax function corresponds to the probability of the class assignment",
      "In logistic regression, we pass the result of the linear model wᵀx through a step function, which gives us a discrete output"
    ],
    answers: [1, 3],
    explanation:
      _section("Correct", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>Robust to outliers</strong> — The cross-entropy loss saturates for confident predictions. A far outlier barely affects the gradient. Linear regression uses squared loss which grows unboundedly.`) +
        _row("var(--correct)", `${_ok()} <strong>Output = probability</strong> — Sigmoid (binary) and softmax (multi-class) produce calibrated probabilities summing to 1.`)
      ) +
      _section("Incorrect", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} <strong>Classification, not regression</strong> — Despite its name, logistic regression is a classifier.`) +
        _row("var(--wrong)", `${_ko()} <strong>Regularization is possible</strong> — L1 and L2 penalties are widely used and available in all standard libraries.`) +
        _row("var(--wrong)", `${_ko()} <strong>Uses sigmoid, not a step function</strong> — A step function is non-differentiable, making gradient descent impossible.`)
      )
  },

  // Q17 — MCQ
  {
    type: "mcq",
    question: "The cross-entropy loss for multi-class logistic regression is R(W) = −∑ᵢ∑ₖ yᵢ⁽ᵏ⁾ ln ŷ⁽ᵏ⁾(xᵢ). Which of the following statements are true?",
    options: [
      "The loss is 0 for samples where the label and the prediction are the same",
      "∑ₖ ŷ⁽ᵏ⁾(xᵢ) = 1",
      "The prediction ŷ(xᵢ) is found by applying the softmax function to the output of a linear model Wxᵢ",
      "If sample i belongs to class 0, the loss is higher when the prediction is ŷᵢ = [0 0 0 0 1] than when the prediction is [0 1 0 0 0]",
      "Since it does not have a closed form solution, we have to use an iterative optimization method such as gradient descent",
      "It is not a differentiable loss function, therefore we cannot use gradient descent"
    ],
    answers: [0, 1, 2, 4],
    explanation:
      _section("Correct", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>Loss = 0 when perfect</strong> — If the model predicts probability 1 for the true class: ${_code("−ln(1) = 0")}.`) +
        _row("var(--correct)", `${_ok()} <strong>Probabilities sum to 1</strong> — Softmax output is a valid probability distribution.`) +
        _row("var(--correct)", `${_ok()} <strong>Softmax of Wxᵢ</strong> — Pipeline: linear model → softmax → class probabilities.`) +
        _row("var(--correct)", `${_ok()} <strong>No closed form → gradient descent</strong> — Unlike ridge regression, cross-entropy has no closed-form minimizer.`)
      ) +
      _section("Incorrect", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} <strong>Statement D is false</strong> — For a sample in class 0, both [0 1 0 0 0] and [0 0 0 0 1] assign probability 0 to the true class. ${_code("−ln(0) = ∞")} in both cases — the loss is identical.`) +
        _row("var(--wrong)", `${_ko()} <strong>Cross-entropy is differentiable</strong> — Log and softmax are smooth everywhere. Gradient descent works perfectly.`)
      )
  },

  // Q18 — MCQ
  {
    type: "mcq",
    question: "You deal with a regression problem where linear regression clearly fails. You consider using the kernel trick. A friend makes several claims (D = number of features, N = number of data samples). Which statements are correct?",
    options: [
      "Regardless of which kernel you choose, you should search for the best value of the regularization parameter λ using cross-validation",
      "You should use a polynomial kernel instead of an RBF kernel because RBF corresponds to an infinite-dimensional space and thus takes orders of magnitude longer to evaluate",
      "Instead of kernel ridge regression, you should use kernel SVM, a more sophisticated method which is likely to give higher precision for your regression problem",
      "You should not use the RBF kernel since you would then have to solve kernel ridge regression using an iterative method; there is no closed form solution",
      "Using the kernel trick is a good idea because your data is very high-dimensional (D ≫ N), and thus kernel ridge regression will be computationally efficient"
    ],
    answers: [0, 4],
    explanation:
      _section("Correct", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>Always cross-validate λ</strong> — λ controls the bias-variance tradeoff regardless of kernel choice.`) +
        _row("var(--correct)", `${_ok()} <strong>Efficient when D ≫ N</strong> — The kernel trick replaces a D×D system with an N×N system. When D ≫ N, this is far cheaper.`)
      ) +
      _section("Incorrect", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} <strong>RBF is not slow to evaluate</strong> — We compute ${_code("k(x, x') = exp(−‖x − x'‖² / 2σ²)")} directly. The infinite-dimensional mapping is implicit — never materialized.`) +
        _row("var(--wrong)", `${_ko()} <strong>Kernel ridge regression has a closed form</strong> — ${_code("α = (K + λI)⁻¹y")}. No iteration needed.`) +
        _row("var(--wrong)", `${_ko()} <strong>Kernel SVM is not inherently better</strong> — For regression, kernel ridge regression is appropriate. There's no reason to expect SVM to be more precise.`)
      )
  },

  // Q19 — MCQ
  {
    type: "mcq",
    question: "In a kernel ridge regression method, what can we say about the kernel matrix K?",
    options: [
      "K has size D×D, where D is the dimension of the data samples",
      "We only have to compute K once and then use it for inference on any input data sample",
      "We have to recompute K if the testing dataset changes",
      "We have to recompute K if the training dataset changes",
      "The elements of K express the similarity between the data samples",
      "K has size N×N, where N is the number of training and testing samples",
      "Given the training dataset X, we can precompute the kernel matrix K and use it both for kernel ridge regression and for kernel SVM without a change"
    ],
    answers: [1, 3, 4, 6],
    explanation:
      _section("What is K?", "var(--accent)",
        _row("var(--accent)", `${_code("K[i,j] = k(xᵢ, xⱼ)")} for training pairs. K is <strong>N_train × N_train</strong>, built entirely from training data.`)
      ) +
      _section("Correct", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>Compute once</strong> — K is fixed after training. Each test point requires computing a new vector ${_code("k(x_test, xᵢ)")}, not rebuilding K.`) +
        _row("var(--correct)", `${_ok()} <strong>Recompute if training data changes</strong> — Any change to a training point affects the corresponding row and column.`) +
        _row("var(--correct)", `${_ok()} <strong>Similarity matrix</strong> — K[i,j] measures how similar training sample i is to training sample j.`) +
        _row("var(--correct)", `${_ok()} <strong>Same K for KRR and kernel SVM</strong> — Both methods use the same training kernel matrix.`)
      ) +
      _section("Incorrect", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} <strong>Not D×D</strong> — K encodes sample-to-sample similarities, so its size is N_train × N_train, independent of D.`) +
        _row("var(--wrong)", `${_ko()} <strong>Test data doesn't rebuild K</strong> — The test set doesn't enter K; it only generates new kernel evaluations at inference.`)
      )
  },

  // Q20 — MCQ
  {
    type: "mcq",
    question: `<img src="topics/images/2019_q20.png" style="max-width:420px;display:block;margin:8px auto;border-radius:8px;">Consider the two multilayer perceptrons above, where all layers use linear activation functions (f(z) = z). Which of the following statements are true?`,
    options: [
      "B is expected to fit the training data better than A",
      "B intends to learn a more compact representation than A",
      "The backpropagation of B requires more operations",
      "B is more prone to overfitting than A since it has more layers",
      "A is expected to fit the training data better than B"
    ],
    answers: [1, 4],
    explanation:
      _section("Key insight — linear layers collapse", "var(--accent)",
        _row("var(--accent)", `With linear activations, stacking layers is equivalent to a single linear layer: ${_code("W₂W₁x = Wx")}. Extra layers add no expressiveness.`)
      ) +
      _section("Correct", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>B learns compact representation</strong> — The 10-unit bottleneck forces B to compress information into a low-rank encoding.`) +
        _row("var(--correct)", `${_ok()} <strong>A fits better</strong> — No bottleneck means A has higher effective rank and can express a wider range of linear functions.`)
      ) +
      _section("Incorrect", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} <strong>B doesn't fit better</strong> — B's bottleneck limits its capacity. A is the stronger fitter.`) +
        _row("var(--wrong)", `${_ko()} <strong>B doesn't overfit more</strong> — With linear activations, more layers ≠ more capacity. The bottleneck actually restricts B.`)
      )
  },

  // Q21 — MCQ
  {
    type: "mcq",
    question: "A 3D input x = [x₁, x₂, x₃] = [2, 2, 3] is fully connected to 1 neuron. After training, w = [w₁, w₂, w₃] = [−0.2, 0.5, 0] and b = 0.1. Three activation functions g₁, g₂, g₃ produce outputs (a₁, a₂, a₃) = (0.67, 0.70, 0.70). Which options for (g₁, g₂, g₃) are valid?",
    options: [
      "Leaky ReLU, linear, sigmoid",
      "sigmoid, tanh, Leaky ReLU",
      "sigmoid, ReLU, PReLU",
      "Leaky ReLU, sigmoid, sigmoid",
      "PReLU, Leaky ReLU, ReLU",
      "sigmoid, linear, ReLU"
    ],
    answers: [2, 5],
    explanation:
      _section("Compute z", "var(--accent)",
        _row("var(--accent)", `${_code("z = (−0.2)(2) + (0.5)(2) + (0)(3) + 0.1 = −0.4 + 1.0 + 0.1 = 0.7")}`)
      ) +
      _section("Function values at z = 0.7", "var(--text-muted)",
        _row("var(--text-muted)", `sigmoid(0.7) = 1/(1+e⁻⁰·⁷) ≈ <strong>0.668 ≈ 0.67</strong> → fits g₁`) +
        _row("var(--text-muted)", `ReLU(0.7) = max(0, 0.7) = <strong>0.70</strong> → fits g₂ or g₃`) +
        _row("var(--text-muted)", `PReLU(0.7) = 0.7 (positive region) = <strong>0.70</strong> → fits g₂ or g₃`) +
        _row("var(--text-muted)", `linear(0.7) = 0.7 = <strong>0.70</strong> → fits g₂ or g₃`) +
        _row("var(--text-muted)", `tanh(0.7) ≈ 0.604 ✗`) +
        _row("var(--text-muted)", `Leaky ReLU(0.7) = 0.70 — valid for g₂/g₃ but not g₁`)
      ) +
      _section("Valid combinations", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>sigmoid, ReLU, PReLU</strong> → 0.67 / 0.70 / 0.70 ✓`) +
        _row("var(--correct)", `${_ok()} <strong>sigmoid, linear, ReLU</strong> → 0.67 / 0.70 / 0.70 ✓`)
      )
  },

  // Q22 — MCQ
  {
    type: "mcq",
    question: "Select true statements about a convolutional neural network that classifies input 2D images into K classes.",
    options: [
      "The combination of convolutional layers and average pooling layers results in the network being rotation equivariant",
      "The pooling layers increase the receptive field, i.e., they allow the network to find features in larger neighborhoods, but the information about the precise feature location is lost",
      "The combination of convolutional layers and average pooling layers results in the network being translation equivariant",
      "Regardless of the size of the convolution kernel and the stride, we can always use padding such that the feature map produced by layer ℓ has the same spatial size as the input to layer ℓ",
      "Given a single-channel input image, a single-layer CNN with K kernels of size 1×1 is equivalent to a single-layer MLP with K output units which takes the flattened 1D array as input",
      "Decreasing the spatial size of a feature map can be achieved with either a pooling operation or a strided convolution, but pooling does not add more trainable parameters",
      "The pooling layers can only be used if the CNN tackles a classification problem"
    ],
    answers: [1, 2, 3, 5],
    explanation:
      _section("Correct", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>Pooling expands receptive field</strong> — Each pooling step lets later neurons "see" a larger region of the input, at the cost of losing precise location.`) +
        _row("var(--correct)", `${_ok()} <strong>Translation equivariant</strong> — If an object shifts in the image, feature maps shift accordingly. Convolution + average pooling preserves this.`) +
        _row("var(--correct)", `${_ok()} <strong>Padding preserves spatial size</strong> — We can always pad the input to produce a feature map of the same spatial dimensions.`) +
        _row("var(--correct)", `${_ok()} <strong>Pooling has no learnable parameters</strong> — It's a fixed operation (max or avg). Strided convolutions do add parameters.`)
      ) +
      _section("Incorrect", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} <strong>Not rotation equivariant</strong> — Standard CNNs handle translation, not rotation. Rotation equivariance requires special architectures (group convolutions).`) +
        _row("var(--wrong)", `${_ko()} <strong>1×1 CNN ≠ MLP on flattened image</strong> — A 1×1 CNN applies the same transformation at each pixel position independently. An MLP on the flattened image mixes all positions together — fundamentally different.`) +
        _row("var(--wrong)", `${_ko()} <strong>Pooling isn't classification-only</strong> — It's used in segmentation, detection, regression, and many other tasks.`)
      )
  },

  // Q23 — SCQ
  {
    type: "scq",
    question: `<img src="topics/images/2019_q23.png" style="max-width:480px;display:block;margin:8px auto;border-radius:8px;">You have four architectures shown above — (a) GAN, (b) RNN, (c) U-Net, (d) ResNet — and four tasks: (1) segment the hippocampus of MRI brain images, (2) classify household item images into 20 classes, (3) predict future motion of a car from a video stream, (4) generate new Van Gogh-style paintings. Which correspondence is most suitable?`,
    options: [
      "a-2, b-1, c-4, d-3",
      "a-3, b-1, c-4, d-2",
      "a-3, b-2, c-1, d-4",
      "a-3, b-4, c-2, d-1",
      "a-4, b-2, c-1, d-3",
      "a-4, b-3, c-1, d-2",
      "a-1, b-4, c-2, d-3",
      "a-4, b-3, c-2, d-1"
    ],
    answer: 5,
    explanation:
      _section("Architecture → Task mapping", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>GAN → Task 4</strong> (Van Gogh paintings) — GANs are generative models trained to produce new realistic samples. Image generation and style transfer are their primary use case.`) +
        _row("var(--correct)", `${_ok()} <strong>RNN → Task 3</strong> (car motion) — Car position is a time series. RNNs model sequential dependencies across video frames.`) +
        _row("var(--correct)", `${_ok()} <strong>U-Net → Task 1</strong> (hippocampus segmentation) — U-Net is an encoder-decoder CNN with skip connections, designed specifically for pixel-level segmentation in medical images.`) +
        _row("var(--correct)", `${_ok()} <strong>ResNet → Task 2</strong> (household items) — ResNet is a deep CNN with residual connections, excellent at image classification across many categories.`)
      )
  },

  // Q24 — MCQ
  {
    type: "mcq",
    question: "A billionaire dog enthusiast wants to segment dogs in images using CNNs. Which of the following explanations should you provide?",
    options: [
      "Data augmentation is not necessary for CNNs because they achieve high accuracy even with small amounts of data",
      "CNNs that contain pooling layers will be robust to small changes in the location of the dogs in the images",
      "She will be able to train the CNN on drawings of dogs and achieve high accuracy on photos of dogs",
      "The convolutional layers used in CNNs capture local spatial features in images",
      "With CNNs, there is no need for using regularization, making them easy to train",
      "CNNs can achieve high accuracy using a smaller number of trainable parameters compared to MLPs"
    ],
    answers: [1, 3, 5],
    explanation:
      _section("Correct", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>Pooling → translation robustness</strong> — Pooling provides local translation invariance: if a dog shifts slightly, feature maps barely change.`) +
        _row("var(--correct)", `${_ok()} <strong>Local spatial features</strong> — Convolutional filters detect edges, textures, and shapes in local patches, building hierarchical representations.`) +
        _row("var(--correct)", `${_ok()} <strong>Fewer parameters than MLPs</strong> — CNNs use weight sharing: the same filter is applied at every spatial position. An MLP on a 1080p image would need billions of weights.`)
      ) +
      _section("Incorrect", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} <strong>Data augmentation is still needed</strong> — CNNs are data-hungry. Without augmentation on small datasets, they overfit quickly.`) +
        _row("var(--wrong)", `${_ko()} <strong>Drawings ≠ photos (domain gap)</strong> — A CNN trained on cartoon drawings learns cartoon features. Accuracy on real photos will be poor.`) +
        _row("var(--wrong)", `${_ko()} <strong>Regularization is still needed</strong> — Dropout, batch norm, and weight decay are standard practice in CNN training.`)
      )
  },

  // Q25 — MCQ
  {
    type: "mcq",
    question: "You trained a CNN with ReLU activations to detect faces, but it performs poorly on both training and test data. What are reasonable steps to improve performance?",
    options: [
      "Instead of using (stochastic) gradient descent, use the closed form formula since it gives weights corresponding to the global minimum",
      "Replace the ReLU functions with sigmoid functions, which would help with the fact that ReLU cannot output negative values",
      "Replace convolutions with transposed convolutions which usually perform better",
      "Remove all the padding since the network is clearly confused by the spurious data added to the borders",
      "Remove all regularization",
      "Train the network for a longer time, provided that the training error keeps decreasing",
      "We have too few parameters, therefore adding more layers might help"
    ],
    answers: [4, 5, 6],
    explanation:
      _section("Diagnosis: underfitting", "var(--accent)",
        _row("var(--accent)", `${_tip()} Poor performance on <strong>both training and test data</strong> is the signature of underfitting. The model is too constrained. Fix: increase capacity or reduce constraints.`)
      ) +
      _section("Correct", "var(--correct)",
        _row("var(--correct)", `${_ok()} <strong>Remove regularization</strong> — If the model already underfits, regularization constrains it further. Removing it gives more freedom to learn.`) +
        _row("var(--correct)", `${_ok()} <strong>Train longer</strong> — If training loss is still decreasing, the model simply hasn't converged yet.`) +
        _row("var(--correct)", `${_ok()} <strong>Add more layers</strong> — More layers = more capacity = ability to learn more complex features.`)
      ) +
      _section("Incorrect", "var(--wrong)",
        _row("var(--wrong)", `${_ko()} <strong>No closed form for CNNs</strong> — CNNs are non-linear and non-convex. No closed-form minimizer exists.`) +
        _row("var(--wrong)", `${_ko()} <strong>ReLU not outputting negatives is fine</strong> — This is by design and doesn't cause underfitting.`) +
        _row("var(--wrong)", `${_ko()} <strong>Transposed convolutions are for upsampling</strong> — They belong in decoders, not in classification CNNs.`) +
        _row("var(--wrong)", `${_ko()} <strong>Padding is beneficial</strong> — It preserves spatial dimensions and retains border information.`)
      )
  }

);
