// set html elements to vars
var timer = document.querySelector("#timer");
var startEl = document.querySelector('#start');
var questionEl = document.querySelector('#question');
var answerchoice1 = document.querySelector('#answerbtn1');
var answerchoice2 = document.querySelector('#answerbtn2');
var answerchoice3 = document.querySelector('#answerbtn3');
var answerchoice4 = document.querySelector('#answerbtn4');
var answerBox = document.querySelector('#answers')
var QuestionNAnswer = document.querySelector('#qna');
var saveHighscore = document.querySelector('#save');
var initials = document.querySelector('#initials');
var submitScore = document.querySelector('#submitHighscore');


var timeLeft = 60;
var counter = 0;
var countdown;
var highscore;
var questionList = [
    {
       question: "What data type is either true or false?",
       choice1: "String",
       choice2: "Number",
       choice3: "Boolean",
       choice4: "Decimal",
       answer: "Boolean"
    },
    {
        question: "What HTML tag is use to link a Javascript file?",
        choice1: "link",
        choice2: "a",
        choice3: "img",
        choice4: "script",
        answer: "script"
     },
     {
        question: "what is the correct way to use a variable is CSS?",
        choice1: "var(--color)",
        choice2: "--color",
        choice3: "color",
        choice4: "var",
        answer: "var(--color)"
     },
     {
        question: "Which of the following can arrays in Javascript hold",
        choice1: "String",
        choice2: "Object",
        choice3: "Boolean",
        choice4: "All of the Above",
        answer: "All of the Above"
     }
];
// starts the quiz: timer and questions
function startQuiz(){
    
    countdown = setInterval(function(){
        if (timeLeft > 0) {
            timer.textContent = timeLeft;
            timeLeft --;
            console.log(timeLeft);
        } else {
            timer.textContent = timeLeft;
            
            endQuiz();
        }  
    }, 1000)
    setQuestion();
}
// stops the timer, hides the questions, and shows the highscore input
function endQuiz() {
    clearInterval(countdown);
    QuestionNAnswer.setAttribute('class', 'hide');
    saveHighscore.removeAttribute('class', 'hide');

}
// sets the questions onto the screen
function setQuestion(){
    
    var question = questionList[counter];
    if(counter >= questionList.length){
        endQuiz();
    } else {
        questionEl.textContent = question.question;
        answerchoice1.textContent = question.choice1;
        answerchoice1.setAttribute('value',question.choice1)
        answerchoice2.textContent = question.choice2;
        answerchoice2.setAttribute('value',question.choice2)
        answerchoice3.textContent = question.choice3;
        answerchoice3.setAttribute('value',question.choice3)
        answerchoice4.textContent = question.choice4;
        answerchoice4.setAttribute('value',question.choice4)
    }
}
// checks if the answer was correct and deducts time if it was incorrect
function isQuestionCorrect(event) {
    
    var userAnswer = event.target.value;
    if(userAnswer !== questionList[counter].answer) {
        timeLeft -= 5;
        if(timeLeft <= 0){
            endQuiz();
        }
    }
    counter ++;
    setQuestion();
}
// saves the initials and score to local storage
function save () {
    var savedInitials = initials.value.trim();
    highscore = timeLeft;
    localStorage.setItem('highscore',highscore);
    localStorage.setItem('initials', savedInitials);
}

startQuiz();
answerBox.addEventListener('click', isQuestionCorrect);
submitScore.addEventListener('click',save);

// startEl.addEventListener('click', startQuiz)

