'use client';
import Header from "./components/header/header";
import style from "./page.module.css";
export default function Home() {
  return (
    <div>
      <Header />
      <h1 className={style.title}>PARCERIA SESI - SENAI - Educação, Conscientização e Prevenção contra Golpes Virtuais.</h1>
      <p className={style.text}>
      Com alegria e satisfação que recebemos sua visita em nosso site de Proteção contra Golpes Virtuais de parece SESI - SENAI que tem como objetivo essencial promover a educação, conscientização e prevenção contra golpes virtuais,



Na era digital, a segurança online é fundamental. Cada vez mais, os golpistas utilizam técnicas sofisticadas para enganar e roubar informações pessoais e financeiras.
</p>
    </div>
  );
}
