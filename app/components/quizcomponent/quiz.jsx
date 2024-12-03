"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './quiz.module.css'; // Importando o módulo CSS

const QuizComponent = () => {
  const letters = ['a', 'b', 'c', 'd'];
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questionTextRef = useRef(null);
  const questionNumberRef = useRef(null);
  const answersBoxRef = useRef(null);
  useEffect(() => {
    const fetchedQuestions = [
      {
        question: "Você clica em links que recebe por mensagem de aplicativo?",
        answers: [
          { answer: "Sim", correct: false },
          { answer: "Não", correct: true },
          { answer: "Às vezes", correct: false }
        ]
      },
      {
        question: "Você abre e-mails enviados por pessoas que você não conhece?",
        answers: [
          { answer: "Sim", correct: false },
          { answer: "Não", correct: true },
          { answer: "Às vezes", correct: false }
        ]
      },
      {
        question: "Você passa informações pessoais por telefone e/ou internet?",
        answers: [
          { answer: "Sim", correct: false },
          { answer: "Não", correct: true }
        ]
      },
      {
        question: "Você passa dados bancários por telefone e/ou internet?",
        answers: [
          { answer: "Sim", correct: false },
          { answer: "Não", correct: true }
        ]
      },
      {
        question: "Você paga boleto bancário sem conferir nomes, datas e valores?",
        answers: [
          { answer: "Sim", correct: false },
          { answer: "Não", correct: true }
        ]
      },
      {
        question: "Você abre e-mails ou links que oferecem sorteios e promoções?",
        answers: [
          { answer: "Sim", correct: false },
          { answer: "Não", correct: true },
          { answer: "Às vezes", correct: false }
        ]
      },
      {
        question: "Você faz downloads de arquivos de sites desconhecidos?",
        answers: [
          { answer: "Sim", correct: false },
          { answer: "Não", correct: true },
          { answer: "Às vezes", correct: false }
        ]
      },
      {
        question: "Você faz compras em sites desconhecidos?",
        answers: [
          { answer: "Sim", correct: false },
          { answer: "Não", correct: true }
        ]
      },
      {
        question: "Suas senhas têm sequência de números, nome ou data de aniversário?",
        answers: [
          { answer: "Sim", correct: false },
          { answer: "Não", correct: true }
        ]
      },
      {
        question: "Você passa a senha da sua conta por telefone e/ou internet?",
        answers: [
          { answer: "Sim", correct: false },
          { answer: "Não", correct: true }
        ]
      }
    ];
    setQuestions(fetchedQuestions);
  }, []);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
      createQuestion(currentQuestionIndex);
    } else if (questions.length > 0) {
      setShowScore(true);
    }
  }, [currentQuestionIndex, questions]);

  const createQuestion = (index) => {
    const questionText = questionTextRef.current;
    const questionNumber = questionNumberRef.current;
    const answersBox = answersBoxRef.current;

    if (questionText && questionNumber && answersBox) {
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
    }
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
    setQuestions(shuffleArray(questions).slice(0, 10));
  };

  return (
    <div>
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