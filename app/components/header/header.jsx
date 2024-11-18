'use client';
import styles from './page.module.css';
const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.logoContainer}>
            <h1>Header</h1>
            </div>
            <div className={styles.searchContainer}>
            <span>Home</span>
            <span>Noticias</span>
            <span>Home</span>
            <span>Noticias</span>
            </div>
        </header>
    );
}
export default Header;