import Header from "./components/header/header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.background}>
      <Header />
      <h1 className={styles.title}>Golpes na Internet</h1>
      
      <div className={styles.card}>
        <img src="/young-woman-holding-black-smartphone.jpg" alt="Golpes na Internet" className={styles.imagem} />
        
        <div className={styles.card2}>
          <h2>Entenda os Principais Golpes Virtuais</h2>
          <p> Atualmente, os golpes na inernet estão ficando cada vez mais comuns. Tentativas de roubo de dados pessoais até fraudes em compras online. É importante estar sempre atento e informado.</p>
        </div>
      
    

      <div className={styles.newsSection}>
        <h2>Últimas Notícias</h2>
        <ul>
          <li>
           <a href= "https://faq.whatsapp.com/2286952358121083/?locale=pt_BR"> <strong>Golpe do WhatsApp: Como se proteger</strong> </a>
            <p>Saiba como identificar e evitar fraudes que utilizam o WhatsApp como ferramenta.</p>
          </li>
          <li>
           <a href="https://www.serasa.com.br/premium/blog/phishing-confira-dicas-para-identificar-email-falso/"> <strong>Cuidado com E-mails Falsos</strong> </a>
            <p>Aprenda a detectar e-mails fraudulentos que tentam enganar os usuários.</p>
          </li>
          <li>
            <a href="https://cndl.org.br/varejosa/golpes-em-compras-online-somaram-prejuizo-de-530-milhoes-de-reais/#:~:text=Golpes%20em%20compras%20online%20somaram%20preju%C3%ADzo%20de%20530%20milh%C3%B5es%20de%20reais,-Netmak%20lan%C3%A7a%20campanha&text=No%20ano%20de%202023%2C%20a,online%20atingiu%20um%20n%C3%BAmero%20alarmante."><strong>Fraudes em Compras Online Crescem</strong></a>
            <p>Está havendo aumento significativo de fraudes em plataformas de e-commerce.</p>
          </li>
          <li>
            <a href="https://www.cnnbrasil.com.br/saude/bets-e-jogos-de-azar-quando-apostar-pode-se-tornar-um-vicio/#:~:text=A%20natureza%20an%C3%B4nima%20das%20apostas,depend%C3%AAncia%2C%20na%20vis%C3%A3o%20da%20especialista."><strong>os perigos do jogos de aposta online </strong></a>
            <p>o aumento dos jogos de azar e seus apostadores saiba os riscos </p>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}