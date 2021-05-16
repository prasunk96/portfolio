import { React } from 'react';
import styles from './styles.module.css';
import { Landing } from '../Landing';
import { About } from '../About';
import { Content } from '../Content';
import { Footer } from '../Footer';

export const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Landing />
            <div className={styles.about}>
                <About />
            </div>
            <div className={styles.content}>
                <Content />
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}