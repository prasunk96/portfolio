import React from 'react';
import styles from './styles.module.css';
import '../../globalStyles.css';
import { Button } from '../../components/Button';

export const Landing = ({ isNavbarLoaded }) => {
    return (
        <div className={styles.landingContainer} id="landingContainer">
            <div className={styles.landingTitle}>
                <div className={`${styles.landingText} animationElement fadeInFromBottom`} style={{animationDelay: '800ms'}}>
                    <h1>Hi, my name is,</h1>
                </div>
                <div className={`${styles.landingText} animationElement fadeInFromBottom`} style={{animationDelay: '900ms'}}>
                    <h2 className={styles.name}>Prasun.</h2>
                </div>
                <div className={`${styles.landingText} animationElement fadeInFromBottom`} style={{animationDelay: '1000ms'}}>
                    <h3>I develop things for web.</h3>
                </div>
                <div className={`${styles.metaLine} animationElement fadeInFromBottom`} style={{animationDelay: '1100ms'}}>
                    <h1>Front End Developer / Web Developer</h1>
                </div>
                <div className={`${styles.resumeButtonContainer} animationElement fadeInFromBottom`} style={{animationDelay: '1100ms'}}>
                    <Button label={'Resume'} mailTo={null} link={'https://drive.google.com/file/d/1h6ywy2N3SGmnMy8Zvhkp1fbmUyzbYTpL/view?usp=sharing'}></Button>
                </div>
            </div>
            <div className={styles.customShapeDividerBottom}>
                <svg data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shapeFill}></path>
                </svg>
            </div>
        </div>
    )
}