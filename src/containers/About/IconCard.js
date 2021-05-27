import React from 'react';
import styles from './styles.module.css';
import { PercentageBar } from './PercentageBar';

export const IconCard = ({proficiency, children}) => {
    return (
    <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
            {children}
        </div>
        <div className={styles.detailsContainer}>
            <div className={styles.profcontainer}>
                <PercentageBar value={proficiency} />
            </div>
        </div>
    </div>
    );
}