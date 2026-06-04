# CS-233 — Quiz

Interactive MCQ/True-False quiz for CS-233 Introduction to Machine Learning.

## Structure

```
config.js          ← local only, not committed (see config.example.js)
index.html         ← entry point
topics/
  knn.js           ← questions for KNN
  ...              ← one file per topic
```

The quiz engine (UI + logic) lives in a separate repo: [sami-epfl/quiz-engine](https://github.com/sami-epfl/quiz-engine).

## Setup

1. Copy `config.example.js` → `config.js` and fill in your values
2. Open `index.html` in a browser (works with `file://`)

## Adding a topic

1. Create `topics/my-topic.js`:

```js
registerTopic("My Topic",
  {
    type: "mcq",
    question: "Question text?",
    options: ["A", "B", "C", "D"],
    answer: 0,
    explanation: "Optional explanation."
  },
  {
    type: "tf",
    question: "True or false statement.",
    answer: true,
    explanation: "Optional explanation."
  }
);
```

2. Add `<script src="topics/my-topic.js"></script>` in `index.html`

## Question format

| Field | Type | Description |
|---|---|---|
| `type` | `"mcq"` \| `"tf"` | Multiple choice or True/False |
| `question` | string | Question text |
| `options` | string[] | MCQ only — list of choices |
| `answer` | number \| boolean | Index of correct option (MCQ) or `true`/`false` (TF) |
| `explanation` | string | Optional — shown after answering |
