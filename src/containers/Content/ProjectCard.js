import { React} from 'react';
import styles from './styles.module.css';
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";


const ProjectCard = ({image, title, text, tech, repo, url}) => {
    return (
        <div className={styles.project}>
            <div className={styles.projectCard}>
                <div className={styles.projectImage}>
                    <img src={image} alt="ProjectImage" />
                </div>
                <div className={styles.projectOverlay}></div>
                <div className={`${styles.projectDetails} ${styles.fadeInBottom}`}>
                    <div className={styles.projectTitle}>{title}</div>
                </div>
            </div>
            <div className={styles.projectDescription}>
                <div className={styles.projectDescWrapper}>
                    <h2>{title}</h2>
                    <div className={styles.projectButtonsContianer}>
                            <a href={url} target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                                <FaExternalLinkSquareAlt size="25" className={styles.projectButtonIcon} />
                            </a>  
                            <a href={repo} target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                                <FaGithub size="25" className={styles.projectButtonIcon} />
                            </a>
                        </div>
                    <div className={styles.projectText}>
                        <p>
                            {text}
                        </p>
                        <div>
                            <ul className={styles.techStack}>
                                {
                                    tech.map((item, index) => {
                                        return <li key={index}>{item}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
