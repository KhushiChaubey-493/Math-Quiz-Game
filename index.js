const questionEl = document.getElementById("question");
const questionFormEl = document.getElementById("questionForm");
const scoreEl = document.getElementById("score");
const answerInputEl = document.getElementById("answerInput");

let score = Number(localStorage.getItem("score")) || 0;
let correctAnswers = Number(localStorage.getItem("correct")) || 0;
let wrongAnswers = Number(localStorage.getItem("wrong")) || 0;

let currentAnswer = null;
let questionCount = 0;

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const showToast = (text, background) => {
  Toastify({
    text,
    duration: 2500,
    gravity: "top",
    position: "center",
    close: true,
    style: {
      background,
    },
  }).showToast();
};

const generateQuestion = () => {
  const num1 = randomNumber(1, 20);
  const num2 = randomNumber(1, 20);

  const type = randomNumber(1, 4);

  switch (type) {
    case 1:
      return {
        question: `Q. What is ${num1} × ${num2}?`,
        answer: num1 * num2,
      };

    case 2:
      return {
        question: `Q. What is ${num1} + ${num2}?`,
        answer: num1 + num2,
      };

    case 3: {
      const a = Math.max(num1, num2);
      const b = Math.min(num1, num2);

      return {
        question: `Q. What is ${a} - ${b}?`,
        answer: a - b,
      };
    }

    case 4:
      return {
        question: `Q. What is ${num1 * num2} ÷ ${num1}?`,
        answer: num2,
      };
  }
};

const updateStats = () => {
  scoreEl.textContent = score;
};

const showQuestion = () => {
  const { question, answer } = generateQuestion();

  questionEl.textContent = question;
  currentAnswer = answer;

  updateStats();

  answerInputEl.focus();
};

const checkAnswer = (event) => {
  event.preventDefault();

  const userAnswer = Number(
    new FormData(questionFormEl).get("answer")
  );

  if (userAnswer === currentAnswer) {
    score++;
    correctAnswers++;

    showToast(
      `✅ Correct! Score: ${score}`,
      "linear-gradient(to right, #00b09b, #96c93d)"
    );
  } else {
    score = Math.max(0, score - 1);
    wrongAnswers++;

    showToast(
      `❌ Wrong! Correct Answer: ${currentAnswer}`,
      "linear-gradient(to right, #ff416c, #ff4b2b)"
    );
  }

  localStorage.setItem("score", score);
  localStorage.setItem("correct", correctAnswers);
  localStorage.setItem("wrong", wrongAnswers);

  questionCount++;

  questionFormEl.reset();
  showQuestion();
};

questionFormEl.addEventListener("submit", checkAnswer);

showQuestion();