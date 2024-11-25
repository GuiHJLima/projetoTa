"use client";
import Header from '../components/header/header';
import style from './page.module.css';
import { useState, useEffect } from 'react';
import QuizComponent from '../components/quizcomponent/quiz';
export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    if (quizStarted) {
      const fetchQuestions = async () => {
        try {
          const response = await fetch('http://localhost:3003/quiz-aleatorios', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if (!response.ok) {
            throw new Error('Erro ao buscar perguntas');
          }
          const result = await response.json();
          setQuestions(result);
        } catch (error) {
          console.log(error);
        }
      };
      fetchQuestions();
    }
  }, [quizStarted]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setPoints(points + 1);
    }
  };

  return (
    <div className={style.container}>
      <Header />
      <div className={style.card}>
        <h1 className={style.title}>Quiz</h1>
        <QuizComponent />
        {!quizStarted ? (
          <>
            <p className={style.info}>Aqui você consegue achar perguntas sobre as matérias lidas.</p>
            <p className={style.info}>Clique no botão abaixo pra iniciar o quiz.</p>
            <button className={style.button} onClick={() => setQuizStarted(true)}>Start Quiz</button>
          </>
        ) : (
          <>
            <p className={style.points}>Pontos: {points}</p>
            {questions.map((question) => (
              <div key={question.id} className={style.question}>
                <h3>{question.pergunta}</h3>
                <ul>
                  <li onClick={() => handleAnswer(question.alternativa_a_correta)}>{question.alternativa_a}</li>
                  <li onClick={() => handleAnswer(question.alternativa_b_correta)}>{question.alternativa_b}</li>
                  <li onClick={() => handleAnswer(question.alternativa_c_correta)}>{question.alternativa_c}</li>
                  <li onClick={() => handleAnswer(question.alternativa_d_correta)}>{question.alternativa_d}</li>
                </ul>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}