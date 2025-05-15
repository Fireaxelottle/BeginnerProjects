// The Array

const AllQuestions = [{
        name: "Who is Abdullah Naeem?",
        a: "nigga",
        b: "boy",
        c: "man",
        d: "niga pro max",
        correct: "d",

    },
    {
        name: "how old is Abdullah Asghar?",
        a: "15 years",
        b: "0 years",
        c: "15.5years",
        d: "100 million years",
        correct: "c",

    },
    {
        name: "what is Abdullah`s fav language?",
        a: "javascript",
        b: "English",
        c: "Enchantmet table",
        d: "nigga",
        correct: "a",

    },
    {
        name: "Who much money is in my bank?",
        a: "50$",
        b: "1000rs",
        c: "0",
        d: "1,000,000,000 $",
        correct: "c",

    },
    {
        name: "What is the color of my car?",
        a: "black",
        b: "transparent",
        c: "blue",
        d: "pink",
        correct: "b",

    },


];

// The variabels
const question = document.getElementById("question");
const number = document.getElementById("number");
const a_1 = document.getElementById("answer-1");
const a_2 = document.getElementById("answer-2");
const a_3 = document.getElementById("answer-3");
const a_4 = document.getElementById("answer-4");
const result = document.getElementById("results");
const submit = document.querySelector(".results");
const quiz = document.getElementById ("question-box");
let question_number = 0;
let marks = 0;

const answerEl = document.querySelectorAll(".answer");

// LOGISTICS

const unchecked = () => {
    answerEl.forEach((answerEl)=>{
        answerEl.checked= false;
    })
}

const loadQuiz = () => {
    unchecked();
    let quizData = AllQuestions[question_number];
    number.innerHTML = (question_number + 1) + ":";
    question.innerText = quizData.name;
    a_1.innerText = quizData.a;
    a_2.innerText = quizData.b;
    a_3.innerText = quizData.c;
    a_4.innerText = quizData.d;
}


loadQuiz();


const GetSellected = () => {  

    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }

    });
    return answer;
}




submit.addEventListener("click", () => {
    const answer = GetSellected();

    if (answer) {
        if (answer === AllQuestions[question_number].correct) {
            marks++;
        }
        question_number++;
        if (question_number < AllQuestions.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h1>You got ${marks}/${AllQuestions.length} marks </h1>` + `<h1>Refresh to play Again.</h1>` ;
            quiz.classList.add("centered");
        }
    }



})