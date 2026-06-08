Question 3: What is true about word embeddings?
- Word embeddings are representations of words as dense vectors in a continuous vector space
- Word embeddings can only be trained on labeled data using supervised learning techniques
- Word embeddings capture semantic relationships between words, such as similarity and analogy
- Word embeddings are learned by the context in which words occur

- True
- False, as word embedding models can be trained on both labeled and unlabeled data using supervised or unsupervised learning techniques (besoin que de la phrase pas besoin de savoir si elle est triste ou pas)
- True
- True

Question 4:
Propose two methods by which representations of text could be learned without labels, while still encoding semantic knowledge.
Solution: There are several approaches devised for self-supervised learning of text representations:
• Masked language modeling: Predicting missing words within a sentence (such as in BERT) provided
by the surrounding words.
• Autoregressive language modeling: Predicting the next word in a sequence given the preceding context
(as in GPT models).
• Word2vec (skip-gram): Predicting surrounding words (context) based on a central word.