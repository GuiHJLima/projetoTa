import Header from "./components/header/header";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.background}>
        <Header />
        <h1 className={styles.title}>Golpes na Internet</h1>
    <div className={styles.card}>
      <img src="/golpe.jpg" className={styles.imagem}/>
      
      <div className={styles.square}>

        <h2>Texto Informativo</h2>
      </div>
    </div>
    </div>
  );
}
