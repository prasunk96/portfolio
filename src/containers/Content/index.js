import { React } from 'react';
import styles from './styles.module.css';
import Timeline from '../../components/Timeline';
import Card from '../../components/Card';

export const Content = () => {
    return (
        <div className={styles.contentContainer}>
            {/* <Timeline /> */}
            <Card title='VisualAlgo' text={`A website built to help visualize algorithms. currently it's in development and has sorting alogorithms in place.`} />
            <Card title='MovieDB' text={`A simple website to see list of movies, see details about it and perform filter on them`} />
            <Card title='StockChartApp' text={`An App build for learning purpose using react native and google firebase. It has google oAuth as login mechanism and user can search for a stock add it to its watchlist and see the chart for the same.`} />
        </div>
    )
}