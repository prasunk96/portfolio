import { React } from 'react';
import styles from './styles.module.css';
import Card from '../../components/Card';
import va from '../../assets/images/va.png';
import movieDB from '../../assets/images/movieDB.png';

export const Content = () => {
    return (
        <div className={styles.contentContainer}>
            <Card image={va} title='VisualAlgo' text={`A website built to help visualize algorithms. currently it's in development and has sorting alogorithms in place.`} />
            <Card image={movieDB} title='MovieDB' text={`A simple website to see list of movies, see details about it and perform filter on them`} />
            <Card image={movieDB} title='StockChartApp' text={`An App build for learning purpose using react native and google firebase. It has google oAuth as login mechanism and user can search for a stock add it to its watchlist and see the chart for the same.`} />
        </div>
    )
}