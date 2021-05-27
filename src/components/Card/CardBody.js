import React from 'react';
import CardButton from './CardButton';
import styles from './styles.module.css';

const CardBody = ({title, text}) => {
    return (
        <div className={styles.cardBody}>            
            <h2 className={styles.cardHeaderTtitle}>{title}</h2>
            <div className={styles.bodyContentWrapper}>
                <p className={styles.bodyContent}>{text}</p>
            </div>
            <CardButton />
        </div>
    )
}

export default CardBody;
