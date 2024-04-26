// "JSON".
const questions = [
  {
    "question": "¿Cuál es la capital de Francia?",
    "answers": [
      {"text": "Londres", "correct": false},
      {"text": "Madrid", "correct": false},
      {"text": "París", "correct": true},
      {"text": "Roma", "correct": false}
    ]
  },
  {
    "question": "¿Cuál es el río más largo del mundo?",
    "answers": [
      {"text": "Amazonas", "correct": true},
      {"text": "Nilo", "correct": false},
      {"text": "Misisipi", "correct": false},
      {"text": "Yangtsé", "correct": false}
    ]
  },
  {
    "question": "¿Quién escribió 'Cien años de soledad'?",
    "answers": [
      {"text": "Mario Vargas Llosa", "correct": false},
      {"text": "Gabriel García Márquez", "correct": true},
      {"text": "Isabel Allende", "correct": false},
      {"text": "Julio Cortázar", "correct": false}
    ]
  },
  {
    "question": "¿Qué año comenzó la Segunda Guerra Mundial?",
    "answers": [
      {"text": "1939", "correct": true},
      {"text": "1941", "correct": false},
      {"text": "1945", "correct": false},
      {"text": "1933", "correct": false}
    ]
  },
  {
    "question": "¿Cuál es el planeta más grande del sistema solar?",
    "answers": [
      {"text": "Mercurio", "correct": false},
      {"text": "Júpiter", "correct": true},
      {"text": "Venus", "correct": false},
      {"text": "Tierra", "correct": false}
    ]
  },
  {
    "question": "¿Cuál es el océano más grande del mundo?",
    "answers": [
      {"text": "Océano Atlántico", "correct": false},
      {"text": "Océano Índico", "correct": false},
      {"text": "Océano Pacífico", "correct": true},
      {"text": "Océano Ártico", "correct": false}
    ]
  },
  {
    "question": "¿Quién pintó 'La última cena'?",
    "answers": [
      {"text": "Vincent van Gogh", "correct": false},
      {"text": "Leonardo da Vinci", "correct": true},
      {"text": "Pablo Picasso", "correct": false},
      {"text": "Michelangelo", "correct": false}
    ]
  },
  {
    "question": "¿Cuál es el metal más caro del mundo?",
    "answers": [
      {"text": "Oro", "correct": false},
      {"text": "Platino", "correct": false},
      {"text": "Rodio", "correct": true},
      {"text": "Plata", "correct": false}
    ]
  },
  {
    "question": "¿En qué año llegó el hombre a la luna por primera vez?",
    "answers": [
      {"text": "1969", "correct": true},
      {"text": "1967", "correct": false},
      {"text": "1971", "correct": false},
      {"text": "1973", "correct": false}
    ]
  },
  {
    "question": "¿Cuál es el animal más rápido del mundo?",
    "answers": [
      {"text": "Guepardo", "correct": true},
      {"text": "León", "correct": false},
      {"text": "Águila", "correct": false},
      {"text": "Leopardo", "correct": false}
    ]
  }
];

// Get DOM elements.
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

// Game variables.
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz.
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  showQuestion();
}

// Function to display a question.
function showQuestion() {
  resetState();

  const currentQuestion = questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNumber}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach(answer => {
    const button = createAnswerButton(answer.text, answer.correct);
    answerButtons.appendChild(button);
  });
}

// Function to create an answer button.
function createAnswerButton(text, isCorrect) {
  const button = document.createElement('button');
  button.innerHTML = text;
  button.classList.add('btn');
  if (isCorrect) {
    button.dataset.correct = true;
  }
  button.addEventListener('click', selectAnswer);
  return button;
}

// Function to reset the state of answer buttons.
function resetState() {
  nextButton.style.display = 'none';
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Function to handle answer selection.
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.hasOwnProperty('correct') && selectedBtn.dataset.correct === 'true';

  if (isCorrect) {
    selectedBtn.style.background = "#9AEABC";
    score++;
  } else {
    selectedBtn.style.background = "#FF9393";
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.hasOwnProperty('correct') && button.dataset.correct === 'true') {
      button.style.background = "#9AEABC";
    }
    button.disabled = true;
  });

  nextButton.style.display = 'block';
}

// Function to show the score.
function showScore(){
  resetState();
  questionElement.innerHTML = `You score ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Play Again';
  nextButton.style.display = 'block';
}

// Function to change the button.
function handleNextButton(){
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// Function to past to the next question.
nextButton.addEventListener('click', ()=>{
  if(currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
