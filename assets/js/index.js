const startButton = document.getElementById("start-quiz-btn");
const mainSection = document.getElementById("main");
const startSection = document.getElementById("start-quiz-section");

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
let timerId;

const onLoad = () => {
  // initialise local storage

  const formComplete = document.getElementById("form-complete");

  const readFromLocalStorage = (key, defaultValue) => {
    // get from LS using key name
    const dataFromLS = localStorage.getItem(key);

    // parse data from LS
    const parsedData = JSON.parse(dataFromLS);

    if (parsedData) {
      return parsedData;
    } else {
      return defaultValue;
    }
  };

  const writeToLocalStorage = (key, value) => {
    // convert value to string
    const stringifiedValue = JSON.stringify(value);

    // set stringified value to LS for key name
    localStorage.setItem(key, stringifiedValue);
  };
  // check if highscores exists in LS
  // if false then set highscores to empty array in LS
};

const handleFormSubmit = () => {
  const fullNameInput = document.getElementById("full-name-input");
  const getScore = document.getElementById("form-hs");
  // get value from input
  // check if empty then render error alert with message and status

  if (fullNameInput.value == "") {
    alert("please fill your details");
  }

  // if not empty then create the score object
  const finalScore = {
    fullNameInput: fullNameInput,
    getScore: getScore,
  };

  const finalScores = readFromLocalStorage(finalScores, []);
  finalScores.push(finalScore);

  writeToLocalStorage("finalScores", finalScore);

  formComplete.addEventListener("submit", handleFormSubmit);

  // {
  //   fullName: "Bob Smith",
  //   score: 25
  // }
  // push score object to LS
  // render quizCompleteSection
};

const removeStartSection = () => {};

const removeQuestion = () => {
  if (document.getElementById("question-section")) {
    document.getElementById("question-section").remove();
  }
};

const startTimer = () => {
  const countdown = () => {
    const timerSpan = document.getElementById("timer-span");
    timerValue -= 1;

    timerSpan.textContent = timerValue > 0 ? timerValue : 0;

    if (timerValue <= 0) {
      clearInterval(timerId);
      removeQuestion();
      console.log("RENDER GAME OVER");
      renderGameOver();

      // render game over
    }

    //   // decrement timer value
    //   // if quizComplete is true then stop timer
    //   // check if timer reaches 0
    //   // if true render game over
  };

  // setInterval of 1000ms (1s)
  timerId = setInterval(countdown, 1000);
};

const validateAnswer = (event) => {
  console.log("this was clicked:", event.target.value);
  console.log("this is the correct answer", questions[questionIndex].answer);
  // get answer clicked from user
  const selectedAnswer = event.target.value;
  // get the correct answer for question
  const correctAnswer = questions[questionIndex].answer;
  // compare the 2 answers
  const correctAnswerSelected = selectedAnswer === correctAnswer;

  // set timeout for 500ms and then go to next question
  questionIndex += 1;
  //Check if the index is now the length of the array of questions
  //If it is then we know the quiz is over
  // if incorrect subtract 5 seconds from timerValue
  const quizOver = questionIndex === questions.length;

  removeQuestion();

  if (!correctAnswerSelected) {
    alert("incorrect answer");
    timerValue -= 5;
    // if quizOver is true, render GameOver otherwise move to next question
  }

  if (timerValue >= 0) {
    quizOver ? renderForm() : renderQuestionSection();
  }
  // if question is last question set quizComplete to true and then render form
  // if question is not last question then increment question index and render next question
};

const renderAlert = (message, status) => {
  // use HTML as guide and build in JS
  // append div to #question-section
};

const renderTimerSection = () => {
  // use HTML as guide and build in JS
  // append section to main
  const timerSection = document.createElement("section");
  const timerDiv = document.createElement("div");
  timerDiv.innerText = "Time Left: ";
  const timerSpan = document.createElement("span");
  //timerSpan.innerText = "50";
  // timerSection.setAttribute("id"), "timer-section";
  timerSpan.setAttribute("id", "timer-span");

  mainSection.appendChild(timerSection);
  timerSection.appendChild(timerDiv);
  timerDiv.appendChild(timerSpan);
};

const handleClick = () => {
  console.log("handling click from ", this);
};

const renderQuestionSection = () => {
  // use HTML as guide and build in JS
  // mainSection.innerHTML = "";
  //Create Quesiton Section
  const questionSection = document.createElement("section");
  questionSection.setAttribute("id", "question-section");
  //Create h3 element and give text content of current question
  const question = document.createElement("h3");
  question.textContent = questions[questionIndex].question;
  //Append question h3 element to the question section
  questionSection.appendChild(question);
  //Loop over question choices and create buttons for each and append to question section
  const currentChoices = questions[questionIndex].choices;

  for (let i = 0; i < currentChoices.length; i++) {
    const button = document.createElement("button");
    button.textContent = currentChoices[i];
    button.setAttribute("value", currentChoices[i]);
    // button.onclick = validateAnswer;
    button.addEventListener("click", validateAnswer);
    questionSection.appendChild(button);
  }

  // append question section to main
  mainSection.appendChild(questionSection);
  // add click event listener on #question-section
  //questionSection.addEventListener("click", handleClick);
};

const renderGameOver = () => {
  // use HTML as guide and build in JS
  const gameOver = document.createElement("section");
  gameOver.setAttribute("id", "game-over-section");
  gameOver.setAttribute("class", "game-over");

  const gameOverH2 = document.createElement("h2");
  gameOverH2.textContent = "Well done you have completed the quiz";

  const gameOverText = document.createElement("p");
  gameOverText.textContent = "Share with friends and family";

  // append section to main

  mainSection.append(gameOver);
  gameOver.append(gameOverH2);
  gameOverH2.append(gameOverText);
};

const renderForm = () => {
  console.log("Called render form");
  clearInterval(timerId);
  const finalScore = timerValue;

  // use HTML as guide and build in JS
  // append section to main
  // add submit event handler to form
  const formSection = document.getElementById("form-section");
  const scoreDisplay = document.getElementById("form-hs");
  scoreDisplay.textContent = "Your final score is " + finalScore;
  formSection.removeAttribute("class");
};

const renderQuizCompleteSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const startQuiz = () => {
  // remove start section using .remove() function
  startSection.remove();

  // render timer section
  renderTimerSection();

  // render question section
  renderQuestionSection();

  // start timer (tuesday session)
  startTimer();
};

// add event listeners
// add document on load event listener

// add start button click event listener
startButton.addEventListener("click", startQuiz);
