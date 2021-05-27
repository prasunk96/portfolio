import React from 'react';
import styles from './styles.module.css';

export const PercentageBar = ({value}) => {
    return (
    <div className={styles.percentageBarContainer}>
        <div className={styles.percentageBarOuter}>
            <div className={styles.percentageBarInner} style={{width: value}}>
                <span className={styles.progressBarValue}>{value}</span>
            </div>
        </div>
    </div>
    );
}