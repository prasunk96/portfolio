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
import { IconCard } from './IconCard';
// import cplus from '../../assets/images/c-plusplus.svg';

export const About = () => {
    return (
        <div className={styles.aboutContainer}>
            {/* <div className={styles.aboutSection}>
                <div className={styles.aboutText}>
                    <p className={styles.paragraphStyle}>
                        Hi,
                        I am <b>Prasun</b>, I am a <b>software Engineer</b>. I have completed my graduation in <b>Bachelor of Technology in Computer Science</b>.
                        My Major experience is in front-end development and i expertise in <b>ReactJS</b>, <b>JavaScript</b>.
                    </p>
                </div>
            </div> */}
            <div className={styles.seperatorDiv}>&nbsp;</div>
            <div className={styles.stackContainer}>
                <div className={styles.imageGrid}>
                    <IconCard logo={reactlogo} alt={'ReactJS'} proficiency={100} experience={2} />
                    <IconCard logo={python} alt={'Python'} proficiency={50} experience={0} />
                    <IconCard logo={reactrouter} alt={'React-Router'} proficiency={80} experience={1} />
                    <IconCard logo={html} alt={'HTML'} proficiency={100} experience={2} />
                    <IconCard logo={css} alt={'CSS'} proficiency={80} experience={2} />
                    <IconCard logo={bootstrap} alt={'Bootstrap'} proficiency={80} experience={1} />
                    <IconCard logo={materialui} alt={'MaterialUI'} proficiency={60} experience={0} />
                </div>
            </div>
        </div>
    )
}