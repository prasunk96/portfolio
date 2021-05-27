import React from 'react';
import './styles.css';

export const Input = ({name, value, onChange, type}) => {

    const handleInputChange = (e) => {
        onChange(e.target.value);
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
            <span className="focus-border">
            	<i></i>
            </span>
        </div>
    )
}