import React from 'react';
import './styles.css';
import { FaPaperPlane } from 'react-icons/fa';

export const Button = ({ icon, label, mailTo }) => {
    return (
        <button className="button">
            {<a href={`mailto:${mailTo}`}>{icon === 'send' ? <span className="buttonIcon"><FaPaperPlane size="18" /></span> : null}
            <span className="buttonLable">{label}</span></a>}
        </button>
    );
}