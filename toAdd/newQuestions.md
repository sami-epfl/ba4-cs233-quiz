Labels : 
- MCQ = multiple choice question
- SCQ = single choice question






(MCQ) Which of the following statements regarding the
K-means algorithm are true? (MULTIPLE CHOICE)
- The number of clusters is unknown during the process of the
K-means algorithm
- The K-means algorithm may NOT converge
- The K-means algorithm always converges to the best (desired) solution
- With K-means, different distance metrics will NOT change the final assignment of each cluster
- The K-means algorithm is unsupervised (CORRECT ANSWER)





(MCQ) The kernel trick :
- exploits the fact that, in many learning algorithms, the weights can be written as a linear combination
of the training samples (CORRECT ANSWER)
- changes ridge regression so that we can solve a D*D linear system instead of an N*N system, given
N training samples with D features 
- enables the use of infinite-dimensional feature spaces (CORRECT ANSWER)
- results in non-linear decision boundaries using algorithms designed originally for linear models (CORRECT ANSWER)
- generates a symmetric and invertible kernel matrix



(MCQ) We have seen in the course that a machine learning method can overfit to the training data. Which
of the following statements about overfitting are correct?
- The training set loss is higher than the validation set loss as the model overfits
- Choosing more complex machine learning methods will typically reduce overfitting
- The validation set loss is higher than the training set loss as the model overfits (CORRECT ANSWER)
- Training with more data will typically reduce overfitting (CORRECT ANSWER)
- In general, the gap between the validation set loss and the training set loss increases with the iterations (CORRECT ANSWER)
- Regularization of the model parameters will typically reduce overfitting (CORRECT ANSWER)




(SCQ) You are asked to develop a deep learning system with the binary cross entropy loss that predicts
whether a car driver is attentive or not, so as to prevent accidents. Specifically, the model should predict
1 if the driver is drowsy and 0 if the driver is attentive. Which evaluation metric is the most useful one to
assess the performance of the model?
- Accuracy
- Loss value
- Precision
- Recall (CORRECT ANSWER)




(MCQ) If we increase the regularization strength in ridge regression, which of the following statements are
true?

- The model underfits as the regularization parameter lambda tends to infinity (CORRECT ANSWER)
- The weights tend to zero as the regularization parameter lambda tends to infinity (CORRECT ANSWER)
- The model overfits as the regularization parameter lambda tends to infinity
- Nothing can be said




(MCQ) Which ones of the following statements about PCA are correct?
- After PCA, the data features become uncorrelated because the principal components are orthonormal (CORRECT ANSWER)
- PCA can be used to reduce noise in the data (CORRECT ANSWER)
- If we do not drop any principal components, it is always possible to reconstruct the original data
without any loss of information (CORRECT ANSWER) 
- PCA is an unsupervised method which can be used to do data feature manipulation (CORRECT ANSWER)
- In PCA, the principal components are ordered by the magnitude of the eigenvectors





(MCQ) Which of the following statements are true for a k-NN classifier?
- The decision boundary becomes smoother as we increase the value of k (CORRECT ANSWER)
- k-NN is a parametric method
- k-NN can be used only in classification but not for regression problems
- The decision boundary becomes smoother as we decrease the value of k
- The training time is longer for a 10-NN classifier than for a 1-NN classifier



(MCQ) We want to use linear regression to predict integer values. Select all the correct statements below.
- The predicted values will be floats if the loss function is l2 (CORRECT ANSWER)
- The predicted values will be integers if the loss function is l2
- Post-processing operations, such as ceil or floor, should be used (CORRECT ANSWER)
- A regularizer is needed to fix the range of the predicted values 



(MCQ) Which one(s) of the following statements about PCA is (are) True?
- The principal components are computed as the eigenvectors of the data matrix.
- PCA can be viewed as a type of linear auto-encoder. (CORRECT ANSWER)
- PCA tries to minimize the reconstruction error in order to reduce the dimensionality of the data. (CORRECT ANSWER)
- The largest principal component captures the direction of minimum variance in the data




(MCQ) Which of the following statements about the confusion matrix are true?
- It helps identify the types of errors made by a classification model. (CORRECT ANSWER)
- It is useful only for binary classification tasks.
- It can be used to calculate the recall and the Area Under the ROC Curve.
- It can be used to calculate the precision and the F1-score (CORRECT ANSWER)




(MCQ) In the context of Convolutional Neural Networks (CNNs), which of the following
statements are true about the term "stride"?
- It is the amount by which the kernel moves over the input data. (CORRECT ANSWER)
- A higher stride value corresponds to an output feature map with a lower spatial resolution. (CORRECT ANSWER)
- It is the number of channels of the kernel.
- It is the size of the kernel.





(MCQ) What are the main advantages of the self-attention mechanism over Recurrent Neural
Networks (RNNs)?
- It reduces the model’s complexity from quadratic to linear.
- It captures both long-range and short-range dependencies more effectively. (CORRECT ANSWER)
- It decreases the number of parameters of the model, making it use less memory.
- It allows the model to process the inputs in parallel, instead of sequentially (CORRECT ANSWER)





(SCQ) What is the role of the encoder part in an autoencoder?
- To extract a latent representation from the input data. (CORRECT ANSWER)
- To classify the input data into different categories.
- To reconstruct the input data from the latent representation.
- To add noise to the input data to improve the robustness.





(MCQ) Which of the following statements about the k-nearest neighbor (k-NN) algorithm
are true?
- The value of k in k-NN determines the number of features in the dataset.
- k-NN is a type of supervised learning algorithm. (CORRECT ANSWER)
- The result of k-NN is not affected by the choice of distance metric.
- k-NN can handle both linear and nonlinear input-output relationships. (CORRECT ANSWER)
- The value of k in k-NN can be optimized by gradient descent.
- k-NN is only used for classification tasks.