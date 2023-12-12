const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from ".js/questoes.js";

let currentIndex = 0;
let questionsCorrect = 0;

function nextQuestion(e){
    if(e.target.getAttribute("data-correct") === "true"){
        questionsCorrect++;
    }
    if(currentIndex < questions.length - 1){
        currentIndex++;
        loadQuestion();
    } else{
        finish();
    }
}

function finish(){
    textFinish.innerHTML = `voce acertou ${questionsCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
        <button class="answer" data-correct="${answers.correct}">
            ${answer.option}
        </button>
        `;  

        answers.appendChild(div);
    })
    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    })
}

loadQuestion()