import React from 'react';
import styles from './styles.module.css';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import '../../globalStyles.css';

export const FooterDetails = () => {
    return (
        <div className={styles.footerDetailsContainer}>
            <div className={styles.socailLinkContainer}>
                <a className={`animationElement fadeInFromBottom`} style={{animationDelay: '200ms'}} href="https://www.instagram.com/official_prasun" rel="noopener noreferrer" target="_blank" alias="instagram"><FaInstagram cursor="pointer" size="30" className={styles.socailLinkIcon} /></a>
                <a className={`animationElement fadeInFromBottom`} style={{animationDelay: '300ms'}} href="https://www.linkedin.com/in/prasunk1796" rel="noopener noreferrer" target="_blank" alias="linkedin"><FaLinkedin size="30" className={styles.socailLinkIcon}/></a>
                <a className={`animationElement fadeInFromBottom`} style={{animationDelay: '400ms'}} href="https://github.com/prasunk96" rel="noopener noreferrer" target="_blank" alias="github"><FaGithub size="30" className={styles.socailLinkIcon}/></a>
                <a className={`animationElement fadeInFromBottom`} style={{animationDelay: '500ms'}} href="https://twitter.com/_prasun_" rel="noopener noreferrer" target="_blank" alias="twitter"><FaTwitter size="30" className={styles.socailLinkIcon}/></a>
            </div>
            <div className={styles.emailIdContianer}>
                <a className={`animationElement fadeInFromBottom`} style={{animationDelay: '600ms'}} href="mailto:prasunk1796@gmail.com" rel="noopener noreferrer" target="_blank" alias="email">
                    <div className={styles.emailContainer}>prasunk1796@gmail.com</div>
                </a>
            </div>
        </div>
    )
}