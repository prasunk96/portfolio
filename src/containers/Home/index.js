import { React, useState } from 'react';
import styles from './styles.module.css';
import { Landing } from '../Landing';
import { About } from '../About';
import { Content } from '../Content';
import { Footer } from '../Footer';
import Navbar from '../../components/Navbar';

export const Home = () => {
    const [isNavbarLoaded, setIsNavbarLoaded] = useState(false);
    return (
        <div className={styles.homeContainer}>
            <div id="landing" className={styles.landing}>
                <Navbar setIsNavbarLoaded={setIsNavbarLoaded} />
                <Landing isNavbarLoaded={isNavbarLoaded} />
            </div>
            <div id="about" className={styles.about}>
                <About />
            </div>
            <div id="work" className={styles.content}>
                <Content />
            </div>
            <div id="contact" className={styles.footer}>
                <Footer />
            </div>
            <div id="hamMenueOverlay" className={styles.parentOverlay}>&nbsp;</div>
        </div>
    )
}