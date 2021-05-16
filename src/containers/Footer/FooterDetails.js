import { react, useState } from 'react';
import styles from './styles.module.css';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

export const FooterDetails = () => {
    return (
        <div className={styles.footerDetailsContainer}>
            <div className={styles.socialHeader}>
                Social Media
            </div>
            <div className={styles.socailLinkContainer}>
                <FaInstagram color="#fff" size="30" className={styles.socailLinkIcon} />
                <FaTwitter color="#fff" size="30" className={styles.socailLinkIcon} />
                <FaLinkedin color="#fff" size="30" className={styles.socailLinkIcon} />
                <FaGithub color="#fff" size="30" className={styles.socailLinkIcon} />
            </div>
            <div className={styles.EmailHeader}>
                Email
            </div>
            <div className={styles.emailIdContianer}>
                <FaRegEnvelope color="#fff" size="30" className={styles.socailLinkIcon} />
                <div className={styles.emailContainer}>prasunk1796@gmail.com</div>
            </div>
        </div>
    )
}