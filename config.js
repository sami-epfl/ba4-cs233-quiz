const QUIZ_CONFIG = {
  title: "CS-233: Quizzes",
  subtitle: "Introduction to Machine Learning",
  engineCdn: "https://cdn.jsdelivr.net/gh/sami-epfl/ba4-quiz-engine@main",
  engineLocal: "../ba4-quiz-engine",
  landingUrl: "https://sami-epfl.github.io/ba4-quizzes/",
  repoUrl: "https://github.com/sami-epfl/ba4-cs233-quiz",
};
// Use local engine when running via file:// or localhost
QUIZ_CONFIG._useLocal = location.protocol === "file:" || location.hostname === "localhost" || location.hostname === "127.0.0.1";
