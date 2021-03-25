import { React } from 'react';
import styles from './styles.module.css';
import reactlogo from '../../assets/images/react.svg';
import javascript from '../../assets/images/javascript.svg';
import css from '../../assets/images/css-3.svg';
import python from '../../assets/images/python.svg';
import html from '../../assets/images/html-5.svg';
import bootstrap from '../../assets/images/bootstrap.svg';
import materialui from '../../assets/images/material-ui.svg';
import reactrouter from '../../assets/images/react-router.svg';
// import cplus from '../../assets/images/c-plusplus.svg';

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
            <div className={styles.seperatorDiv}>&nbsp;</div>
            <div className={styles.stackContainer}>
                <div className={styles.imageGrid}>
                    <div className={styles.imageContainer}>
                        <img src={reactlogo} alt="reactjs" />
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={python} alt="python" />
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={reactrouter} alt="reactrouter" />
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={html} alt="html" />
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={javascript} alt="javascript" />
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={css} alt="css" />
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={bootstrap} alt="bootstrap" />
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={materialui} alt="materialui" />
                    </div>
                </div>
            </div>
        </div>
    )
}