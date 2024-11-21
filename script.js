const questions = [
    {
        question: "What is the main cause of climate change?",
        options: ["Deforestation", "Fossil fuels", "Overfishing", "Nuclear power"],
        answer: 1
    },
    {
        question: "Which gas is primarily responsible for global warming?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Methane"],
        answer: 2
    },
    {
        question: "What is the term for the trapping of heat by gases in the atmosphere?",
        options: ["Greenhouse effect", "Global cooling", "Acid rain", "Ozone depletion"],
        answer: 0
    },
    {
        question: "What renewable energy source is the most widely used worldwide?",
        options: ["Wind", "Solar", "Hydropower", "Geothermal"],
        answer: 2
    },
    {
        question: "Which international agreement aims to limit global warming?",
        options: ["Kyoto Protocol", "Paris Agreement", "Montreal Protocol", "Geneva Convention"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionButtons = document.querySelectorAll('.option');

    questionElement.innerText = questions[currentQuestion].question;
    optionButtons.forEach((button, index) => {
        button.innerText = questions[currentQuestion].options[index];
    });
}

function checkAnswer(option) {
    if (option === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('score').innerText = `${score} / ${questions.length}`;
}

function restartGame() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    displayQuestion();
}

window.onload = displayQuestion;
