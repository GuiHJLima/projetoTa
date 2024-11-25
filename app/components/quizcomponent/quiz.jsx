import React, { useState, useEffect, useRef } from 'react';
import styles from './quiz.module.css'; // Importando o módulo CSS

const QuizComponent = () => {
  const letters = ['a', 'b', 'c', 'd'];
  const [questions] = useState([
    {
      question: "O que é Node.js?",
      answers: [
        { answer: "Um sistema operacional", correct: false },
        { answer: "Uma biblioteca do JavaScript", correct: false },
        { answer: "Um ambiente de execução JavaScript", correct: true },
        { answer: "Uma linguagem de programação", correct: false }
      ]
    },
    {
      question: "Qual é a principal vantagem do Node.js?",
      answers: [
        { answer: "Desempenho em aplicações de rede", correct: true },
        { answer: "Facilidade de uso", correct: false },
        { answer: "Interface gráfica", correct: false },
        { answer: "Armazenamento de dados", correct: false }
      ]
    },
    {
      question: "Node.js é baseado em qual motor JavaScript?",
      answers: [
        { answer: "V8", correct: true },
        { answer: "SpiderMonkey", correct: false },
        { answer: "JavaScriptCore", correct: false },
        { answer: "Chakra", correct: false }
      ]
    },
    {
      question: "Qual dos seguintes é um framework popular para Node.js?",
      answers: [
        { answer: "Django", correct: false },
        { answer: "Flask", correct: false },
        { answer: "Express", correct: true },
        { answer: "Ruby on Rails", correct: false }
      ]
    },
    {
      question: "Qual comando é usado para instalar pacotes no Node.js?",
      answers: [
        { answer: "npm install", correct: true },
        { answer: "node install", correct: false },
        { answer: "npm get", correct: false },
        { answer: "node get", correct: false }
      ]
    },
    {
      question: "Qual é a extensão padrão para arquivos de módulos do Node.js?",
      answers: [
        { answer: ".node", correct: false },
        { answer: ".js", correct: true },
        { answer: ".mjs", correct: false },
        { answer: ".json", correct: false }
      ]
    },
    {
      question: "O que é o NPM?",
      answers: [
        { answer: "Um banco de dados", correct: false },
        { answer: "Um gerenciador de pacotes", correct: true },
        { answer: "Um servidor", correct: false },
        { answer: "Uma linguagem de programação", correct: false }
      ]
    },
    {
      question: "Qual método é usado para ler um arquivo de forma assíncrona em Node.js?",
      answers: [
        { answer: "fs.readFileSync()", correct: false },
        { answer: "fs.readFile()", correct: true },
        { answer: "fs.read()", correct: false },
        { answer: "fs.open()", correct: false }
      ]
    },
    {
      question: "O que é um Callback no Node.js?",
      answers: [
        { answer: "Uma função que é chamada após outra função ser executada", correct: true },
        { answer: "Uma biblioteca", correct: false },
        { answer: "Um comando do sistema", correct: false },
        { answer: "Um objeto", correct: false }
      ]
    },
    {
      question: "Qual é o comando para iniciar um projeto Node.js?",
      answers: [
        { answer: "npm start", correct: false },
        { answer: "node init", correct: false },
        { answer: "npm init", correct: true },
        { answer: "node start", correct: false }
      ]
    }
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questionTextRef = useRef(null);
  const questionNumberRef = useRef(null);
  const answersBoxRef = useRef(null);

  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      createQuestion(currentQuestionIndex);
    } else {
      setShowScore(true);
    }
  }, [currentQuestionIndex]);

  const createQuestion = (index) => {
    const questionText = questionTextRef.current;
    const questionNumber = questionNumberRef.current;
    const answersBox = answersBoxRef.current;

    questionText.textContent = questions[index].question;
    questionNumber.textContent = index + 1;

    // Limpa as respostas anteriores
    while (answersBox.firstChild) {
      answersBox.removeChild(answersBox.firstChild);
    }

    questions[index].answers.forEach((answer, i) => {
      const answerTemplate = document.querySelector(`.${styles['answer-template']}`).cloneNode(true);
      const letterBtn = answerTemplate.querySelector(`.${styles['btn-letter']}`);
      const answerText = answerTemplate.querySelector(`.${styles['question-answer']}`);

      letterBtn.textContent = letters[i];
      answerText.textContent = answer.answer;

      answerTemplate.setAttribute("correct-answer", answer.correct);
      answerTemplate.classList.remove(styles.hide);
      answerTemplate.classList.remove(styles['answer-template']);

      answerTemplate.addEventListener("click", () => checkAnswer(answerTemplate));

      answersBox.appendChild(answerTemplate);
    });
  };

  const checkAnswer = (btn) => {
    const buttons = answersBoxRef.current.querySelectorAll('button');
    buttons.forEach(button => {
      if (button.getAttribute("correct-answer") === "true") {
        button.classList.add(styles['correct-answer']);
        if (btn === button) {
          setPoints(points + 1);
        }
      } else {
        button.classList.add(styles['wrong-answer']);
      }
    });

    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setPoints(0);
    setShowScore(false);
  };

  return (
    <div>
      <h1 id={styles['main-title']}>Quizz Senai!</h1>
      {showScore ? (
        <div id={styles['score-container']}>
          <h2>Parabéns!</h2>
          <p id={styles['display-score']}><span>{((points / questions.length) * 100).toFixed(2)}</span>%</p>
          <p>
            Você acertou <span id={styles['correct-answers']}>{points}</span> de
            <span id={styles['questions-qty']}>{questions.length}</span> perguntas.
          </p>
          <button id={styles['restart']} onClick={restartQuiz}>Refazer quizz!</button>
        </div>
      ) : (
        <div id={styles['quizz-container']}>
          <p id={styles['question']}>
            <span id={styles['question-number']} ref={questionNumberRef}>1</span> - <span id={styles['question-text']} ref={questionTextRef}></span>
          </p>
          <div id={styles['answers-box']} ref={answersBoxRef}></div>
        </div>
      )}
      <button className={`${styles['answer-template']} ${styles.hide}`}>
        <span className={styles['btn-letter']}></span> <span className={styles['question-answer']}></span>
      </button>
    </div>
  );
};

export default QuizComponent;