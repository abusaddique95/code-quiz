const startButton = document.getElementById("start-quiz-btn");
const mainSection = document.getElementById("main");
const questionSection = document.getElementById("question-section");
const timerSpan = document.getElementById("timer-span");
const formSection = document.getElementById("form-section");
const fullNameInput = document.getElementById("full-name-input");

// global declarations
const questions = [
  {
    question: "Whats the answer to number 1?",
    choices: ["One", "Two", "Three", "Four"],
    answer: "One",
  },
  {
    question: "Whats the answer to number 2?",
    choices: ["One", "Two", "Three", "Four"],
    answer: "Two",
  },
  {
    question: "Whats the answer to number 3?",
    choices: ["One", "Two", "Three", "Four"],
    answer: "Three",
  },
  {
    question: "Whats the answer to number 4?",
    choices: ["One", "Two", "Three", "Four"],
    answer: "Four",
  },
];

let questionIndex = 0;
let timerValue = 10 * questions.length;
let quizComplete = false;

const onLoad = () => {
  console.log("hello");
  // initialise local storage
  // check if highscores exists in LS
  // if false then set highscores to empty array in LS
};

const removeStartSection = () => {};

const startTimer = () => {
  // declare function to execute every 1 sec
  const countdown = () => {
    // decrement timer value
    // if quizComplete is true then stop timer
    // check if timer reaches 0
    // if true render game over
  };

  // setInterval of 1000ms (1s)
};

const validateAnswer = () => {
  // get answer clicked from user
  // get the correct answer for question
  // compare the 2 answers
  // if incorrect subtract 5 seconds from timerValue
  // if incorrect render error alert with message and status
  // if correct render success alert with message and status
  // set timeout for 500ms and then go to next question
  // if question is last question set quizComplete to true and then render form
  // if question is not last question then increment question index and render next question
  questionIndex++;
  renderQuestionSection();
};

const handleFormSubmit = () => {
  // get value from input
  // check if empty then render error alert with message and status
  // if not empty then create the score object
  // {
  //   fullName: "Bob Smith",
  //   score: 25
  // }
  // push score object to LS
  // render quizCompleteSection
};

const renderTimerSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const renderQuestionSection = () => {
  // use HTML as guide and build in JS
  //Create Quesiton Section
  const questionSection = document.createElement("section");
  //Create h3 element and give text content of current question
  const question = document.createElement("h3");
  question.textContent = questions[questionIndex].question;
  //Append question h3 element to the question section
  questionSection.appendChild(question);
  //Loop over question choices and create buttons for each and append to question section
  const currentChoices = questions[questionIndex].choices;
  console.log(questionIndex, currentChoices);
  for (let i = 0; i < currentChoices.length; i++) {
    const button = document.createElement("button");
    button.textContent = currentChoices[i];
    button.onclick = validateAnswer;
    questionSection.appendChild(button);
  }
  console.log("question section", questionSection);

  // append question section to main
  mainSection.appendChild(questionSection);
  // add click event listener on #question-section
  questionSection.addEventListener("click");
};

const renderGameOver = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const renderAlert = (message, status) => {
  // use HTML as guide and build in JS
  // append div to #question-section
};

const renderForm = () => {
  // use HTML as guide and build in JS
  // append section to main
  // add submit event handler to form
};

const renderQuizCompleteSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const startQuiz = () => {
  console.log("start quiz button click");
  // remove start section
  startButton.setAttribute("class", "hide");
  // start timer (tuesday session)
  // render timer section
  // render question section
  renderQuestionSection();
};

// add event listeners
// add document on load event listener

// add start button click event listener
startButton.addEventListener("click", startQuiz);
