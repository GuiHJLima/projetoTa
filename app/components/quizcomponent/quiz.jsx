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
        question: "O que é phishing?",
        answers: [
          { answer: "Golpe que pede dados bancários por telefone", correct: false },
          { answer: "Golpe que pede dados bancários por e-mail", correct: true },
          { answer: "Golpe que pede dados bancários por mensagem de texto", correct: false },
          { answer: "Golpe que pede dados bancários por redes sociais", correct: false }
        ]
      },
      {
        question: "O que é um golpe de boleto falso?",
        answers: [
          { answer: "Boleto com valor errado", correct: false },
          { answer: "Boleto com dados falsificados", correct: false },
          { answer: "Boleto com o nome de uma empresa falsa", correct: false },
          { answer: "Todos os itens acima", correct: true }
        ]
      },
      {
        question: "O que é o golpe do 'falso suporte técnico'?",
        answers: [
          { answer: "Golpistas pedem dinheiro para consertar o computador", correct: false },
          { answer: "Golpistas pedem dados bancários para fazer atualização de sistema", correct: true },
          { answer: "Golpistas pedem dados de redes sociais", correct: false },
          { answer: "Golpistas oferecem antivírus falso", correct: false }
        ]
      },
      {
        question: "O que caracteriza um golpe de 'clonagem de cartão'?",
        answers: [
          { answer: "Roubo físico do cartão", correct: false },
          { answer: "Cópia de dados do cartão para fazer compras falsas", correct: true },
          { answer: "Uso do cartão sem autorização em loja física", correct: false },
          { answer: "Compra de produtos com desconto falso", correct: false }
        ]
      },
      {
        question: "O que é 'ransomware'?",
        answers: [
          { answer: "Golpe de roubo de senhas", correct: false },
          { answer: "Golpe que exige pagamento para liberar os arquivos", correct: true },
          { answer: "Golpe de venda de dados", correct: false },
          { answer: "Golpe de vendas falsas", correct: false }
        ]
      },
      {
        question: "O que é o golpe 'golpe do falso emprego'?",
        answers: [
          { answer: "Golpistas pedem pagamento para uma vaga de emprego", correct: true },
          { answer: "Golpistas pedem dados bancários para contratar", correct: false },
          { answer: "Golpistas pedem dinheiro para realizar entrevista", correct: false },
          { answer: "Golpistas pedem pagamento para cursos de treinamento", correct: false }
        ]
      },
      {
        question: "Como funciona o 'golpe da falsa venda'?",
        answers: [
          { answer: "Golpistas vendem produtos que não existem", correct: false },
          { answer: "Golpistas vendem produtos falsificados", correct: false },
          { answer: "Golpistas vendem produtos usados como novos", correct: false },
          { answer: "Todos os itens acima", correct: true }
        ]
      },
      {
        question: "O que é um 'golpe de SMS phishing'?",
        answers: [
          { answer: "Golpe que envia links maliciosos via SMS", correct: true },
          { answer: "Golpe que envia e-mails falsificados", correct: false },
          { answer: "Golpe que pede senhas no WhatsApp", correct: false },
          { answer: "Golpe que rouba informações do cartão de crédito via telefone", correct: false }
        ]
      },
      {
        question: "O que é 'vishing'?",
        answers: [
          { answer: "Golpe via SMS", correct: false },
          { answer: "Golpe via e-mail", correct: false },
          { answer: "Golpe via telefone", correct: true },
          { answer: "Golpe via redes sociais", correct: false }
        ]
      },
      {
        question: "O que é 'smishing'?",
        answers: [
          { answer: "Golpe via e-mails", correct: false },
          { answer: "Golpe via mensagens de texto", correct: true },
          { answer: "Golpe via telefone", correct: false },
          { answer: "Golpe via redes sociais", correct: false }
        ]
      },
      {
        question: "O que é um golpe de 'falso boleto'?",
        answers: [
          { answer: "Golpe onde o boleto tem dados bancários errados", correct: true },
          { answer: "Golpe onde o boleto tem valor muito alto", correct: false },
          { answer: "Golpe onde o boleto não foi gerado corretamente", correct: false },
          { answer: "Golpe onde o boleto vem com desconto falso", correct: false }
        ]
      },
      {
        question: "Como evitar o golpe de 'phishing'?",
        answers: [
          { answer: "Não clicar em links duvidosos", correct: true },
          { answer: "Responder todos os e-mails de ofertas", correct: false },
          { answer: "Preencher todos os formulários online", correct: false },
          { answer: "Nunca verificar o remetente do e-mail", correct: false }
        ]
      },
      {
        question: "O que caracteriza um 'golpe do falso prêmio'?",
        answers: [
          { answer: "Golpistas enviam mensagem dizendo que você ganhou um prêmio", correct: false },
          { answer: "Golpistas pedem pagamento para liberar um prêmio falso", correct: false },
          { answer: "Golpistas pedem dados bancários para enviar o prêmio", correct: false },
          { answer: "Todos os itens acima", correct: true }
        ]
      },
      {
        question: "O que é um 'site falso de compras'?",
        answers: [
          { answer: "Um site que vende produtos falsificados", correct: false },
          { answer: "Um site que não entrega o produto", correct: false },
          { answer: "Um site que cobra por algo que é grátis", correct: false },
          { answer: "Todos os itens acima", correct: true }
        ]
      },
      {
        question: "Como funciona o 'golpe do falso link'?",
        answers: [
          { answer: "Golpistas criam links falsos que redirecionam para sites maliciosos", correct: true },
          { answer: "Golpistas criam links falsos para roubar senhas de contas", correct: false },
          { answer: "Golpistas criam links falsos para enganar em redes sociais", correct: false },
          { answer: "Todos os itens acima", correct: false }
        ]
      },
      {
        question: "O que caracteriza o 'golpe do falso suporte'?",
        answers: [
          { answer: "Golpistas se passam por técnicos para roubar dados pessoais", correct: true },
          { answer: "Golpistas oferecem suporte de graça", correct: false },
          { answer: "Golpistas cobram valores baixos por serviços", correct: false },
          { answer: "Golpistas nunca pedem dados bancários", correct: false }
        ]
      },
      {
        question: "O que é 'carding'?",
        answers: [
          { answer: "Golpe onde dados de cartões de crédito são usados para fazer compras fraudulentas", correct: true },
          { answer: "Golpe onde se compra produtos de segunda mão", correct: false },
          { answer: "Golpe onde se usa um cartão falso em lojas", correct: false },
          { answer: "Golpe onde se solicita dinheiro por e-mail", correct: false }
        ]
      },
      {
        question: "Como um 'golpe de DDoS' funciona?",
        answers: [
          { answer: "Golpistas atacam um site sobrecarregando-o com tráfego", correct: true },
          { answer: "Golpistas roubam senhas dos usuários", correct: false },
          { answer: "Golpistas sequestram dados bancários", correct: false },
          { answer: "Golpistas pedem informações por telefone", correct: false }
        ]
      },
      {
        question: "O que caracteriza um golpe de 'falsa caridade'?",
        answers: [
          { answer: "Golpistas pedem doações para uma causa falsa", correct: true },
          { answer: "Golpistas vendem produtos falsificados", correct: false },
          { answer: "Golpistas enganam pessoas oferecendo serviços falsos", correct: false },
          { answer: "Golpistas roubam informações pessoais", correct: false }
        ]
      },
      {
        question: "O que é um 'golpe de falso perfil'?",
        answers: [
          { answer: "Golpistas criam perfis falsos para enganar pessoas", correct: true },
          { answer: "Golpistas fazem amigos para pedir dinheiro", correct: false },
          { answer: "Golpistas roubam dados de perfis de redes sociais", correct: false },
          { answer: "Golpistas enganam com ofertas falsas", correct: false }
        ]
      },
      {
        question: "O que é um 'golpe de boleto clonado'?",
        answers: [
          { answer: "Golpistas criam boletos falsos com dados bancários errados", correct: true },
          { answer: "Golpistas criam boletos com preços inflacionados", correct: false },
          { answer: "Golpistas clonam boletos para roubar dinheiro", correct: false },
          { answer: "Golpistas falsificam boletos de empresas reais", correct: false }
        ]
      },
      {
        question: "Como se proteger de golpes online?",
        answers: [
          { answer: "Não clicar em links suspeitos e não compartilhar dados pessoais", correct: true },
          { answer: "Compartilhar todas as informações solicitadas", correct: false },
          { answer: "Baixar programas de fontes desconhecidas", correct: false },
          { answer: "Usar senhas simples", correct: false }
        ]
      },
      {
        question: "O que é 'keylogger'?",
        answers: [
          { answer: "Programa que registra as teclas digitadas pelo usuário", correct: true },
          { answer: "Programa que protege contra vírus", correct: false },
          { answer: "Programa que melhora a performance do computador", correct: false },
          { answer: "Programa que armazena senhas", correct: false }
        ]
      }
    ];

    setQuestions(shuffleArray(fetchedQuestions).slice(0, 10));
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