var timer = document.querySelector("#timer");
var clear = document.querySelector('#clear');
var start = document.querySelector('#start');

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
    
}


