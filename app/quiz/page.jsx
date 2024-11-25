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
    <div>
      <Header />
      <div>
        <h1>Quiz</h1>
        <QuizComponent />
      </div>
    </div>
  );
}