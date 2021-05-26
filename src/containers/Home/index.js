import { React } from 'react';
import styles from './styles.module.css';
import { Landing } from '../Landing';
import { About } from '../About';
import { Content } from '../Content';
import { Footer } from '../Footer';
import Navbar from '../../components/Navbar';

export const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.landing}>
                <Navbar />
                <Landing />
            </div>
            <div className={styles.about}>
                <About />
            </div>
            <div className={styles.content}>
                <Content />
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
            <div id="hamMenueOverlay" className={styles.parentOverlay}>&nbsp;</div>
        </div>
    )
}