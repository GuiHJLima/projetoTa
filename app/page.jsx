"use client";
import Header from "./components/header/header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.background}>
      <Header />
      <h1 className={styles.title}>
        PARCERIA SESI - SENAI - Educação, Conscientização e Prevenção contra
        Golpes Virtuais.
      </h1>

      <div className={styles.card}>
        <img
          src="/young-woman-holding-black-smartphone.jpg"
          alt="Golpes na Internet"
          className={styles.imagem}
        />

        <div className={styles.card2}>
          <h2>Entenda os Principais Golpes Virtuais</h2>

          <p className={styles.texto1}>
            {" "}
            EDUCAÇÃO E CONSCIENTIZAÇÃO SOBRE O USO DA INTERNET COM SEGURANÇA,
            APRENDENDO MECANISMOS PARA CONQUISTAR PROTEÇÃO E SEGURANÇA ONLINE.{" "}
          </p>

          <div className={styles.titulo}>
            <p className={styles.texto}>
              “Para nossa família (Pais, Tios, Avôs), amigos e pessoas que tem
              pouco conhecimento sobre a era digital, por todo gesto de carinho
              e cuidado conosco, um amor que nunca acaba”
            </p>
          </div>
          <p className={styles.text}>
            “Eu, tu, ele, ela, nós, vós, sejamos aquilo que somos, pessoas que
            buscam o belo, o bem e sempre o que é justo, no mundo real e no
            virtual. Vamos trilhar o caminho da virtude e da integridade ética.
            Não vamos ser como aqueles que ficam atravancando o caminho das
            pessoas de bem, pois como já disse o poeta, os que atravancam os
            caminhos passarão e nos, passarinho, livre e com as mãos cheias,
            maravilhado com a mente cheia de saberes, ensinado, aprendendo e
            partilhando com humildade e bondade no olhar”. (NEVES, Nivaldo F. Um
            olhar de ternura na arte de ensinar e aprender – 2024/11/28)
          </p>
          <p className={styles.text}>
            Com alegria e satisfação que recebemos sua visita em nosso site de
            “Educação, Conscientização e Prevenção Contra Golpes Virtuais”. Esse
            projeto de tecnologia é fruto de uma parceria SESI & SENAI
            (Valinhos). Na era digital, a segurança online é fundamental,
            sabemos que cada vez mais os golpistas utilizam técnicas
            sofisticadas para enganar e roubar informações pessoais e
            financeiras. Existem inúmeras tentativas de roubo de dados pessoais,
            fraudes em compras online, entre outras estratégias de pessoas mal-
            intencionadas, que usam o conhecimento tecnológico de maneira
            depreciativa para prejudicar a reputação e a tranquilidade de
            pessoas e instituições. É importante estar sempre atento para não
            cair nessa rede de malfeitores.{" "}
          </p>
          <p className={styles.text}>
            Enfim, temos que ter consciência que a internet é um espaço de busca
            de conhecimentos para todos, mas infelizmente nem todos têm boas
            intenções. E, nessa dimensão que o nosso projeto de Ética e
            Tecnologia em parceria com SENAI nasce para educar e conscientizar
            pessoas navegar segurança, pois a educação é a melhor arma contra os
            golpes online.
          </p>

          <p className={styles.text}>
            {" "}
            Por fim, quero registrar que esse projeto de tecnologia é motivo de
            orgulho e dedicação de estudantes do Tópico Avançado Ética, relações
            humanas e tecnologias da Rede SESI- SP com o apoio incrível do
            Professor Thiago Ferreira, do Professor Marcelo Carboni (SENAI de
            Valinhos) e com apoio de ambas as coordenadoras escolares (Daniele
            Bicalho – SESI) e (Luciana C. Bugatte – SENAI).
          </p>
          <p className={styles.text}>
          A união de docentes do SENAI e do SESI em parceria com os estudantes,
tornou possível a criatividade e a dedicação de cada membro para superar os
desafios para ter esse material de consulta simples, mas de uma forma de fácil
acesso para todas as pessoas, especialmente, para as pessoas da melhor e

maravilhosa idade.
Vamos partilhar esse site e espalhar essa corrente de bem e ética com as
pessoas que conhecemos.
          </p>
        </div>
      </div>
      <div className={styles.newsSection}>
        <h2>Últimas Notícias</h2>
        <ul>
          <li>
            <a href="https://faq.whatsapp.com/2286952358121083/?locale=pt_BR">
              {" "}
              <strong>Golpe do WhatsApp: Como se proteger</strong>{" "}
            </a>
            <p>
              Saiba como identificar e evitar fraudes que utilizam o WhatsApp
              como ferramenta.
            </p>
          </li>
          <li>
            <a href="https://www.serasa.com.br/premium/blog/phishing-confira-dicas-para-identificar-email-falso/">
              {" "}
              <strong>Cuidado com E-mails Falsos</strong>{" "}
            </a>
            <p>
              Aprenda a detectar e-mails fraudulentos que tentam enganar os
              usuários.
            </p>
          </li>
          <li>
            <a href="https://cndl.org.br/varejosa/golpes-em-compras-online-somaram-prejuizo-de-530-milhoes-de-reais/#:~:text=Golpes%20em%20compras%20online%20somaram%20preju%C3%ADzo%20de%20530%20milh%C3%B5es%20de%20reais,-Netmak%20lan%C3%A7a%20campanha&text=No%20ano%20de%202023%2C%20a,online%20atingiu%20um%20n%C3%BAmero%20alarmante.">
              <strong>Fraudes em Compras Online Crescem</strong>
            </a>
            <p>
              Está havendo aumento significativo de fraudes em plataformas de
              e-commerce.
            </p>
          </li>
          <li>
            <a href="https://www.cnnbrasil.com.br/saude/bets-e-jogos-de-azar-quando-apostar-pode-se-tornar-um-vicio/#:~:text=A%20natureza%20an%C3%B4nima%20das%20apostas,depend%C3%AAncia%2C%20na%20vis%C3%A3o%20da%20especialista.">
              <strong>Os perigos dos jogos de aposta online </strong>
            </a>
            <p>O aumento dos jogos de azar na internet.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
