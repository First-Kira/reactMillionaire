class Question {
    constructor(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
}

const questions = [
    new Question("What is the capital of France?", ["A. London", "B. Paris", "C. Berlin", "D. Rome"], "B"),
    new Question("Which planet is known as the Red Planet?", ["A. Venus", "B. Mars", "C. Jupiter", "D. Saturn"], "B"),
    new Question("Which is the largest ocean on Earth?", ["A. Atlantic Ocean", "B. Indian Ocean", "C. Arctic Ocean", "D. Pacific Ocean"], "D"),
    new Question("What is the tallest mountain in the world?", ["A. Mount Everest", "B. Mount Kilimanjaro", "C. K2", "D. Mount Fuji"], "A"),
    new Question("What is the chemical symbol for water?", ["A. Wo", "B. Wa", "C. H2O", "D. W"], "C"),
    new Question("Who wrote 'Romeo and Juliet'?", ["A. William Shakespeare", "B. Charles Dickens", "C. Mark Twain", "D. Jane Austen"], "A"),
    new Question("Which country is known as the Land of the Rising Sun?", ["A. China", "B. Japan", "C. South Korea", "D. Vietnam"], "B"),
    new Question("What is the largest organ in the human body?", ["A. Heart", "B. Brain", "C. Liver", "D. Skin"], "D"),
    new Question("Who painted the Mona Lisa?", ["A. Vincent van Gogh", "B. Leonardo da Vinci", "C. Pablo Picasso", "D. Michelangelo"], "B"),
    new Question("What is the main ingredient in guacamole?", ["A. Tomatoes", "B. Avocado", "C. Onions", "D. Cilantro"], "B"),
    new Question("What is the currency of Japan?", ["A. Yuan", "B. Yen", "C. Euro", "D. Dollar"], "B"),
    new Question("Which gas do plants use to photosynthesize?", ["A. Oxygen", "B. Nitrogen", "C. Carbon Dioxide", "D. Hydrogen"], "C"),
    new Question("What is the chemical symbol for gold?", ["A. Au", "B. Ag", "C. Pt", "D. Hg"], "A"),
    new Question("Who was the first man to step on the moon?", ["A. Buzz Aldrin", "B. Neil Armstrong", "C. Michael Collins", "D. Alan Shepard"], "B"),
    new Question("What is the largest animal in the world?", ["A. African Elephant", "B. Blue Whale", "C. Giraffe", "D. Saltwater Crocodile"], "B")
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const feedbackElement = document.getElementById('feedback');
    const scoreElement = document.getElementById('score');
    
    feedbackElement.innerHTML = '';
    scoreElement.innerHTML = `Score: ${score}`;
    
    if (currentQuestionIndex >= questions.length) {
        feedbackElement.innerHTML = "Congratulations! You are a millionaire!";
        questionElement.innerHTML = '';
        answersElement.innerHTML = '';
        document.getElementById('submit').style.display = 'none';
        return;
    }
    
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    answersElement.innerHTML = '';
    
    currentQuestion.answers.forEach(answer => {
        const answerElement = document.createElement('div');
        answerElement.className = 'answer';
        answerElement.innerHTML = `<input type="radio" name="answer" value="${answer[0]}"> ${answer}`;
        answersElement.appendChild(answerElement);
    });
}

function submitAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Please select an answer.");
        return;
    }
    
    const feedbackElement = document.getElementById('feedback');
    
    if (selectedAnswer.value === questions[currentQuestionIndex].correctAnswer) {
        feedbackElement.innerHTML = "Correct!";
        score++;
    } else {
        feedbackElement.innerHTML = `Incorrect! The correct answer is ${questions[currentQuestionIndex].correctAnswer}.`;
        document.getElementById('submit').style.display = 'none';
        return;
    }
    
    currentQuestionIndex++;
    loadQuestion();
}

window.onload = loadQuestion;

