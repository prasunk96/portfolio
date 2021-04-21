import { React } from 'react';
import styles from './styles.module.css';
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";

const CardButton = () => {
    return (
    <div>
        <FaExternalLinkSquareAlt className={styles.buttonPrimary} />
        <FaGithub className={styles.buttonPrimary} />
    </div>
    )
}

export default CardButton;