const quizz1 = [
  {
    question: "onde foi nosso primeiro beijo? 😙",
    a: "no carro indo para o supermercado antes do cumbuco",
    b: "assim que vc saiu do uber na locadora de carros",
    c: "no quarto a noite logo antes de voce me estrupar",
    d: "na praia, em cima da casinha dos salva vidas",
    answer: "d",
  },
  {
    question: "quantos reais eu te dei de aniversario? 💰",
    a: "R$200",
    b: "R$1200",
    c: "R$500",
    d: "R$50",
    answer: "c",
  },
  {
    question: "onde tomamos banho juntos pela primeira vez? 🚿",
    a: "Cumbuco",
    b: "La suite",
    c: "Guaramiranga Centro",
    d: "Meireles",
    answer: "a",
  },
  {
    question: "qual cor da tua calcinha que eu mais gostei? 🩲",
    a: "rosa",
    b: "vermelha",
    c: "preta",
    d: "roxa",
    answer: "b",
  },
  {
    question: "qual foi a primeira mensagem que te mandei? 💬",
    a: "você é muito linda!",
    b: "gostei do teu cabelo <3",
    c: "casa comigo?",
    d: "se ta procurando um velho pra te bancar?",
    answer: "c",
  },
  {
    question: "qual primeiro anime que assistimos juntos? 📺",
    a: "Dodoro",
    b: "A Voz do Silencio",
    c: "Your Name",
    d: "Vinland Saga",
    answer: "b",
  },
  {
    question: "qual foi nossa primeira bebida juntos? 🍻",
    a: "agua",
    b: "skol beats",
    c: "heineken",
    d: "suco de maracuja",
    answer: "b",
  },
  {
    question: "cor da minha camisa no nosso primeiro encontro? 👕",
    a: "cinza",
    b: "preta",
    c: "branca",
    d: "verde",
    answer: "a",
  },
  {
    question: "aonde foi que tu me deu o cuzinho pela primeira vez? 😉",
    a: "Guaramiranga casa grande",
    b: "Meireles",
    c: "Guaramiranga Centro",
    d: "La Suite",
    answer: "d",
  },
  {
    question: "qual motivo que quase terminei com voce em Guaramiranga? 😡",
    a: "você nao quiz ir comigo no pico alto ",
    b: "você não estava animada para beber e fazer as coisas comigo",
    c: "desde quando acordamos você mal conversava comigo",
    d: "todas as respostas",
    answer: "d",
  },
  {
    question: "nossa primeira foto junto foi aonde? 📷",
    a: "no carro",
    b: "na cama",
    c: "na praia",
    d: "nas dunas",
    answer: "a",
  },
  {
    question: "qual foi a primeira roupa que comprei pra voce? 👗",
    a: "vestido vermelho",
    b: "vestido verde",
    c: "macacãozinho",
    d: "vestido preto",
    answer: "c",
  },
  {
    question: "qual a senha do meu cartão de credito? 💳",
    a: "041786",
    b: "1779",
    c: "1986",
    d: "12457812",
    answer: "c",
  },
];

const aEl = document.querySelector(".aEl");
const bEl = document.querySelector(".bEl");
const cEl = document.querySelector(".cEl");
const dEl = document.querySelector(".dEl");
const question = document.querySelector(".question");
const submitBtn = document.querySelector(".submitBtn");
const nextBtn = document.querySelector(".nextBtn");
const quizzContainer = document.querySelector(".quizz-container");
const resultContainer = document.querySelector(".result-container");
const resultMessage = document.querySelector(".result-message");
const answers = document.getElementsByName("answer");

let currentQuestion = 0;
let totalCorrect = 0;

let currentCorrectAnswer;
let currentSelectedAnswer;
let currentCorrectAnswerEl;
let currentSelectedAnswerEl;

// returns selected letter and question value
function selectedAnswer() {
  for (i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      currentSelectedAnswer = answers[i].id;
      currentSelectedAnswerEl = document.querySelector(
        `.${currentSelectedAnswer}El`
      );
      return {
        id: answers[i].id,
        question: quizz1[currentQuestion][answers[i].id],
      };
    }
  }
}

// displays current question
function displayCurrentQuestion() {
  aEl.textContent = quizz1[currentQuestion].a;
  bEl.textContent = quizz1[currentQuestion].b;
  cEl.textContent = quizz1[currentQuestion].c;
  dEl.textContent = quizz1[currentQuestion].d;
  question.textContent = quizz1[currentQuestion].question;
  currentCorrectAnswer = quizz1[currentQuestion].answer;
  currentCorrectAnswerEl = document.querySelector(`.${currentCorrectAnswer}El`);
}

function checkAnswer() {
  const correctAnswer = quizz1[currentQuestion].answer;
  return selectedAnswer().id === correctAnswer;
}

displayCurrentQuestion();

submitBtn.addEventListener("click", function () {
  // display wrong or correct visual cues
  // show next question button
  // make sure one radio input is checked before allowing responder function
  if (currentQuestion < quizz1.length) {
    const letter = selectedAnswer().id;
    const correctEl = document.querySelector(`.${letter}El`);
    if (checkAnswer()) {
      correctEl.classList.add("correctStyle");
      totalCorrect++;
    } else {
      correctEl.classList.add("wrongStyle");
      currentCorrectAnswerEl.classList.add("correctStyle");
    }
    // answers.forEach((el) => (el.checked = false));
    currentQuestion++;
    submitBtn.classList.toggle("hidden");
    nextBtn.classList.toggle("hidden");
    if (currentQuestion === quizz1.length) {
      let message;
      totalCorrect > 10
        ? (message = "acertou bastante 🥰")
        : (message = "presta mais atenção mulher");
      quizzContainer.classList.add("hidden");
      resultMessage.textContent = `você acertou ${totalCorrect} de ${quizz1.length}.. ${message}`;
      resultContainer.classList.remove("hidden");
    }
  }
  answers.forEach((el) => (el.checked = false));
});

nextBtn.addEventListener("click", function () {
  currentSelectedAnswerEl.classList.remove("correctStyle");
  currentSelectedAnswerEl.classList.remove("wrongStyle");
  currentCorrectAnswerEl.classList.remove("correctStyle");
  if (currentQuestion < quizz1.length) {
    submitBtn.classList.toggle("hidden");
    nextBtn.classList.toggle("hidden");
    displayCurrentQuestion();
  }
});
// next question button:
// display
