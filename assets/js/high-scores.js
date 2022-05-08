/event handler for click event for answers
// within renderQuestion function
const handleChoiceClick = (event) => {
  //get current target
  const currentTarget = event.currentTarget;
  //get target
  const target = event.target;
  //check if target element is li
  if (target.tagName === "LI") {
    //get the option the user clicked on
    const value = target.getAttribute("data-value");
    console.log(value);
    //get the question the user answered
    const correctAnswer = questions[questionIndex].correctAnswer;
    // compare the 2 answers
    if (value !== correctAnswer) {
      console.log("incorrect"); // if incorrect subtract 5 seconds from timerValue
      timerValue -= 5;
      //TO DO renderQUestionWrongAlert function -> if incorrect render error alert with message and status
      renderAlert();
      if (questionIndex < questions.length - 1) {
        //go to the next question
        questionIndex += 1;
        //remove both present question and last question
        removeQuestion();
        //and render the next question
        renderQuestion();
      } else {
        //go to the last question amd render  form with scores
        //remove questions
        removeQuestion();
        renderResults();
        renderForm();
      }
    } else {
      console.log("correct");
      score += 1;
      //if it's not the last question
      if (questionIndex < questions.length - 1) {
        //go to the next question
        questionIndex += 1;
        //remove both present question and last question
        removeQuestion();
        //and render the next question
        renderQuestion();
      } else {
        //go to the last question amd render  form with scores
        //remove questions
        removeQuestion();
        renderResults();
        renderForm();
      }
    }
  }
};
//declare function to render the results in function choiceHandleClick
const renderResults = () => {
  console.log("render results");
};





/event handler for click event for answers
// within renderQuestion function
const handleChoiceClick = (event) => {
  //get current target
  const currentTarget = event.currentTarget;
  //get target
  const target = event.target;
  //check if target element is li
  if (target.tagName === "LI") {
    //get the option the user clicked on
    const value = target.getAttribute("data-value");
    //get the question the user answered
    const correctAnswer = questions[questionIndex].correctAnswer;
    // compare the 2 answers
    if (value !== correctAnswer) {
      // if incorrect subtract 5 seconds from timerValue
      timerValue -= 5;
      if (questionIndex < questions.length - 1) {
        //go to the next question
        questionIndex += 1;
        //remove both present question and last question
        removeQuestion();
        //and render the next question
        renderQuestion();
      } else {
        //go to the last question amd render  form with scores
        //remove questions
        removeQuestion();
        removeTimerSection();
        renderResults();
        renderForm();
      }
    } else {
      score += 1;
      //if it's not the last question
      if (questionIndex < questions.length - 1) {
        //go to the next question
        questionIndex += 1;
        //remove both present question and last question
        removeQuestion();
        //and render the next question
        renderQuestion();
      } else {
        //go to the last question amd render  form with scores
        //remove questions
        removeQuestion();
        removeTimerSection();
        renderResults();
        renderForm();
      }
    }
  }
};