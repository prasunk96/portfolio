import { React} from 'react';
import styles from './styles.module.css';
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";


const ProjectCard = ({image, title}) => {
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };

    return (
        <div className={styles.projectCard}>
            <div style={style} className={styles.projectImage}></div>
            <div className={styles.projectOverlay}></div>
            <div className={`${styles.projectDetails} ${styles.fadeInBottom}`}>
                <div className={styles.projectTitle}>{title}</div>
                <div className={styles.projectButtonsContianer}>
                    <div className={styles.projectButton}>
                        <FaExternalLinkSquareAlt size="18" color="#fff" className={styles.projectButtonIcon} />
                        <span className={styles.projectButtonText}>Website</span>
                    </div>  
                    <div className={styles.projectButton}>
                        <FaGithub size="18" color="#fff"  className={styles.projectButtonIcon} />
                        <span className={styles.projectButtonText}>Repository</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
