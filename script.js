const startButton = document.getElementById("startBtn");
const questionContainer = document.getElementById("container3");

// var player = "playerName";
// var questionCount = "questionCount";
// var score = "highScore";
// var currentScore = "currentScore";
// var timer = "timer";
// var recordScore = "recordScore";

startBtn.addEventListener("click", startButton);

function startGame() {
  startBtn.classlist.add("hide");
  questionContainer.classList.remove("hide");
  callQuestion();
}
console.log("start");
function nextQuestion() {}

// function showQuestion() {}

// function selectAnswer() {}

var questions = [
  {
    question: "What is this example question? ",
    answer: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ],
  },
];

// The boolean data type can yield what result?
// True or False
// High or Low
// Tomatoe
// Soup
// What is JavaScript?
// Programming Language
// Good Coffee
// Bibilcal Passage
// Short Story
// What does API stand for?
// Application Programming Interface
// Apple Possum Interchange
// Angle Point Intensity
// Ally Plate Instagram
// A Full Stack Developer Should know which of the following?
// JavaScript
// How to cry
// Pigs can fly
// Peanut butter and mow the lawn
// The core client-side JavaScript language consists of which of the following?
// Store useful values inside variables, operate on pieces of text (known as "strings" in programming), run code in response to certain events occurring on a web page, and so much more.
// Send the cat to the store for wash the windows.
// Ford trucks are chicken tacos makes Henry wins.
// Whales sometimes eggs did not where's the beef.
