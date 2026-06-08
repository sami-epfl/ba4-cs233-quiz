const QUIZ_CONFIG = {
  title: "CS-233: Quizzes",
  subtitle: "Introduction to Machine Learning",
  engineCdn: "https://cdn.jsdelivr.net/gh/sami-epfl/ba4-quiz-engine@main",
  engineLocal: "../ba4-quiz-engine",
};
// Use local engine when running via file:// or localhost
QUIZ_CONFIG._useLocal = location.protocol === "file:" || location.hostname === "localhost" || location.hostname === "127.0.0.1";
