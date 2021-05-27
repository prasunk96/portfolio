import React from 'react';
import styles from './styles.module.css';

const CardHeader = ({ image, name }) => {
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
        <header style={style} id={image} className={styles.cardHeader}>
          <h4 className={styles.cardHeaderTitle}>{name}</h4>
        </header>
    )
  }

  export default CardHeader;