import React from 'react';
import styles from './styles.module.css';
import ProjectCard from './ProjectCard';
import vaNew from '../../assets/images/vaNew.png';
import octoSearch from '../../assets/images/octoSearch.png';

export const Content = () => {
    return (
        <div className={`${styles.contentContainer} animationElement fadeInFromBottom`} style={{animationDelay: '200ms'}}>
            <div className={styles.projectHeaderContainer}>
                <div className={styles.projectsHeader}>
                    <h2>My Projects</h2>
                </div>
            </div>
            <div className={styles.projectsContainer}>
                <ProjectCard
                    repo="https://github.com/prasunk96/visual-algo"
                    url="https://prasunk96.github.io/visual-algo/"
                    tech={['ReactJS', 'JavaScript', 'Redux', 'CSS3']} image={vaNew} title='VisualAlgo'
                    text={`Simple single page application that let you to visualise alogorithms. Currently it has sorting algorithms available for visualization. plannig to add more algorithms in future.`} />
                <ProjectCard
                    repo="https://github.com/prasunk96/octo-search"
                    url="https://octo-search.netlify.app/"
                    tech={['VueJS', 'GitHub API', 'JavaScript', 'Vuex', 'Vue Router', 'CSS3']} image={octoSearch} title='Octo-Search'
                    text={`An application to see your github repository and profile with a different take on UI. Built using GitHub API along with Vue, Vue Router and Vuex.`} />
            </div>
        </div>
    )
}