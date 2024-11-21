const questions = [
    {
        question: "What are poverty guidelines used for?",
        options: ["Calculating the number of people in poverty each year.", "Determining financial eligibility for certain federal programs.", "Measuring the impact of climate change on poverty rates.", "Estimating global poverty levels."],
        answer: 1
    },
    {
        question: "Who issues the poverty guidelines annually?",
        options: ["The Census Bureau.", "The Department of Health and Human Services (HHS).", "The World Bank.", "The United Nations."],
        answer: 0
    },
    {
        question: "Which agency adjusts poverty guidelines to reflect the price level of the measurement year?",
        options: ["The Census Bureau.", "The Department of Health and Human Services (HHS).", "The World Health Organization (WHO).", " The International Monetary Fund (IMF)."],
        answer: 1
    },
    {
        question: "How do poverty thresholds differ from poverty guidelines?",
        options: [" Poverty thresholds are used for administrative purposes, while poverty guidelines are for statistical calculations.", "Poverty thresholds vary by family size and geographic location, while poverty guidelines have a fixed set of figures.", "Poverty thresholds are adjusted to the price level of the year for which poverty is measured, while poverty guidelines remain constant.", "Poverty thresholds are issued by the World Bank, while poverty guidelines are issued by the United Nations."],
        answer: 1
    },
    {
        question: "Which country has the highest poverty rate?",
        options: ["India", "Ethiopia", "Democratic Republic of Congo", "Nigeria"],
        answer: 3
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
