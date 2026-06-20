// ============================================================
//  CS233 — 2019 Exam (corrected)
// ============================================================

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
    answer: [4],
    explanation:
      "<strong style='color:var(--correct)'>✓ K-means is unsupervised</strong> — It groups data using distances only. No labels, no annotations, no supervisor. This makes it useful for discovering hidden structure when you don't know what you're looking for.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ K is NOT unknown</strong> — K must be chosen by the user <em>before</em> running the algorithm. This is one of K-means' biggest practical weaknesses: choosing K badly gives meaningless clusters. Use the elbow method or silhouette score to help.<br>" +
      "<strong style='color:var(--wrong)'>✗ Converges ≠ globally optimal</strong> — The objective (within-cluster sum of squares) is non-increasing at each step, so the algorithm always terminates. But it only finds a <em>local</em> minimum — random initializations often give different results. This is why we run K-means multiple times with random restarts (e.g. K-means++).<br>" +
      "<strong style='color:var(--wrong)'>✗ Distance metric matters</strong> — Using L₁ vs L₂ vs cosine distance changes the notion of 'nearest centroid', which directly affects cluster boundaries. Always think carefully about your distance metric."
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
    answer: [3],
    explanation:
      "<strong style='color:var(--correct)'>✓ Scale each attribute</strong> — The features live in completely different units: weight can be ~70 kg while height is ~1.75 m. Without scaling, weight numerically dominates every distance computation and height becomes irrelevant. This is not about the choice of distance metric — it affects ALL metrics equally. Standardize (zero mean, unit variance) before computing any distances.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Raw data + L₁ or L₂</strong> — Switching metrics doesn't help if features are on wildly different scales. The unit problem exists regardless.<br>" +
      "<strong style='color:var(--wrong)'>✗ K = 100 for 2 classes</strong> — We want exactly 2 clusters (male/female), so K = 2. Yes, more clusters reduce the within-cluster sum of squares, but that's vacuously true: K = N gives zero. The goal is meaningful grouping, not minimizing a metric."
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
    answer: [3],
    explanation:
      "<strong style='color:var(--correct)'>✓ Support vectors ⊆ training points</strong> — Only the points sitting exactly on or within the margin matter. All other points could be removed and the model would be identical. This is why SVMs are said to be sparse in the data — only a few key examples define the solution. This property is also exploited by the kernel trick.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Quadratic program, not linear</strong> — The objective ½‖w‖² is quadratic; the constraints y_i(wᵀx_i + b) ≥ 1 are linear. A linear program has a linear objective — not the case here.<br>" +
      "<strong style='color:var(--wrong)'>✗ SVM maximizes the margin</strong> — This is the key insight of SVM. A wider margin generalizes better. Minimizing the distance to the nearest point is the opposite goal.<br>" +
      "<strong style='color:var(--wrong)'>✗ Dual provides a lower bound</strong> — For a convex minimization problem, the Lagrangian dual always gives a lower bound. With KKT conditions (which SVM satisfies), strong duality holds and the bounds coincide at the optimum."
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
    answer: [0, 3],
    explanation:
      "<strong>Why do slack variables matter?</strong> Hard-margin SVM fails when data is not linearly separable. Slack variables ξᵢ ≥ 0 allow violations, and C penalizes them. Understanding what each range of ξᵢ means is critical:<br><br>" +
      "— ξᵢ = 0 → correctly classified and outside (or on) the margin<br>" +
      "— <strong style='color:var(--correct)'>0 &lt; ξᵢ ≤ 1</strong> → inside the margin, but on the <em>correct side</em> of the decision boundary → <strong>correctly classified</strong> ✓<br>" +
      "— <strong style='color:var(--correct)'>0 &lt; ξᵢ ≤ 1</strong> → also means the point <strong>lies inside the margin</strong> ✓<br>" +
      "— ξᵢ &gt; 1 → <em>misclassified</em> (on the wrong side of the boundary)<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Larger C → fewer violations, not more</strong> — C is the penalty for each slack variable. Higher C = more expensive to violate constraints → the optimizer tries harder to classify correctly. C → ∞ recovers hard-margin SVM. C → 0 ignores all violations."
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
      "The RBF kernel measures <strong>geometric similarity</strong> and always outputs a value in <strong>(0, 1]</strong> — it's an exponential of a non-positive number.<br><br>" +
      "<strong style='color:var(--correct)'>✓ z₁ close to x</strong> → ‖z₁ − x‖² ≈ 0 → exp(−0) = <strong>1</strong> → k(z₁, x) ≈ 1<br>" +
      "<strong style='color:var(--correct)'>✓ z₂ far from x</strong> → ‖z₂ − x‖² → ∞ → exp(−∞) = <strong>0</strong> → k(z₂, x) ≈ 0<br><br>" +
      "<strong>Why does this matter?</strong> In kernel SVM or kernel ridge regression, the prediction for a new point x is a weighted sum of k(x, xᵢ) over training points. Only nearby training points (high k value) significantly influence the prediction — this is why the RBF kernel produces local decision boundaries. σ² controls the 'reach': large σ → smooth global influence, small σ → sharp local influence.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Options B and D</strong> — The argument of exp is always ≤ 0, so the output is always in (0, 1]. Values above 1 or negative are mathematically impossible."
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
    answer: [0, 2, 3],
    explanation:
      "<strong>Why is the kernel trick so powerful?</strong> It lets linear models solve non-linear problems without ever explicitly computing high- (or infinite-) dimensional feature vectors.<br><br>" +
      "<strong style='color:var(--correct)'>✓ Representer theorem</strong> — The optimal solution is w* = Σᵢ αᵢ xᵢ, a linear combination of training points. This means inner products φ(xᵢ)·φ(xⱼ) are all we ever need — not φ itself. Replace every dot product with k(xᵢ, xⱼ) and you're done.<br>" +
      "<strong style='color:var(--correct)'>✓ Infinite-dimensional spaces</strong> — The RBF kernel k(x, x') = exp(−‖x−x'‖²) corresponds to a Hilbert space of infinite dimension. We compute this implicitly in O(D) time — not O(∞).<br>" +
      "<strong style='color:var(--correct)'>✓ Non-linear boundaries</strong> — A linear model in φ-space is non-linear in x-space. One algorithm, arbitrarily complex boundaries.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ N×N, not D×D</strong> — The kernel trick replaces a D×D computation with an N×N one. It is only useful when D ≫ N. If N ≫ D, work in the original feature space instead.<br>" +
      "<strong style='color:var(--wrong)'>✗ K is symmetric but not always invertible</strong> — K is positive semi-definite (PSD) by Mercer's theorem. PSD does not imply invertibility (some eigenvalues may be zero)."
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
    answer: [2, 3, 4, 5],
    explanation:
      "<strong>Overfitting = memorizing instead of learning.</strong> The model performs well on training data but fails to generalize. Recognizing and combating it is one of the most critical skills in ML.<br><br>" +
      "<strong style='color:var(--correct)'>✓ Val loss &gt; Train loss</strong> — This is the definition of overfitting. The model has 'memorized' the training data, including its noise, so it fails on unseen examples.<br>" +
      "<strong style='color:var(--correct)'>✓ More data reduces overfitting</strong> — With more diverse examples, the model cannot memorize each one and must generalize. This is often the most effective fix when feasible.<br>" +
      "<strong style='color:var(--correct)'>✓ Gap grows over iterations</strong> — As training progresses past the optimal checkpoint, training loss keeps falling but validation loss begins to rise — the classic overfitting curve. Early stopping exploits this.<br>" +
      "<strong style='color:var(--correct)'>✓ Regularization reduces overfitting</strong> — L2 (ridge), L1 (lasso), dropout, and other penalties constrain the model's freedom to memorize.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Train loss &gt; val loss</strong> — This describes underfitting. When a model overfits, train loss is LOW.<br>" +
      "<strong style='color:var(--wrong)'>✗ More complexity = less overfit</strong> — Exactly backwards. More parameters = more capacity to memorize = more overfitting risk."
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
      "<strong>Not all mistakes are equal.</strong> The choice of metric must reflect the cost asymmetry of errors.<br><br>" +
      "<strong style='color:var(--correct)'>✓ Recall = TP / (TP + FN)</strong> — Measures: of all actually drowsy drivers, how many did we catch? A <strong>False Negative</strong> (we predict attentive, driver is drowsy) → <strong>car accident</strong>. A <strong>False Positive</strong> (unnecessary alert) → minor annoyance. The cost of FN vastly outweighs FP → maximize Recall.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Accuracy</strong> — Drowsiness is rare (maybe 5% of drives). A model that always predicts 'attentive' gets 95% accuracy while catching zero drowsy drivers — completely useless and dangerous.<br>" +
      "<strong style='color:var(--wrong)'>✗ Precision = TP / (TP + FP)</strong> — Measures how many alerts are genuine. High precision = few false alarms, but a model can have perfect precision by only alerting when absolutely certain — missing many drowsy drivers.<br>" +
      "<strong style='color:var(--wrong)'>✗ Loss value</strong> — An optimization objective used during training, not a meaningful business or safety metric for deployment decisions."
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
    answer: [3, 4],
    explanation:
      "<strong style='color:var(--correct)'>✓ 2018 class is more relevant (distribution shift)</strong> — The 2018 cohort entered a similar job market as 2019. The 2010 class graduated in a very different economic environment (post-financial crisis). Using data from a different distribution degrades your model. Always consider temporal and contextual distribution shift.<br>" +
      "<strong style='color:var(--correct)'>✓ Linear regression wins on small datasets</strong> — Deep networks have millions of parameters and require large amounts of data to avoid overfitting. On small datasets, a simple model with few parameters generalizes far better. More complex ≠ better when data is scarce.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Correlation ≠ strict rule</strong> — A positive correlation is a statistical tendency across the population. Individual exceptions always exist (high achievers with low salaries, dropouts who became billionaires). Correlation is never a hard bound.<br>" +
      "<strong style='color:var(--wrong)'>✗ Large bias ≠ useless features</strong> — The bias (intercept) simply shifts all predictions by a constant. It reflects the mean of y after centering, not the importance of features. Feature importance is captured by the weights w, not the bias.<br>" +
      "<strong style='color:var(--wrong)'>✗ Neural networks are NOT more interpretable</strong> — Quite the opposite. Linear regression weights directly tell you the effect of each feature. Neural networks are black boxes requiring separate interpretability tools (SHAP, attention maps, etc.)."
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
    answer: [1, 2],
    explanation:
      "<strong>Underfitting = the model is too simple to capture the true pattern.</strong> Both training and validation loss are high. The fix is always to <em>increase model capacity</em>.<br><br>" +
      "<strong style='color:var(--correct)'>✓ Polynomial feature expansion</strong> — Add x², x³, x₁x₂, … as new features. The model stays linear in its parameters (so you still get the closed-form solution) but can now fit non-linear relationships in the original input space.<br>" +
      "<strong style='color:var(--correct)'>✓ Adding more features</strong> — New informative predictors give the model more signal to learn from, directly increasing predictive power.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Removing features</strong> — Fewer features = less information = simpler model = more underfitting. The opposite of what's needed.<br>" +
      "<strong style='color:var(--wrong)'>✗ Ridge regularization</strong> — Ridge penalizes large weights, further restricting what the model can express. If the model already underfits, adding constraints makes it underfit even more. <em>Reduce</em> regularization when underfitting, <em>add</em> it when overfitting."
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
    answer: [0, 1],
    explanation:
      "<strong>Ridge closed-form:</strong> w* = (XᵀX + λI)⁻¹ Xᵀy<br><br>" +
      "As λ → ∞: the term λI dominates → (XᵀX + λI)⁻¹ → (1/λ)I → 0 → <strong style='color:var(--correct)'>w* → 0</strong> ✓<br>" +
      "With w ≈ 0: the model predicts ŷ ≈ 0 regardless of input → it completely ignores the data → <strong style='color:var(--correct)'>underfitting</strong> ✓<br><br>" +
      "<strong>The bias-variance tradeoff:</strong><br>" +
      "— Small λ → weights unconstrained → fits training data well → risk of overfitting (high variance)<br>" +
      "— Large λ → weights pushed to zero → ignores data → underfitting (high bias)<br>" +
      "— Optimal λ balances the two, found via <strong>cross-validation</strong>.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Does not overfit</strong> — λ → ∞ drives the model toward maximum simplicity (constant prediction). Overfitting is the opposite extreme (λ → 0)."
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
    answer: [0, 1, 2, 3],
    explanation:
      "<strong style='color:var(--correct)'>✓ Uncorrelated features after PCA</strong> — PCA diagonalizes the covariance matrix. In the new basis of eigenvectors, the covariance between any two different components is exactly zero. This decorrelation is what makes PCA useful as a preprocessing step for methods that assume independent features.<br>" +
      "<strong style='color:var(--correct)'>✓ Noise reduction</strong> — Low-eigenvalue components capture little variance — often just noise. Dropping them acts as a denoising filter while retaining the high-variance signal components. This is widely used in image processing and signal analysis.<br>" +
      "<strong style='color:var(--correct)'>✓ Lossless reconstruction possible</strong> — Keeping all N components makes the transformation orthogonal and invertible: X = ZVᵀ recovers X exactly. You only lose information when you drop components.<br>" +
      "<strong style='color:var(--correct)'>✓ Unsupervised</strong> — PCA uses only X (no labels). It can be used before training a supervised model to reduce dimensionality, remove collinearity, or visualize data.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Ordered by eigenvalue magnitude, not eigenvector magnitude</strong> — Every eigenvector is normalized to unit length. The ordering is by the corresponding <em>eigenvalue</em>, which represents the variance explained by that component. Largest eigenvalue = first principal component."
  },

  // Q13 — SCQ
  {
    type: "scq",
    question: `<img src="topics/images/2019_q13.png" style="max-width:100%;width:420px;display:block;margin:8px auto;border-radius:8px;box-sizing:border-box;">Given a 2D dataset with two classes as shown above, and performing dimensionality reduction with PCA and LDA: what is the approximate direction of the first projection vector for each?`,
    options: [
      "y = x for PCA and y = x for LDA",
      "y = -x for PCA and y = x for LDA",
      "y = -x for PCA and y = -x for LDA",
      "y = x for PCA and y = -x for LDA"
    ],
    answer: 3,
    explanation:
      "<strong>This question tests the fundamental difference between PCA and LDA.</strong><br><br>" +
      "<strong style='color:var(--correct)'>✓ PCA → y = x (diagonal direction)</strong> — PCA is unsupervised. It ignores class labels and finds the direction of <em>maximum variance</em> in the data. Looking at the scatter plot, data points spread diagonally from bottom-left to top-right along y = x. PCA projects onto that direction.<br><br>" +
      "<strong style='color:var(--correct)'>✓ LDA → y = −x (anti-diagonal)</strong> — LDA is supervised. It finds the direction that <em>maximizes class separability</em> (between-class variance) while minimizing within-class scatter. The two classes overlap along y = x but are clearly separated perpendicular to it, along y = −x. LDA finds that separating direction.<br><br>" +
      "<strong>Key insight:</strong> PCA and LDA can produce orthogonal projections from the same data. PCA answers 'where is most variance?' — LDA answers 'where are classes most separated?' These objectives can point in completely different directions."
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
      "<strong>Why does this matter?</strong> When you have N samples with D features and D ≫ N (common in genomics, NLP, image datasets), the covariance matrix S is D×D — huge and expensive to diagonalize. The trick: diagonalize M = (1/N)X̄X̄ᵀ which is only N×N, then recover the eigenvectors of S for free.<br><br>" +
      "<strong>Derivation:</strong><br>" +
      "Given: (1/N) X̄X̄ᵀ cᵢ = λᵢ cᵢ<br>" +
      "Left-multiply by X̄ᵀ: (1/N) X̄ᵀX̄ (X̄ᵀcᵢ) = λᵢ (X̄ᵀcᵢ)<br>" +
      "This is S · bᵢ = λᵢ bᵢ with <strong style='color:var(--correct)'>bᵢ = X̄ᵀcᵢ</strong> ✓<br><br>" +
      "The same eigenvalue λᵢ appears in both equations — only the eigenvectors differ (cᵢ lives in ℝᴺ, bᵢ lives in ℝᴰ). This is the computational foundation of <strong>efficient high-dimensional PCA</strong>."
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
    answer: [0],
    explanation:
      "<strong style='color:var(--correct)'>✓ Larger k → smoother decision boundary</strong> — With k = 1, each point is decided by its single nearest neighbor: the boundary is extremely jagged and memorizes individual noise points (high variance). As k grows, predictions are averaged over more neighbors, smoothing out noise and producing more regular boundaries. k → N gives a constant prediction.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ k-NN is non-parametric</strong> — A parametric model has a fixed-size parameter vector (like w in linear regression). k-NN has no such vector: it stores the entire training set and performs all computation at test time. Memory grows with N, and inference time is O(ND) per query.<br>" +
      "<strong style='color:var(--wrong)'>✗ Works for regression too</strong> — k-NN regression predicts the average (or weighted average) of the k nearest neighbors' values. It's a perfectly valid non-linear regression method.<br>" +
      "<strong style='color:var(--wrong)'>✗ Training time is the same (essentially zero)</strong> — k-NN 'trains' by storing data — no optimization loop. The value of k has no effect on training time. It <em>does</em> affect inference time for certain implementations."
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
    answer: [1, 3],
    explanation:
      "<strong style='color:var(--correct)'>✓ Robust to outliers</strong> — Cross-entropy loss is −log(ŷ) for a correct prediction. As the model becomes very confident (ŷ → 1), the gradient saturates and the outlier has little influence. By contrast, linear regression with squared loss penalizes far-away points quadratically — one extreme outlier can completely shift the decision boundary.<br>" +
      "<strong style='color:var(--correct)'>✓ Output = probability</strong> — Sigmoid outputs P(y=1|x) ∈ (0,1). Softmax outputs a probability distribution over C classes summing to 1. This probabilistic interpretation is what makes logistic regression useful for risk estimation, not just binary decisions.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ It's a classification method</strong> — Despite the name 'regression', logistic regression outputs class probabilities and is used for classification. The name is historical.<br>" +
      "<strong style='color:var(--wrong)'>✗ Regularization is standard</strong> — L1 gives sparse weights (feature selection), L2 shrinks them. Both are routinely used and available in all ML libraries.<br>" +
      "<strong style='color:var(--wrong)'>✗ Uses sigmoid, not a step function</strong> — A step function (heaviside) is non-differentiable at 0 and piecewise constant elsewhere. Gradient descent cannot work on it. The sigmoid is smooth everywhere and has a clean gradient."
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
    answer: [0, 1, 2, 4],
    explanation:
      "<strong style='color:var(--correct)'>✓ Loss = 0 when perfect</strong> — For a one-hot label y, only the term for the true class k* matters: −ln(ŷ^(k*)). If the model predicts probability 1.0 for the true class, −ln(1) = 0. This is the theoretical floor — in practice, we never quite reach it.<br>" +
      "<strong style='color:var(--correct)'>✓ Probabilities sum to 1</strong> — Softmax: ŷ⁽ᵏ⁾ = exp(Wₖ xᵢ) / ∑ⱼ exp(Wⱼ xᵢ). The denominator normalizes the output into a valid probability distribution.<br>" +
      "<strong style='color:var(--correct)'>✓ Pipeline: linear → softmax</strong> — The model computes Wxᵢ (raw scores called 'logits'), then passes them through softmax to get probabilities. Simple, clean, and differentiable end-to-end.<br>" +
      "<strong style='color:var(--correct)'>✓ No closed form → gradient descent</strong> — Unlike ridge regression (XᵀX invertible → closed form), cross-entropy's log-softmax composition makes the normal equations impossible to solve analytically. GD is mandatory.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Statement D is false</strong> — For a sample in class 0 (y = [1 0 0 0 0]), ŷ⁰ is the probability assigned to class 0. Both predictions [0 0 0 0 1] and [0 1 0 0 0] assign ŷ⁰ = 0 → loss = −ln(0) = ∞ in both cases. The loss is identical: infinite.<br>" +
      "<strong style='color:var(--wrong)'>✗ Cross-entropy is differentiable</strong> — log and softmax are smooth everywhere. The gradient ∂L/∂W = ŷ − y has an especially clean form, which is why this loss is the standard choice."
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
    answer: [0, 4],
    explanation:
      "<strong style='color:var(--correct)'>✓ Always cross-validate λ</strong> — λ controls the bias-variance tradeoff for any kernel. Too small → overfit; too large → underfit. There is no universal optimal value — it must be tuned on each dataset. Cross-validation is the standard method.<br>" +
      "<strong style='color:var(--correct)'>✓ Efficient when D ≫ N</strong> — Standard ridge regression solves a D×D system: O(D³). Kernel ridge regression solves an N×N system: O(N³). When D ≫ N (e.g. genomics, text data), the kernel approach is drastically cheaper. The kernelized closed form is α = (K + λI)⁻¹y.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ RBF is NOT slow to evaluate</strong> — We compute k(x, x') = exp(−‖x − x'‖²/2σ²) directly in O(D) time. The infinite-dimensional feature map φ(x) is implicit — it is <em>never computed</em>. The infinite dimension is a mathematical abstraction, not a runtime cost.<br>" +
      "<strong style='color:var(--wrong)'>✗ Kernel ridge regression HAS a closed form</strong> — α* = (K + λI)⁻¹y, then predict as ŷ = K_test α*. No iteration needed. This is a key advantage over kernel SVM.<br>" +
      "<strong style='color:var(--wrong)'>✗ Kernel SVM is not better for regression</strong> — Kernel SVM (SVR) is a valid approach but is not inherently superior. Kernel ridge regression is simpler, has a closed form, and is perfectly appropriate."
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
    answer: [1, 3, 4, 6],
    explanation:
      "<strong>The kernel matrix K[i,j] = k(xᵢ, xⱼ)</strong> for all pairs of <em>training</em> samples. Its size is N_train × N_train — independent of the feature dimension D.<br><br>" +
      "<strong style='color:var(--correct)'>✓ Compute once, reuse forever</strong> — Once you've trained (computed α = (K+λI)⁻¹y), predicting a new test point x requires only computing the vector k(x, xᵢ) for all training points i. The N×N matrix K itself never needs to be rebuilt.<br>" +
      "<strong style='color:var(--correct)'>✓ Recompute if training data changes</strong> — Any change to a training point xᵢ affects its entire row and column in K. The solution α also changes. The model must be retrained from scratch.<br>" +
      "<strong style='color:var(--correct)'>✓ K expresses pairwise similarity</strong> — K[i,j] = k(xᵢ, xⱼ) is a similarity score (e.g. Gaussian RBF ∈ (0,1]). This is the core idea: all information about the data enters the model through these similarities, not raw features.<br>" +
      "<strong style='color:var(--correct)'>✓ Same K for KRR and kernel SVM</strong> — Both methods use k(xᵢ, xⱼ) over the same training set. Switching algorithms doesn't change K.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Not D×D</strong> — K captures sample-to-sample similarity, so its size depends on N (number of training samples), not D (feature dimension). This is exactly why the kernel trick helps when D is large.<br>" +
      "<strong style='color:var(--wrong)'>✗ Testing data doesn't affect K</strong> — Test points are never part of K. At inference, we compute a new similarity vector for each test point."
  },

  // Q20 — MCQ
  {
    type: "mcq",
    question: `<img src="topics/images/2019_q20.png" style="max-width:100%;width:420px;display:block;margin:8px auto;border-radius:8px;box-sizing:border-box;">Consider the two multilayer perceptrons above, where all layers use linear activation functions (f(z) = z). Which of the following statements are true?`,
    options: [
      "B is expected to fit the training data better than A",
      "B intends to learn a more compact representation than A",
      "The backpropagation of B requires more operations",
      "B is more prone to overfitting than A since it has more layers",
      "A is expected to fit the training data better than B"
    ],
    answer: [1, 4],
    explanation:
      "<strong>Key insight: stacking linear layers gives nothing extra.</strong><br>" +
      "If every layer is linear: f(z) = z, then W₂(W₁x) = (W₂W₁)x = Wx. Any composition of linear maps is still a linear map. The extra layers add depth but zero additional expressiveness.<br><br>" +
      "<strong style='color:var(--correct)'>✓ B learns a compact (bottleneck) representation</strong> — Network B has a 10-unit hidden layer sandwiched between 100-unit layers. This bottleneck forces the network to compress 100-dimensional information into 10 dimensions — analogous to what PCA does. This is the principle behind autoencoders.<br>" +
      "<strong style='color:var(--correct)'>✓ A fits training data better</strong> — Network A (100→100) has no bottleneck and higher effective rank. It can represent a wider range of 100×100 linear transformations. B's 10-unit bottleneck limits its expressiveness to rank ≤ 10 transformations.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ B doesn't fit better</strong> — The bottleneck is a constraint, not an advantage for fitting.<br>" +
      "<strong style='color:var(--wrong)'>✗ B doesn't overfit more</strong> — More layers ≠ more capacity when activations are linear. B is actually less expressive than A. Overfitting risk comes from capacity relative to data size, and B has lower capacity due to the bottleneck."
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
    answer: [2, 5],
    explanation:
      "<strong>Step 1 — Compute z:</strong><br>" +
      "z = w₁x₁ + w₂x₂ + w₃x₃ + b = (−0.2)(2) + (0.5)(2) + (0)(3) + 0.1 = −0.4 + 1.0 + 0 + 0.1 = <strong>0.7</strong><br><br>" +
      "<strong>Step 2 — Evaluate each activation at z = 0.7:</strong><br>" +
      "— sigmoid(0.7) = 1/(1+e⁻⁰·⁷) ≈ <strong>0.668 ≈ 0.67</strong> → matches a₁ ✓<br>" +
      "— tanh(0.7) ≈ 0.604 → does NOT match any slot ✗<br>" +
      "— ReLU(0.7) = max(0, 0.7) = <strong>0.70</strong> → matches a₂ or a₃ ✓<br>" +
      "— PReLU(0.7) = 0.7 (positive region, same as ReLU) = <strong>0.70</strong> ✓<br>" +
      "— linear(0.7) = 0.7 = <strong>0.70</strong> ✓<br>" +
      "— Leaky ReLU(0.7) = 0.7 (positive region) = <strong>0.70</strong> ✓<br><br>" +
      "<strong>Step 3 — Check which triplets work for (0.67, 0.70, 0.70):</strong><br>" +
      "g₁ must produce 0.67 → only <strong>sigmoid</strong> qualifies.<br>" +
      "g₂, g₃ must produce 0.70 → ReLU, PReLU, linear, Leaky ReLU all qualify.<br><br>" +
      "<strong style='color:var(--correct)'>✓ sigmoid, ReLU, PReLU</strong> → 0.67 / 0.70 / 0.70 ✓<br>" +
      "<strong style='color:var(--correct)'>✓ sigmoid, linear, ReLU</strong> → 0.67 / 0.70 / 0.70 ✓"
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
    answer: [1, 2, 3, 5],
    explanation:
      "<strong style='color:var(--correct)'>✓ Pooling expands receptive field, loses location</strong> — Each pooling step lets a deeper neuron 'see' a larger region of the original image. But by aggregating, we lose the exact position of features. Max pooling tells you a feature exists somewhere in a region, not exactly where.<br>" +
      "<strong style='color:var(--correct)'>✓ Translation equivariant</strong> — If an object shifts by (Δx, Δy) in the input, the feature maps shift by (Δx, Δy) too. Convolution preserves this property exactly. Pooling provides approximate translation invariance (small shifts produce similar outputs).<br>" +
      "<strong style='color:var(--correct)'>✓ Padding preserves spatial size</strong> — Add ⌊k/2⌋ zeros on each side for kernel size k and stride 1 → output matches input size. This is standard 'same' padding in deep learning frameworks.<br>" +
      "<strong style='color:var(--correct)'>✓ Pooling has no learnable parameters</strong> — Max/average pooling is a fixed operation. Strided convolutions replace pooling while adding learnable weights to the downsampling step. This trade-off is debated in the literature.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ NOT rotation equivariant</strong> — Standard CNNs only handle translation. A rotated cat looks nothing like its feature map of an upright cat. Rotation-equivariant networks (e.g. group CNNs) require special architectural choices.<br>" +
      "<strong style='color:var(--wrong)'>✗ 1×1 CNN ≠ MLP on flattened image</strong> — A 1×1 CNN applies an independent linear transformation at each spatial position (same weights everywhere). An MLP on flattened data connects every pixel to every output — all positions interact. Fundamentally different operations.<br>" +
      "<strong style='color:var(--wrong)'>✗ Pooling is not classification-only</strong> — Segmentation networks (U-Net), detection networks, and generative models all use pooling. It is a general spatial downsampling tool."
  },

  // Q23 — SCQ
  {
    type: "scq",
    question: `<img src="topics/images/2019_q23.png" style="max-width:100%;width:480px;display:block;margin:8px auto;border-radius:8px;box-sizing:border-box;">You have four architectures shown above — (a) GAN, (b) RNN, (c) U-Net, (d) ResNet — and four tasks: (1) segment the hippocampus of MRI brain images, (2) classify household item images into 20 classes, (3) predict future motion of a car from a video stream, (4) generate new Van Gogh-style paintings. Which correspondence is most suitable?`,
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
      "<strong>Match each architecture to its core capability:</strong><br><br>" +
      "<strong style='color:var(--correct)'>✓ GAN → Task 4 (Van Gogh generation)</strong> — A GAN consists of a generator (creates fake images) and a discriminator (judges real vs fake). The generator learns to produce novel, realistic images. Image synthesis, style transfer, and data augmentation are its primary applications.<br><br>" +
      "<strong style='color:var(--correct)'>✓ RNN → Task 3 (car motion prediction)</strong> — Car position is a time series across video frames. RNNs maintain a hidden state that evolves with each time step, capturing temporal dependencies. Predicting future positions from past positions is a canonical sequential prediction problem.<br><br>" +
      "<strong style='color:var(--correct)'>✓ U-Net → Task 1 (hippocampus segmentation)</strong> — U-Net is an encoder-decoder with skip connections between symmetric layers. The encoder extracts features; the decoder reconstructs a dense pixel-wise segmentation map. It was designed for biomedical image segmentation and remains the dominant architecture for that task.<br><br>" +
      "<strong style='color:var(--correct)'>✓ ResNet → Task 2 (household item classification)</strong> — ResNet introduced skip (residual) connections to enable training of very deep networks (100+ layers). These connections allow gradients to flow directly to early layers, solving the vanishing gradient problem. ResNet excels at image classification tasks with many categories."
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
    answer: [1, 3, 5],
    explanation:
      "<strong style='color:var(--correct)'>✓ Pooling → location robustness</strong> — Pooling provides local translation invariance: if a dog shifts a few pixels, the pooled features barely change. This is critical for real-world images where exact object position varies.<br>" +
      "<strong style='color:var(--correct)'>✓ Convolutional layers detect local spatial features</strong> — Each filter learns to detect a specific pattern (edge, corner, texture, color gradient) in a local patch. Deeper layers combine these into complex detectors (eyes, snouts, fur texture). The hierarchical feature extraction is what makes CNNs so powerful for images.<br>" +
      "<strong style='color:var(--correct)'>✓ Fewer parameters than MLPs</strong> — Weight sharing: the same filter is applied at every spatial position. A 3×3 filter on a 1000×1000 image uses only 9 parameters regardless of image size. An MLP would need 1000² × output_size parameters just for the first layer — computationally infeasible for real images.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Data augmentation IS necessary</strong> — CNNs have millions of parameters and are extremely data-hungry. Without augmentation (flips, crops, rotations, color jitter) on limited datasets, they overfit rapidly. Augmentation is standard practice.<br>" +
      "<strong style='color:var(--wrong)'>✗ Drawings ≠ photos (domain gap)</strong> — A CNN trained on cartoon dogs learns cartoon-specific features (flat colors, sharp edges, outlines). These features don't transfer to real photos with complex textures and lighting. This is the domain shift problem.<br>" +
      "<strong style='color:var(--wrong)'>✗ Regularization is essential</strong> — Dropout, batch normalization, and weight decay are standard in every CNN. Without them, large networks overfit severely."
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
    answer: [4, 5, 6],
    explanation:
      "<strong>Poor performance on BOTH train and test = underfitting.</strong> The model doesn't have enough capacity or has been over-constrained. Do NOT add regularization — remove constraints and add capacity.<br><br>" +
      "<strong style='color:var(--correct)'>✓ Remove regularization</strong> — Regularization is intended to prevent overfitting. If the model already can't fit the training data, adding or keeping regularization makes it even harder to learn. Remove dropout, reduce weight decay.<br>" +
      "<strong style='color:var(--correct)'>✓ Train longer</strong> — If the training loss is still decreasing, the model simply hasn't converged yet. CNNs often need many epochs. Training longer (with early stopping monitoring validation loss) is the cheapest first fix to try.<br>" +
      "<strong style='color:var(--correct)'>✓ Add more layers</strong> — More layers = deeper feature hierarchy = more capacity. Face detection is a complex task; a shallow network may genuinely lack the expressiveness to solve it.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ No closed form for CNNs</strong> — CNNs are non-linear (ReLU), non-convex. There is no analytical formula for the global minimum. Even if there were, the optimization landscape has many saddle points and local minima. SGD is the correct approach.<br>" +
      "<strong style='color:var(--wrong)'>✗ ReLU not outputting negatives is a feature</strong> — ReLU(z) = max(0, z) introduces sparsity and avoids the vanishing gradient problem. The fact that it doesn't output negatives is by design and unrelated to underfitting.<br>" +
      "<strong style='color:var(--wrong)'>✗ Transposed convolutions are for upsampling</strong> — They are used in decoder networks (U-Net, segmentation) to increase spatial resolution. Replacing standard convolutions with them in a classification CNN makes no architectural sense.<br>" +
      "<strong style='color:var(--wrong)'>✗ Removing padding hurts</strong> — Padding preserves spatial dimensions across layers, allowing deeper networks. Removing it causes feature maps to shrink at every layer, losing border information and limiting network depth."
  }

);
