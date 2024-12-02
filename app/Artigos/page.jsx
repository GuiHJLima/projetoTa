"use client";
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Header from '../components/header/header';

function Articles() {
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [foto, setFoto] = useState('');
    const [video, setVideo] = useState('');
    const [autor, setAutor] = useState('');
    const [data_publicacao, setData_publicacao] = useState('');

    const handleSubmit = (e) => {
            setTitulo('');
            setConteudo('');
            setFoto('');
            setVideo('');
            setAutor('');
            setData_publicacao('');
    };
        return (
            <div className={styles.container}>
                <Header />

                <div className={styles.titulo}>
                    <h1 className={styles.titulos}>Artigos</h1>
                </div>
                    <div className={styles.CadastroCard}>
                    <form onSubmit={handleSubmit} className={styles.Inputs}>
                            <input type="text"
                                placeholder="Titulo"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                className={styles.Input}
                            />
                            <input type="text"
                                placeholder="conteudo"
                                value={conteudo}
                                onChange={(e) => setConteudo(e.target.value)}
                                className={styles.Input}
                            />
                            <input type="text"
                                placeholder="Foto"
                                value={foto}
                                onChange={(e) => setFoto(e.target.value)}
                                className={styles.Input}
                            />
                            <input type="text"
                                placeholder="Vídeo"
                                value={video}
                                onChange={(e) => setVideo(e.target.value)}
                                className={styles.Input}
                            />
                            <input type="text"
                                placeholder="Autor"
                                value={autor}
                                onChange={(e) => setAutor(e.target.value)}
                                className={styles.Input}
                            />
                            <input type="date"
                                placeholder="Data de Publicação"
                                value={data_publicacao}
                                onChange={(e) => setData_publicacao(e.target.value)}
                                className={styles.Input}
                            />
                        
                        <div className={styles.Button}>
                            <button type='submit' className={styles.btn}>Publicar</button>
                        </div>
                        </form>
                    </div>
            </div>
        );
    }


export default Articles;