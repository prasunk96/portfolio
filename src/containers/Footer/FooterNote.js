import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import styles from './styles.module.css';

export const FooterNote = () => {
    return (
        <div className={styles.footerCopyRight}>
            <FaRegCopyright color="#6d6d6d" size="10" className={styles.copyRrightIcon} />
            Designed & build by Prasun Kumar
        </div>
    )
};