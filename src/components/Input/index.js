import { react, useState } from 'react';
import styles from './styles.css';

export const Input = ({name, value, onChange, type}) => {
    const [isActive, setIsActive] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        onChange(e.target.value);
        setInputValue(e.target.value);
    }

    return (
        <div className="inputContainer">
            <input
                className="inputEffect"
                type={type}
                name={name}
                value={value}
                placeholder=""
                onChange={handleInputChange}
                autoComplete="off"
            />
            <label>{name}</label>
            <span class="focus-border">
            	<i></i>
            </span>
        </div>
    )
}