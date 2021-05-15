import { React } from 'react';
import styles from './styles.module.css';
import profileImage from '../../assets/images/profileImage.jpg';
import { HamMenu } from '../../components/HamburgerMenu';

export const Landing = () => {
    return (
        <div className={styles.landing}>
            <HamMenu />
            <div className={styles.landingTitle}>
                <div className={styles.landingText}>Hi,</div>
                <div className={styles.landingText}>
                    <div className={styles.subText}>I'm</div>
                    &nbsp;
                    <div className={styles.name}>Prasun,</div>
                </div>
                <div className={styles.landingText}>Web Developer</div>
                <div className={styles.metaLine}>Front End Developer / Web Developer</div>
            </div>
            <div className={styles.floatingShapesOne}></div>
            <div className={styles.floatingShapesTwo}></div>
            <div className={styles.customShapeDividerBottom}>
                <svg data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shapeFill}></path>
                </svg>
            </div>
            <div className={styles.profileImageContianer}>
                <div className={styles.profileImage}>
                    <img alt="profileImage" src={profileImage} className={styles.profileImageTag} />
                </div>
            </div>
        </div>
    )
}