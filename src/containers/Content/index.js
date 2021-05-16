import { React } from 'react';
import styles from './styles.module.css';
// import Card from '../../components/Card';
import ProjectCard from './ProjectCard';
import va from '../../assets/images/vaDashboard.png';
import movieDB from '../../assets/images/mdbDashboard.png';
import movie from '../../assets/images/movieDB.png';

export const Content = () => {
    return (
        <div className={styles.contentContainer}>
        <div className={styles.projectsContainer}>
            <ProjectCard image={va} title='VisualAlgo' text={`A website built to help visualize algorithms. currently it's in development and has sorting alogorithms in place.`} />
            <ProjectCard image={movieDB} title='MovieDB' text={`A simple website to see list of movies, see details about it and perform filter on them`} />
            <ProjectCard image={movie} title='StockChartApp' text={`An App build for learning purpose using react native and google firebase. It has google oAuth as login mechanism and user can search for a stock add it to its watchlist and see the chart for the same.`} />
        </div>
        <div className={styles.customShapeDividerBottomContent}>
            <svg data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFillFooter}></path>
            </svg>
        </div>
        </div>
    )
}