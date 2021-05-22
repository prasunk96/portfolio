import { React } from 'react';
import styles from './styles.module.css';
import ProjectCard from './ProjectCard';
import va from '../../assets/images/vaDashboard.png';
import movieDB from '../../assets/images/mdbDashboard.png';
import movie from '../../assets/images/movieDB.png';

export const Content = () => {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.projectHeaderContainer}>
                <div className={styles.projectsHeader}>
                    <h2>My Projects</h2>
                </div>
            </div>
            <div className={styles.projectsContainer}>
                <ProjectCard image={va} title='VisualAlgo' text={`A website built to help visualize algorithms. currently it's in development and has sorting alogorithms in place.`} />
                <ProjectCard image={movieDB} title='MovieDB' text={`A simple website to see list of movies, see details about it and perform filter on them`} />
                <ProjectCard image={movie} title='StockChartApp' text={`An App build for learning purpose using react native and google firebase. It has google oAuth as login mechanism and user can search for a stock add it to its watchlist and see the chart for the same.`} />
            </div>
        </div>
    )
}