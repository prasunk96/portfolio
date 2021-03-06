import React from 'react';
import styles from './styles.module.css';
import me from '../../assets/images/me.avif';
import '../../globalStyles.css';


export const About = () => {
    return (
        <div className={`${styles.aboutContainer}  animationElement fadeInFromBottom`} style={{animationDelay: '200ms'}}>
            <div className={styles.aboutHeaderContainer} >
                <div className={styles.aboutHeader}>
                    <h2>About Me</h2>
                </div>
            </div>
            <div className={styles.aboutSection}>
                <div className={styles.aboutText}>
                    <p className={styles.paragraphStyle}>
                        Hi,
                        My Name is <b>Prasun</b> and i enjoy creating stuff that live on internet. My Interest in web development started back when i was
                        in high school when i learnt how to use marquee in html and since then this has been a journey of continious learning and improvements.
                    </p>
                    <p className={styles.paragraphStyle}>
                        Fast-forward to today, I completed my bachelors in Computer Science and currently working as a Software Engineer at <a href="https://www.gslab.com/" rel="noopener noreferrer" target="_blank" alias="gslab">GSLab</a>. I have had the priveledge
                        to work on enterprise level applications such as campaign managment tool for organizations, creating a digital workspace environment that organizes,
                        automates and unifies work.
                    </p>
                    <p className={styles.paragraphStyle}>
                        Here are few of the teachnologies that i have been working with recently:
                    </p>
                    <ul className={styles.skillsList}>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Vue</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div className={styles.stackContainer}>
                    <div className={styles.imageGrid}>
                        <img src={me} data-main-image alt="ProfileImage" height="500" width="500" decoding="async" size="(min-width: 500px) 500px, 100vw" />
                    </div>
                </div>
            </div>
        </div>
    )
}