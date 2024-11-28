'use client';
import React, { useState } from 'react';
import styles from './page.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </div>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.closeButton} onClick={toggleMenu}>
          ✖
        </div>
        <nav className={styles.nav}>
          <a href="./" className={styles.navItem}>Home</a>
          <a href="./quiz" className={styles.navItem}>Quiz</a>
          <a href="./Artigos" className={styles.navItem}>Artigos</a> 
        </nav>
      </div>
      <div className={styles.title}>
        <a href='./'> 
        <img className={styles.titulo} src='/logo.png' alt='Logo' width={100} height={100} />
        </a>
      </div>
    </header>
  );
};

export default Header;