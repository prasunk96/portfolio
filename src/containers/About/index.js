import { React } from 'react';
import styles from './styles.module.css';
import { IconCard } from './IconCard';
import { FaReact, FaPython, FaVuejs, FaJs, FaCss3, FaHtml5, FaBootstrap } from "react-icons/fa";


export const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutSection}>
                <div className={styles.aboutHeaderContainer}>
                    <div className={styles.aboutHeader}>
                        About Me
                    </div>
                </div>
                <div className={styles.aboutText}>
                    <p className={styles.paragraphStyle}>
                        Hi,
                        My Name is <b>Prasun</b> and i enjoy creating stuff that live on internet. My Interest in web development started back when i was
                        in high school when i learnt how to use marquee in html and since then this has been a journey of continious learning and improvements.
                    </p>
                    <p  className={styles.paragraphStyle}>    
                        Fast-forward to today, I completed my bachelors in Computer Science and currently working as a Software Engineer at <a href="https://www.gslab.com/" rel="noopener noreferrer" target="_blank" alias="gslab">GSLab</a>. I have had the priveledge
                        to work on enterprise level applications such as campaign managment tool for organizations, creating a digital workspace environment that organizes,
                        automates and unifies work.
                    </p>
                    <p  className={styles.paragraphStyle}>    
                        Here are few of the teachnologies that i have been working with recently:
                    </p>
                    <ul class={styles.skillsList}>
                        <li>JavaScript (ES6+)</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Vue</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div>
            {/* <div className={styles.stackContainer}>
                <div className={styles.imageGrid}>
                    <IconCard proficiency={'90%'}>{<FaReact color="#fff" size="30" className={styles.techIcons}/>}</IconCard>
                    <IconCard proficiency={'60%'}>{<FaPython color="#fff" size="30" className={styles.techIcons}/>}</IconCard>
                    <IconCard proficiency={'60%'}>{<FaVuejs color="#fff" size="30" className={styles.techIcons}/>}</IconCard>
                    <IconCard proficiency={'85%'}>{<FaJs color="#fff" size="30" className={styles.techIcons}/>}</IconCard>
                    <IconCard proficiency={'60%'}>{<FaCss3 color="#fff" size="30" className={styles.techIcons}/>}</IconCard>
                    <IconCard proficiency={'90%'}>{<FaHtml5 color="#fff" size="30" className={styles.techIcons}/>}</IconCard>
                    <IconCard proficiency={'75%'}>{<FaBootstrap color="#fff" size="30" className={styles.techIcons}/>}</IconCard>
                </div>
            </div> */}
        </div>
    )
}