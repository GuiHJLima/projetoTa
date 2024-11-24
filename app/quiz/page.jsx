"use client";
import Header from '../components/header/header';
import style from './page.module.css';
import { useState } from 'react';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = async () => {
    setQuizStarted(true);
    const response = await fetch('http://localhost:3003/quiz-aleatorios');
    const data = await response.json();
    setQuestions(data);
  };

  return (
    <div className={style.container}>
      <Header />
      <div className={style.card}>
        <h1 className={style.title}>Quiz</h1>
        {!quizStarted ? (
          <>
            <p className={style.info}>Aqui você consegue achar perguntas sobre as matérias lidas.</p>
            <p className={style.info}>Clique no botão abaixo pra iniciar o quiz.</p>
            <button className={style.button} onClick={startQuiz}>Start Quiz</button>
          </>
        ) : (
          questions.map((question, index) => (
            <div key={index} className={style.questionCard}>
              <h2 className={style.question}>{question.pergunta}</h2>
              
              <div className={style.answers}>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}