import { react } from 'react';
import styles from './styles.module.css';
import { FooterForm } from './FooterForm';
import { FooterDetails } from './FooterDetails';
import { FooterNote } from './FooterNote';

export const Footer = () => {
    return (
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
    )
};