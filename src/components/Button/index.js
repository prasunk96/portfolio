import { react } from 'react';
import Styles from './styles.css';
import { FaPaperPlane } from 'react-icons/fa';

export const Button = ({ icon, label }) => {
    return (
        <button class="button">
            {icon === 'send' ? <span className="buttonIcon"><FaPaperPlane size="18" /></span> : null}
            <span className="buttonLable">{label}</span>
        </button>
    );
}