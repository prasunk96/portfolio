import React from 'react';
import './styles.css';
import { FaPaperPlane } from 'react-icons/fa';

export const Button = ({ icon, label, mailTo, link }) => {
    return (
            mailTo !== null ? <a className="buttonAnchor" href={`mailto:${mailTo}`} rel="noopener noreferrer" target="_blank">{icon === 'send' ? <span className="buttonIcon"><FaPaperPlane size="18" /></span> : null}
                <button className="button">
                    <span className="buttonLable">{label}</span>
                </button>
            </a>
            : <a className="buttonAnchor" href={link} rel="noopener noreferrer" target="_blank">{icon === 'send' ? <span className="buttonIcon"><FaPaperPlane size="18" /></span> : null}
                <button className="button">
                    <span className="buttonLable">{label}</span>
                </button>
            </a>
    );
}