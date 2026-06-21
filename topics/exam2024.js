// ============================================================
//  CS233 — 2024 Exam (corrected) — 28/06/2024
// ============================================================

registerTopic("Exam 2024",

  // Q1 — MCQ
  {
    type: "mcq",
    question: "In the context of linear regression with polynomial feature expansion, which techniques can be used to address overfitting?",
    options: [
      "Decreasing the size of the training dataset.",
      "Adding more independent variables.",
      "Adding a regularization term to the loss function.",
      "Using cross-validation to choose the polynomial degree."
    ],
    answer: [2, 3],
    explanation:
      "<strong>Overfitting with polynomial expansion</strong> — As the polynomial degree grows, the model gains more parameters and memorizes noise. The fix is either to constrain the weights or to select the degree carefully.<br><br>" +
      "<strong style='color:var(--correct)'>✓ Regularization (L1/L2)</strong> — Adding λ‖w‖² to the loss penalizes large weights, preventing the model from fitting noise. This is the most direct fix.<br>" +
      "<strong style='color:var(--correct)'>✓ Cross-validation for degree selection</strong> — Try degrees 1, 2, 3, … and pick the one with the lowest validation loss. This is how you avoid both underfitting (too low) and overfitting (too high).<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Decreasing training data</strong> — Fewer examples make overfitting <em>worse</em>, not better. The model has less signal to generalize from.<br>" +
      "<strong style='color:var(--wrong)'>✗ Adding more variables</strong> — More features = more parameters = more risk of overfitting. This goes in the wrong direction."
  },

  // Q2 — MCQ
  {
    type: "mcq",
    question: "Which of the following statements about the confusion matrix are true?",
    options: [
      "It helps identify the types of errors made by a classification model.",
      "It is useful only for binary classification tasks.",
      "It can be used to calculate the recall and the Area Under the ROC Curve.",
      "It can be used to calculate the precision and the F1-score."
    ],
    answer: [0, 3],
    explanation:
      "<strong style='color:var(--correct)'>✓ Identifies error types</strong> — The confusion matrix shows exactly where a model confuses one class for another — which classes are hard to distinguish, and in which direction errors go (e.g. false positives vs false negatives).<br>" +
      "<strong style='color:var(--correct)'>✓ Precision and F1-score</strong> — Precision = TP/(TP+FP) and F1 = 2·precision·recall/(precision+recall) can both be computed directly from the confusion matrix.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Not binary-only</strong> — Confusion matrices generalize naturally to any number of classes: a C×C matrix where entry (i,j) counts how many class-i samples were predicted as class j.<br>" +
      "<strong style='color:var(--wrong)'>✗ Recall yes, AUC no</strong> — Recall = TP/(TP+FN) comes from the confusion matrix, but the AUC-ROC requires sweeping over different decision thresholds — a single confusion matrix captures only one threshold."
  },

  // Q3 — MCQ
  {
    type: "mcq",
    question: "In the context of Convolutional Neural Networks (CNNs), which of the following statements are true about the term \"stride\"?",
    options: [
      "It is the amount by which the kernel moves over the input data.",
      "A higher stride value corresponds to an output feature map with a lower spatial resolution.",
      "It is the number of channels of the kernel.",
      "It is the size of the kernel."
    ],
    answer: [0, 1],
    explanation:
      "<strong style='color:var(--correct)'>✓ Stride = step size of the kernel</strong> — A stride of 1 moves the kernel one pixel at a time; a stride of 2 skips every other position. This is the core definition.<br>" +
      "<strong style='color:var(--correct)'>✓ Larger stride → smaller output</strong> — With stride s and input size W, the output width is approximately ⌊(W − k)/s⌋ + 1. Larger s → smaller output → lower spatial resolution. Strided convolutions are used as an alternative to pooling for downsampling.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Channels ≠ stride</strong> — The number of channels (depth) is an independent dimension of the kernel, unrelated to stride.<br>" +
      "<strong style='color:var(--wrong)'>✗ Kernel size ≠ stride</strong> — The kernel size (e.g. 3×3) determines the receptive field; stride determines how far the kernel moves between applications."
  },

  // Q4 — MCQ
  {
    type: "mcq",
    question: "What are the main advantages of the self-attention mechanism over Recurrent Neural Networks (RNNs)?",
    options: [
      "It reduces the model's complexity from quadratic to linear.",
      "It captures both long-range and short-range dependencies more effectively.",
      "It decreases the number of parameters of the model, making it use less memory.",
      "It allows the model to process the inputs in parallel, instead of sequentially."
    ],
    answer: [1, 3],
    explanation:
      "<strong style='color:var(--correct)'>✓ Better long-range dependencies</strong> — RNNs pass information through hidden states step by step. Long sequences cause the gradient to vanish before reaching early tokens. Self-attention connects any two positions directly in O(1) operations, regardless of distance.<br>" +
      "<strong style='color:var(--correct)'>✓ Parallel processing</strong> — RNNs are inherently sequential: step t depends on step t-1. Self-attention computes all positions simultaneously, making it much faster to train on modern GPUs. This is the main reason Transformers scaled so well.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Self-attention is quadratic, not linear</strong> — Computing attention scores between all pairs of N tokens is O(N²). This is a known bottleneck for very long sequences, actively researched (Longformer, Flash Attention, etc.).<br>" +
      "<strong style='color:var(--wrong)'>✗ Parameters don't decrease</strong> — Transformers typically have more parameters than equivalent RNNs, not fewer."
  },

  // Q5 — SCQ
  {
    type: "scq",
    question: "What is the role of the encoder part in an autoencoder?",
    options: [
      "To extract a latent representation from the input data.",
      "To classify the input data into different categories.",
      "To reconstruct the input data from the latent representation.",
      "To add noise to the input data to improve the robustness."
    ],
    answer: 0,
    explanation:
      "<strong style='color:var(--correct)'>✓ Encoder → latent representation (bottleneck)</strong> — The encoder compresses the input x into a lower-dimensional latent vector z = f(x). This forces the network to capture the most essential structure of the data, discarding noise and redundancy.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Classification is not the encoder's job</strong> — Autoencoders are unsupervised generative models, not classifiers. (Though the learned latent space can be used as features for downstream classification.)<br>" +
      "<strong style='color:var(--wrong)'>✗ Reconstruction is the decoder's job</strong> — The decoder takes z and reconstructs x̂ ≈ x. Encoder and decoder are two separate components with opposite roles.<br>" +
      "<strong style='color:var(--wrong)'>✗ Adding noise is a training trick</strong> — Denoising autoencoders deliberately corrupt the input during training to improve robustness, but this is not the definition of the encoder's role."
  },

  // Q6 — SCQ
  {
    type: "scq",
    question: "You are classifying a dataset with 2D input x = (x⁽⁰⁾, x⁽¹⁾) and binary output y. The following methods will all yield an equivalent classifier, except for one. Which one?",
    options: [
      "Linear regression using feature expansion x̃ = (1, x⁽⁰⁾, x⁽¹⁾, x⁽⁰⁾x⁽¹⁾) and with an additional bias.",
      "Linear regression using feature expansion x̃ = (1, x⁽⁰⁾, x⁽¹⁾, x⁽⁰⁾x⁽¹⁾) but without an additional bias.",
      "Linear regression using feature expansion x̃ = (1, x⁽⁰⁾, x⁽¹⁾, 2024·x⁽⁰⁾x⁽¹⁾) and with an additional bias.",
      "Kernel regression using the kernel k(xᵢ, xⱼ) = 1 + xᵢᵀxⱼ + (xᵢᵀxⱼ)²."
    ],
    answer: 3,
    explanation:
      "<strong>The key: what polynomial degree does each model express?</strong><br><br>" +
      "Options A, B, C all use the feature map x̃ = (1, x⁽⁰⁾, x⁽¹⁾, x⁽⁰⁾x⁽¹⁾) — degree 2 terms at most, and specifically only the cross-term x⁽⁰⁾x⁽¹⁾ (not x⁽⁰⁾² or x⁽¹⁾²). Scaling the cross-term by 2024 (option C) or including a bias (option A vs B) doesn't change the <em>class</em> of functions expressible — just reparametrizes the weights.<br><br>" +
      "<strong style='color:var(--correct)'>✓ Option D is different</strong> — The kernel k(xᵢ, xⱼ) = 1 + xᵢᵀxⱼ + (xᵢᵀxⱼ)² corresponds to the feature map φ(x) that includes <strong>all</strong> degree-0, degree-1, and degree-2 monomials: 1, x⁽⁰⁾, x⁽¹⁾, (x⁽⁰⁾)², (x⁽¹⁾)², x⁽⁰⁾x⁽¹⁾. This is a strictly richer feature space — it can express quadratic boundaries that options A/B/C cannot."
  },

  // Q7 — MCQ
  {
    type: "mcq",
    question: "You are classifying a binary dataset where no two data points coincide (xᵢ ≠ xⱼ, ∀i ≠ j). Choose the correct statements.",
    options: [
      "Theoretically, it is always possible to perfectly classify the training set using kernel regression without regularizer with some suitable kernel.",
      "Theoretically, it is always possible to perfectly classify the training set using k-NN with a small enough value k.",
      "Theoretically, it is always possible to perfectly classify the training set using a linear SVM model.",
      "Theoretically, it is always possible to perfectly classify the training set using kernel ridge regression with a linear kernel and some suitable regularization hyper-parameter λ."
    ],
    answer: [0, 1],
    explanation:
      "<strong style='color:var(--correct)'>✓ Kernel regression without regularizer</strong> — With no regularization, the solution interpolates the training data exactly. With a universal kernel (e.g. RBF) and λ → 0, the model assigns the exact label to each training point. The key condition is that no two points coincide (guaranteed here).<br>" +
      "<strong style='color:var(--correct)'>✓ k-NN with k = 1</strong> — With k = 1, every point is classified by its nearest neighbor — itself. Since no two points coincide, 1-NN achieves 100% training accuracy by definition.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Linear SVM cannot always do it</strong> — If the data is not linearly separable (e.g. XOR pattern), no linear boundary achieves zero training error, regardless of the margin parameter C.<br>" +
      "<strong style='color:var(--wrong)'>✗ Kernel ridge regression with regularization cannot always do it</strong> — The regularizer λ > 0 prevents exact interpolation. The solution is a smooth approximation, not a perfect fit. Only λ = 0 gives exact fit, but then it's no longer 'ridge' regression."
  },

  // Q8 — MCQ
  {
    type: "mcq",
    question: "Which of the following statements about the k-nearest neighbor (k-NN) algorithm are true?",
    options: [
      "The value of k in k-NN determines the number of features in the dataset.",
      "k-NN is a type of supervised learning algorithm.",
      "The result of k-NN is not affected by the choice of distance metric.",
      "k-NN can handle both linear and nonlinear input-output relationships.",
      "The value of k in k-NN can be optimized by gradient descent.",
      "k-NN is only used for classification tasks."
    ],
    answer: [1, 3],
    explanation:
      "<strong style='color:var(--correct)'>✓ Supervised learning</strong> — k-NN requires labeled training examples to work. At inference, it finds the k nearest labeled neighbors and aggregates their labels (majority vote for classification, average for regression). Labels are essential.<br>" +
      "<strong style='color:var(--correct)'>✓ Handles non-linear relationships</strong> — Because k-NN makes no assumption about the functional form of the relationship, it naturally adapts to any boundary shape. With small k, it can fit highly non-linear patterns.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ k is not the number of features</strong> — k is the number of neighbors to consider. The number of features is D, a completely separate quantity.<br>" +
      "<strong style='color:var(--wrong)'>✗ Distance metric matters</strong> — L₁, L₂, cosine distance, etc., produce different neighbor sets and different predictions. Feature scaling also affects which neighbors are found.<br>" +
      "<strong style='color:var(--wrong)'>✗ k cannot be optimized by gradient descent</strong> — k is a discrete integer, so gradient descent doesn't apply. It is tuned via cross-validation.<br>" +
      "<strong style='color:var(--wrong)'>✗ Works for regression too</strong> — k-NN regression predicts the mean (or weighted mean) of the k nearest neighbors' continuous values."
  },

  // Q9 — MCQ (image required)
  {
    type: "mcq",
    question: `<img src="topics/images/2024_q9.png" style="max-width:100%;width:380px;display:block;margin:8px auto;border-radius:8px;box-sizing:border-box;">Suppose we have a collection of 2D points x = (x⁽⁰⁾, x⁽¹⁾) distributed as shown above (dots inside, crosses outside — forming a ring). To classify them using a linear model, we perform polynomial feature expansion φ(x). Choose the feature expansions that ensure successful classification.`,
    options: [
      "φ(x) = [1, (x⁽⁰⁾)², (x¹)²]",
      "φ(x) = [x⁽⁰⁾, x⁽¹⁾, (x⁽⁰⁾)², (x⁽¹⁾)²]",
      "φ(x) = [x⁽⁰⁾, (x⁽⁰⁾)², (x⁽¹⁾)², (x⁽⁰⁾)³, (x⁽¹⁾)³]",
      "φ(x) = [1, x⁽⁰⁾, x⁽¹⁾, x⁽⁰⁾x⁽¹⁾]"
    ],
    answer: [0, 1, 2],
    explanation:
      "<strong>The geometry:</strong> The dots form a disk (x⁽⁰⁾² + x⁽¹⁾² &lt; r²) and the crosses form an outer ring. The decision boundary is a circle — a quadratic curve in the original space.<br><br>" +
      "<strong>Key insight:</strong> A linear classifier needs to find a hyperplane in φ-space that separates the classes. This requires φ(x) to contain the terms (x⁽⁰⁾)² and (x⁽¹⁾)², because the true boundary is defined by (x⁽⁰⁾)² + (x⁽¹⁾)² = r².<br><br>" +
      "<strong style='color:var(--correct)'>✓ [1, (x⁰)², (x¹)²]</strong> — Contains both squared terms. A linear model can find w₁(x⁰)² + w₂(x¹)² = c, which is a circle. ✓<br>" +
      "<strong style='color:var(--correct)'>✓ [x⁰, x¹, (x⁰)², (x¹)²]</strong> — Contains the squared terms plus linear terms. The linear model has even more freedom. ✓<br>" +
      "<strong style='color:var(--correct)'>✓ [x⁰, (x⁰)², (x¹)², (x⁰)³, (x¹)³]</strong> — Also contains both squared terms. Higher-order terms add extra expressiveness. ✓<br><br>" +
      "<strong style='color:var(--wrong)'>✗ [1, x⁰, x¹, x⁰x¹]</strong> — No (x⁰)² or (x¹)² terms. This expansion can only produce linear and hyperbolic boundaries in the original space — not circles. It cannot separate the ring from the disk."
  },

  // Q10 — MCQ (image required)
  {
    type: "mcq",
    question: `<img src="topics/images/2024_q10.png" style="max-width:100%;width:480px;display:block;margin:8px auto;border-radius:8px;box-sizing:border-box;">Given a dataset of 2D points shown above, which of the following (A–E) represent possible clustering outcomes after K-means convergence (K = 2)? The X marks indicate the two cluster centroids; dots and squares indicate cluster assignments.`,
    options: [
      "D",
      "A",
      "B",
      "C",
      "E"
    ],
    answer: [1, 2],
    explanation:
      "<strong>K-means convergence condition:</strong> At convergence, each point must be assigned to its <em>nearest</em> centroid (the X). Any valid solution must satisfy: for every point p, dist(p, centroid_1) &lt; dist(p, centroid_2) iff p is in cluster 1.<br><br>" +
      "<strong style='color:var(--correct)'>✓ A and B are valid</strong> — In both A and B, the centroids (X markers) are positioned at the true center of their respective clusters, and the assignment boundary is consistent with Voronoi regions (every point closer to its assigned centroid than to the other). These satisfy the K-means fixed-point condition.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ D, C, E are invalid</strong> — In these configurations, either: (1) the centroids are not at the mean of their assigned clusters, or (2) some points are assigned to a centroid that is farther than the other. Either condition means the algorithm has not converged — it would take another step."
  },

  // Q11 — MCQ
  {
    type: "mcq",
    question: "Consider K-Means clustering for image segmentation, partitioning an image into superpixels. Given color (Rᵢ, Gᵢ, Bᵢ) and image coordinates (uᵢ, vᵢ) of each pixel pᵢ, which of the following can be used as a distance metric for K-Means?",
    options: [
      "d(pᵢ, pⱼ) = [(uᵢ − vᵢ)² + (uⱼ − vⱼ)²]^(1/2)",
      "None of these.",
      "d(pᵢ, pⱼ) = [(Rᵢ − Rⱼ)² + (Gᵢ − Gⱼ)² + (Bᵢ − Bⱼ)²]^(1/2)",
      "d(pᵢ, pⱼ) = (Rᵢ² + Gᵢ² + Bᵢ²)^(1/2)",
      "d(pᵢ, pⱼ) = [(Rᵢ − Rⱼ)² + (Gᵢ − Gⱼ)² + (Bᵢ − Bⱼ)² + (uᵢ − uⱼ)² + (vᵢ − vⱼ)²]^(1/2)"
    ],
    answer: [2, 4],
    explanation:
      "<strong>A valid distance must measure dissimilarity between two pixels pᵢ and pⱼ — it must use paired quantities (Rᵢ − Rⱼ, not Rᵢ alone).</strong><br><br>" +
      "<strong style='color:var(--correct)'>✓ RGB distance only</strong> — Groups pixels with similar color. Useful for color-based segmentation. Ignores spatial proximity.<br>" +
      "<strong style='color:var(--correct)'>✓ RGB + spatial distance</strong> — Groups pixels that are both similar in color AND spatially close. This is the SLIC superpixel approach — produces compact, locally coherent superpixels. More useful in practice.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Option A: (uᵢ − vᵢ)²</strong> — This mixes the u and v coordinates of the <em>same</em> pixel (x vs y of pᵢ), not the spatial distance between pᵢ and pⱼ. It's geometrically meaningless.<br>" +
      "<strong style='color:var(--wrong)'>✗ Option D: norm of a single pixel</strong> — Rᵢ² + Gᵢ² + Bᵢ² is a property of pixel i alone, not a distance between two pixels. K-means needs a pairwise distance."
  },

  // Q12 — SCQ
  {
    type: "scq",
    question: "Which of the following statements about the Bag-of-Words approach is true?",
    options: [
      "A Bag-of-Words disregards the words' order, and disregards the words' multiplicity.",
      "A Bag-of-Words disregards the words' order, but keeps the words' multiplicity.",
      "A Bag-of-Words keeps the words' order, but disregards the words' multiplicity.",
      "A Bag-of-Words keeps the words' order, and keeps the words' multiplicity."
    ],
    answer: 1,
    explanation:
      "<strong style='color:var(--correct)'>✓ No order, keeps count</strong> — A Bag-of-Words represents a document as a word frequency vector: each dimension is a word in the vocabulary, each value is how many times that word appears. 'The cat sat on the mat' and 'The mat sat on the cat' produce identical BoW vectors — word order is completely discarded.<br><br>" +
      "<strong>Why does this matter?</strong> BoW is simple and works surprisingly well for text classification (e.g. spam detection, sentiment analysis). Its weakness is that it loses all grammatical and semantic structure — 'not good' and 'good' look similar after negations are removed.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ Option A</strong> — BoW does keep multiplicity (word counts). A word appearing 5 times has a count of 5, not 1.<br>" +
      "<strong style='color:var(--wrong)'>✗ Options C & D</strong> — BoW never preserves order. Models that preserve order include n-gram models, RNNs, and Transformers."
  },

  // Q13 — MCQ
  {
    type: "mcq",
    question: "You are solving a classification problem with high class imbalance in the training data, but balanced classes in the testing data. Which of the following may mitigate the class imbalance problem and improve classification test accuracy?",
    options: [
      "In the loss function, re-weigh the influence of samples for the k-th class with a coefficient (1−γ)/(1−γ^Nk), where Nk is the number of samples for the k-th class and γ ∈ [0, 1[.",
      "Use data augmentation on small classes to create new samples.",
      "In the loss function, re-weigh the influence of samples for the k-th class with a coefficient 1 − Nk/N, where Nk is the number of samples for the k-th class and N is the size of the dataset.",
      "Remove the redundant samples from large classes until you obtain a balanced dataset."
    ],
    answer: [0, 1, 2, 3],
    explanation:
      "<strong>Class imbalance problem:</strong> A model trained on unbalanced data learns to ignore rare classes because predicting the majority class most of the time already gives low training loss. All four strategies address this from different angles.<br><br>" +
      "<strong style='color:var(--correct)'>✓ Focal-style reweighting (effective number)</strong> — The coefficient (1−γ)/(1−γ^Nk) down-weights over-represented classes and up-weights rare classes. As Nk grows, the weight decreases. This is inspired by the 'Class-Balanced Loss' paper.<br>" +
      "<strong style='color:var(--correct)'>✓ Data augmentation on small classes</strong> — Artificially creating new samples for rare classes (via flips, crops, SMOTE, etc.) brings the class distribution closer to balanced.<br>" +
      "<strong style='color:var(--correct)'>✓ Inverse-frequency reweighting</strong> — 1 − Nk/N is small for large classes (they get low weight) and large for small classes (they get high weight). A simpler form of class rebalancing.<br>" +
      "<strong style='color:var(--correct)'>✓ Undersampling large classes</strong> — Removing majority class samples until balance is achieved. Simple and effective, though it discards information."
  },

  // Q14 — SCQ
  {
    type: "scq",
    question: "How does Principal Component Analysis (PCA) handle datasets with large differences in the scales of the features, and what is the standard preprocessing step to address this issue?",
    options: [
      "PCA automatically adjusts scales during the eigenvalue computation; no additional steps are required.",
      "Scaling the features is irrelevant to PCA because it focuses solely on reducing the number of features, not the scale of the data.",
      "PCA prioritizes features for which all samples have large numerical values, independently of the range of these values.",
      "PCA is sensitive to the scale of the features, and normalizing or standardizing the data before applying PCA is typically recommended to ensure each feature contributes equally."
    ],
    answer: 3,
    explanation:
      "<strong style='color:var(--correct)'>✓ PCA is scale-sensitive → standardize first</strong> — PCA finds directions of maximum variance. If one feature has values in the thousands (e.g. salary in €) and another in the tenths (e.g. GPA), the high-magnitude feature will dominate the first principal components — not because it's more informative, but simply because its scale is larger.<br><br>" +
      "<strong>Standard fix:</strong> Standardize each feature to zero mean and unit variance (z-score normalization) before PCA. This ensures every feature starts with equal variance (1.0) and PCA selects directions based on the true structure of the data.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ PCA does NOT auto-adjust scales</strong> — The covariance matrix is computed from raw values. No internal normalization happens.<br>" +
      "<strong style='color:var(--wrong)'>✗ PCA focuses on variance, not just feature count</strong> — Its goal is to find directions of maximum variance and project data onto them. Scale directly affects variance."
  },

  // Q15 — MCQ
  {
    type: "mcq",
    question: "Consider a dataset with highly correlated variables in a high-dimensional space. After PCA, the first component explains 70% of variance and the second explains 28%. What implications does this have for further data analysis? Select all that apply.",
    options: [
      "The remaining principal components can be discarded without substantial loss of information.",
      "The high percentage of variance explained by the first two components indicates a lack of diversity in the data, suggesting potential overfitting in predictive modeling.",
      "Reducing the dataset to these two principal components will eliminate all need for further outlier analysis.",
      "The dataset can be effectively described using just the first two principal components, reducing dimensionality from the high-dimensional space to 2 dimensions.",
      "Most of the information in the original dataset can be reconstructed from these two components."
    ],
    answer: [0, 3, 4],
    explanation:
      "70% + 28% = <strong>98% of total variance</strong> is captured by just two components. This is exceptional compression.<br><br>" +
      "<strong style='color:var(--correct)'>✓ Remaining components negligible</strong> — Only 2% of variance remains in all other components combined. Discarding them causes negligible information loss in practice.<br>" +
      "<strong style='color:var(--correct)'>✓ 2D description is effective</strong> — With 98% of variance, the 2D projection is a faithful low-dimensional representation. This is exactly the use case PCA was designed for: visualization and dimensionality reduction.<br>" +
      "<strong style='color:var(--correct)'>✓ High-quality reconstruction</strong> — Reconstructing x ≈ z₁v₁ + z₂v₂ (where z₁, z₂ are projections and v₁, v₂ are eigenvectors) recovers 98% of the original signal. Reconstruction error is tiny.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ High explained variance ≠ overfitting risk</strong> — Overfitting is a model training phenomenon, not a PCA property. Highly correlated features compressing well into 2D is actually a sign of clean, structured data.<br>" +
      "<strong style='color:var(--wrong)'>✗ PCA doesn't eliminate the need for outlier analysis</strong> — Outliers can still exist in the 2D PCA space. PCA can even amplify certain outliers if they lie along principal directions."
  },

  // Q16 — SCQ
  {
    type: "scq",
    question: "In an MLP, what is the impact of increasing the number of hidden layers?",
    options: [
      "It simplifies the model by reducing the number of neurons required in each layer to achieve similar performance.",
      "It decreases the risk of overfitting, as more layers provide a deeper and more abstract representation of the input data.",
      "It linearly increases the computational complexity and the model's ability to learn linear relationships.",
      "It allows the network to capture more complex relationships in the data."
    ],
    answer: 3,
    explanation:
      "<strong style='color:var(--correct)'>✓ More layers → more complex functions</strong> — Each additional hidden layer (with non-linear activations like ReLU) allows the network to compose more complex transformations. Shallow networks can theoretically approximate any function, but deep networks do so far more efficiently — exponentially fewer neurons needed for the same expressiveness. This is the depth efficiency argument.<br><br>" +
      "<strong style='color:var(--wrong)'>✗ More layers ≠ fewer neurons needed per layer</strong> — Depth and width are independent design choices. Adding layers doesn't automatically reduce the neurons needed in each layer.<br>" +
      "<strong style='color:var(--wrong)'>✗ More layers ≠ less overfitting</strong> — More layers = more parameters = higher capacity = greater risk of overfitting (without regularization). Dropout, batch norm, and weight decay are needed to counteract this.<br>" +
      "<strong style='color:var(--wrong)'>✗ Computation is not linear in depth</strong> — Backpropagation through more layers also adds more gradient computations. Memory scales with depth for storing activations. And more layers enable learning of non-linear (not linear) relationships — the opposite."
  }

);
