"use client";
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Header from '../components/header/header';

function Articles() {
        return (
            <div className={styles.container}>
                <Header />
                <div className={styles.card}>
                <h1 className={styles.titulo}>Artigos Diversificados para Educação e Conscientização Contra Golpes Virtuais</h1>
                <p className={styles.subtitulo}>Essa é uma contribuição da turma de Tópicos Avançados de Ética, Relações Humanas e Tecnologias, com a intenção primordial de ajudar na divulgação de informação e conhecimento sobre a preservação e segurança de navegar em sites com tranquilidade sem correr o risco de cair em golpes virtuais. A ideia desse site em parceria entre o SESI e SENAI VALINHOS e alunos deste T.A é colaborar com ferramentas éticas e do bem contra criminosos virtuais que estão cada vez criando estratégias para tirar a tranquilidade financeira e emocional das pessoas, em especial, pessoas da melhor e boa idade. Uma dica incrível e sempre atual, quando tiver dúvida sobre qualquer site clandestino, sms com mensagem estranha, e-mail de remetente desconhecido ou ligação que não está na sua rede de contato, é melhor não atender. Portanto, procure alguém da família para ajudar você!</p>
                </div>
                <div className={styles.card}>
                    <h1>Engenharia social</h1>
                    <p className={styles.subtitulo}>A final o que seria engenharia social? A engenharia social é uma técnica que envolve manipulação psicológica para enganar indivíduos e levá-los a revelar informações confidenciais ou a realizar ações que podem comprometer a segurança. Essa prática é frequentemente utilizada em cibercrimes, mas também pode ocorrer em contextos não digitais. Aqui está uma pesquisa centralizada</p>
                    <p className={styles.subtitulo}>A engenharia social explora o comportamento humano para obter informações ou acesso a sistemas, manipulando pessoas em vez de atacar diretamente sistemas de segurança. Técnicas comuns incluem phishing, pretexting, baiting e tailgating, com motivações que vão desde roubo de identidade até espionagem. As consequências podem incluir perdas financeiras, exposição de dados e impactos legais.

Para prevenir, é essencial investir em educação, políticas de segurança, autenticação multifator e simulações de ataques. Conscientização e cultura de segurança são fundamentais para mitigar riscos e navegar de forma segura na era digital.</p>
                    </div>
                    <div className={styles.card}>
                    <h1 className={styles.titulo}>Golpe do 'PIX errado': saiba como os criminosos agem e como não ser enganado</h1>
                        <p className={styles.subtitulo}>
                            <a href="https://g1.globo.com/economia/noticia/2024/07/12/golpe-do-pix-errado-saiba-como-os-criminosos-agem-e-como-nao-ser-enganado.ghtml"> 
                            <strong>Link para a matéria completa</strong>
                            </a>
Neste link do g1 você vai conhecer como é o golpe do Pix errado e como você não deve ser enganado. O conhecimento verdadeiro pode nos trazer tranquilidade em todos os sentidos da nossa vida. Fique sempre alerta.
</p>
                        </div>
                        <div className={styles.card}>
                        <h1 className={styles.titulo}>Golpes no Brasil</h1>
                            <p className={styles.subtitulo}>“Na primeira metade de 2024 o Brasil registrou mais de 1 milhão de tentativas de fraude totalizando R$ 1,2 bilhão, segundo estudo da ClearSale, empresa de inteligência de dados para prevenção deste tipo de crime, a maioria das tentativas de fraude no e-commerce brasileiro acontece através do roubo de dados, de conta e senhas. Os fraudadores precisam de informações, na maior parte dos golpes de cartão de crédito, para conseguir efetivar uma compra em nome de outra pessoa”
Grupo mais afetado: O grupo mais afetado pelos golpes foram os millennials, que engloba pessoas nascidas entre 1980 a 1995.
Como se proteger?
</p>
<p className={styles.subtitulo}>1. Não clique em links desconhecidos;</p>

<p className={styles.subtitulo}>2. Ative a configuração em duas etapas para acessar redes sociais, aplicativos e e-mails;</p>
<p className={styles.subtitulo}>3. Crie senhas fortes, evite sequências de números e datas comemorativas. Atualize-as sempre;</p>
<p className={styles.subtitulo}>4. Para qualquer pedido de ajuda financeira de conhecidos, ligue para a pessoa, faça um vídeo chamada e confirme se é um pedido real;</p>

                            </div>
<div className={styles.card}>
<h1 className={styles.titulo}>TV Cultura. Criminosos aproveitam mecanismo de devolução do PIX para aplicar novo golpe. Disponível em: </h1>
<a href="https://www.youtube.com/watch?v=UGxhFNDNxwg">
<p className={styles.subtitulo}>https://www.youtube.com/watch?v=UGxhFNDNxwg</p>
</a>
</div>
<div className={styles.card}>
<h1 className={styles.titulo}>O que é deepfake? Conheça exemplos e entenda os riscos dessa tecnologia. Disponível em: </h1>
    <a href="https://tecnoblog.net/responde/o-que-e-deep-fake-e-porque-voce-deveria-se-preocupar-com-isso/">
    <p className={styles.subtitulo}>https://tecnoblog.net/responde/o-que-e-deep-fake-e-porque-voce-deveria-se-preocupar-com-isso/</p>
    </a>
    <p className={styles.subtitulo}>Nesse link da tecnoblog você ficará sabendo sobre deepfakes que são feitas por pessoas mal-intencionadas, que manipulam fotos, vídeos e áudios, que não utilizam de forma ética tecnologia e acabam trazendo inúmeros problemas para reputação de pessoas, instituições e grupos sociais. Traduzindo livremente o termo “deepfakes”: profundamente falso.</p>
    </div>
        <div className={styles.card}>
            <h1 className={styles.titulo}>FURUYA, Bob & CAPOZZI, Bruno. Criminosos podem usar QR Codes de embalagens para roubar seus dados; saiba como se proteger. Disponível em: </h1>
            <a href="https://olhardigital.com.br/2024/04/04/seguranca/criminosos-podem-usar-qr-codes-de-embalagens-para-roubar-seus-dados-saiba-como-se-proteger">
            <p className={styles.subtitulo}>https://olhardigital.com.br/2024/04/04/seguranca/criminosos-podem-usar-qr-codes-de-embalagens-para-roubar-seus-dados-saiba-como-se-proteger</p>
            </a>
            <p className={styles.subtitulo}>Neste link você vai ficar sabendo como os bandidos podem extrair informações pessoais do comprador a partir dessas etiquetas; especialistas recomendam cuidado ao jogar o lixo fora.</p>
            </div>
            <div className={styles.card}>
            <h1 className={styles.titulo}>Serpro ensina como proteger os dados contra golpes na internet. Disponível em: </h1>
                <a href="https://www.serpro.gov.br/menu/noticias/noticias-2021/protecao-dados-phishing">
                <p className={styles.subtitulo}>https://www.serpro.gov.br/menu/noticias/noticias-2021/protecao-dados-phishing</p>
                </a>
                <p className={styles.subtitulo}>Aqui nesse site você aprender como ter segurança online e assim não cair em golpes virtuais. Na dúvida, procure informação com alguém da família.</p>
                </div>
                <div className={styles.card}>
                <h1 className={styles.titulo}>UOL CANAL. Golpes do WhatsApp: Como os bandidos sabem tanto sobre você. Disponível em:</h1>
                    <a href="https://www.youtube.com/watch?v=DZXmpbr13a0">
                    <p className={styles.subtitulo}>https://www.youtube.com/watch?v=DZXmpbr13a0</p>
                    </a>
                    <p className={styles.subtitulo}>Síntese do vídeo educativo: Basta seu nome ou número de telefone. Com esse naco de informação, é possível saber onde você mora, seu CPF, sua renda, seus parentes, se você é bom pagador e até achar fotos suas na internet. Tudo numa tela só. Essas informações são reunidas no que se convencionou chamar de "painel de dados", um site que é a origem de boa parte dos golpes virtuais -- a modalidade de crime que mais cresce no Brasil.</p>
                    </div>
            </div>
        );
    }


export default Articles;