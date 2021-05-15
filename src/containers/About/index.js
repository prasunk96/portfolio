import { React } from 'react';
import styles from './styles.module.css';
import { IconCard } from './IconCard';
import { FaReact, FaPython, FaVuejs, FaJs, FaCss3, FaHtml5, FaBootstrap } from "react-icons/fa";


export const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutSection}>
                <div className={styles.aboutText}>
                    <p className={styles.paragraphStyle}>
                        Hi,
                        I am <b>Prasun</b>, I am a <b>software Engineer</b>. I have completed my graduation in <b>Bachelor of Technology in Computer Science</b>.
                        My Major experience is in front-end development and i expertise in <b>ReactJS</b>, <b>JavaScript</b>.
                    </p>
                </div>
            </div>
            <div className={styles.stackContainer}>
                <div className={styles.imageGrid}>
                    <IconCard proficiency={'90%'}>{<FaReact color="#fff" size="30" className={styles.techIcons}/>}</IconCard>
                    <IconCard proficiency={'60%'}>{<FaPython color="#fff" size="30" className={styles.techIcons}/>}</IconCard>
                    <IconCard proficiency={'60%'}>{<FaVuejs color="#fff" size="30" className={styles.techIcons}/>}</IconCard>
                    <IconCard proficiency={'85%'}>{<FaJs color="#fff" size="30" className={styles.techIcons}/>}</IconCard>
                    <IconCard proficiency={'60%'}>{<FaCss3 color="#fff" size="30" className={styles.techIcons}/>}</IconCard>
                    <IconCard proficiency={'90%'}>{<FaHtml5 color="#fff" size="30" className={styles.techIcons}/>}</IconCard>
                    <IconCard proficiency={'75%'}>{<FaBootstrap color="#fff" size="30" className={styles.techIcons}/>}</IconCard>
                </div>
            </div>
        </div>
    )
}