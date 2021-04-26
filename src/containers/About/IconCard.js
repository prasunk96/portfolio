import { react } from 'react';
import styles from './styles.module.css';
import { PercentageBar } from './PercentageBar';

export const IconCard = ({logo, alt, proficiency, experience}) => {
    return (
    <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
            <img src={logo} alt={alt} />
        </div>
        <div className={styles.detailsContainer}>
            <div className={styles.profcontainer}>
                <span className={styles.detailsLabel}>Proficiency:</span>
                <PercentageBar value={proficiency} />
            </div>
            <div className={styles.expContainer}>
                <span className={styles.detailsLabel}>Experience:</span>
                <span className={styles.expValue}>{experience} Years</span>
            </div>
        </div>
    </div>
    );
}