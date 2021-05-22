import { react } from 'react';
import styles from './styles.module.css';
import { FooterForm } from './FooterForm';
import { FooterDetails } from './FooterDetails';
import { FooterNote } from './FooterNote';

export const Footer = () => {
    return (
        <div className={styles.footerWraper}>
            <div className={styles.customShapeDividerBottomFooter}>
                <svg data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFillFooter}></path>
                </svg>
            </div>
            <div className={styles.footerContainer}>
                <div className={styles.footerLeftContainer}>
                    <FooterDetails />
                </div>
                <div className={styles.footerRightContainer}>
                    <FooterForm />
                </div>
                <div className={styles.footerNoteContainer}>
                    <FooterNote />
                </div>
            </div>
        </div>
    )
};