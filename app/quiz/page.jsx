import Header from '../components/header/header'
import style from './page.module.css'

export default function Quiz() {
    return (
      <div className={style.container}>
        <Header/>
        <div className={style.card}>
            <h1 className={style.title}>Quiz</h1>
            <p className={style.info}>Aqui você consegue achar perguntas sobre as matérias lidas.</p>
            <p className={style.info}>Clique no botão abaixo pra iniciar o quiz.</p>
            <button className={style.button}>Start Quiz</button>
        </div>
      </div>
    )
  }