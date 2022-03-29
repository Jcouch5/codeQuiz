var timer = document.querySelector("#timer");
var clear = document.querySelector('#clear');
var start = document.querySelector('#start');
var questionEl = document.querySelector('#question');
var answerchoice1 = document.querySelector('#answerbtn1');
var answerchoice2 = document.querySelector('#answerbtn2');
var answerchoice3 = document.querySelector('#answerbtn3');
var answerchoice4 = document.querySelector('#answerbtn4');
var answerBox = document.querySelector('#answers')

var timeLeft = 60;
var countdown

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

function start(){
    countdown = setInterval(function(){
        timeLeft --;
        timer.innerHTML = timeLeft;
        // endQuiz();
    }, 1000)
}
function endQuiz() {
    clearInterval(countdown);
}
function setQuestion(){
    var counter = 0;
    if(counter > questionList.length){
        // endQuiz();
    }
    var question = questionList[counter];
    console.log(question);
    console.log(question.question);
    questionEl.textContent = question.question;
    answerchoice1.textContent = question.choice1;
    answerchoice2.textContent = question.choice2;
    answerchoice3.textContent = question.choice3;
    answerchoice4.textContent = question.choice4;
    counter ++;
}
function isQuestionCorrect(event) {
var userAnswer = event.target
console.log(userAnswer);

}
setQuestion();
answerBox.addEventListener('click', isQuestionCorrect);
start.addEventListener('click', start());

