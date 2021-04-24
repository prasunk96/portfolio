import { react } from 'react';
import styles from './styles.module.css';
import { FooterForm } from './FooterForm';

export const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerLeftContainer}>
                left
            </div>
            <div className={styles.footerRightContainer}>
                <FooterForm />
            </div>
        </div>
    )
};