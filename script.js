/*
    loads the first question from the list. The user's score is incremented by 1 if they get a question right. 
 */

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
    }
    

const quotes = [
    {author: "Peter Drucker", quote: "Knowledge has to be improved, challenged, and increased constantly, or it vanishes."},
    {author: "William Shakespeare", quote: "Ignorance is the curse of God; knowledge is the wing wherewith we fly to heaven."},
    {author: "Anthony J. D'Angelo", quote: "Wherever you go, no matter what the weather, always bring your own sunshine"}
]

const questions = [
    {question: "A slug's blood is green.", answer: true},
    {question: "The loudest animal is the African Elephant.", answer: false},
    {question: "Approximately one quarter of human bones are in the feet.", answer: true},
    {question: "The total surface area of a human lungs is the size of a football pitch.", answer: true},
    {question: "In West Virginia, USA, if you accidentally hit an animal with your car, you are free to take it home to eat.", answer: true},
    {question: "In London, UK, if you happen to die in the House of Parliament,you are entitled to a state funeral.", answer: false},
    {question: "It is illegal to pee in the Ocean in Portugal.", answer: true},
    {question: "You can lead a cow down stairs but not up stairs.", answer: false},
    {question: "Google was originally called 'Backrub'.", answer: true},
    {question: "Buzz Aldrin's mother's maiden name was 'Moon'.", answer: true},
    {question: "No piece of square dry paper can be folded in half more than 7 times.", answer: false},
    {question: "A few ounces of chocolate can to kill a small dog.", answer: true}
];

let score = 0;
let currentQuestionIndex = 0;

function loadQuote(){
    const quote = quotes.random()
    document.getElementById("quote").innerHTML = quote.quote
    document.getElementById("author").innerHTML = quote.author
}


function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').textContent = questions[currentQuestionIndex].question;
    } else {
        endGame();
    }
}

function guess(answer) {
    if (currentQuestionIndex < questions.length) {
        if (answer === questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        updateScore();
        loadQuestion();
    }
}

function updateScore() {
    document.getElementById('score').textContent = score;
}

function endGame() {
    document.getElementById('question').textContent = "Quiz over! Your final score is " + score + ".";
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('restart-container').style.display = 'block';
    document.getElementById('score-container').style.display = 'none';
}

function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('buttons').style.display = 'block';
    document.getElementById('restart-container').style.display = 'none';
    document.getElementById('score-container').style.display = 'block';
    updateScore();
    loadQuestion();
}

window.onload = function() {
    loadQuestion();
    loadQuote();
};
