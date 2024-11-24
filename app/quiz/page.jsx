"use client";
import Header from '../components/header/header';
import style from './page.module.css';
import { useEffect, useState } from 'react';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    fechtQuestions();
  }, []);
const fechtQuestions = async () => {
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
}
  return (
    <div className={style.container}>
      <Header />
      <div className={style.card}>
        <h1 className={style.title}>Quiz</h1>
            <p className={style.info}>Aqui você consegue achar perguntas sobre as matérias lidas.</p>
            <p className={style.info}>Clique no botão abaixo pra iniciar o quiz.</p>
          {questions.map((question) => (
            <div key={question.id} className={style.question}>
              <h3>{question.question}</h3>

            </div>
          ))
        }
      </div>
    </div>
  );
}