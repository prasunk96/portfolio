import { React } from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import styles from './styles.module.css';

const Card = ({image, title, text}) => {
    return (
    <article className={styles.card}>
        <CardHeader image={image}/>
        <CardBody title={title} text={text}/>
    </article>
    )
}

export default Card;
