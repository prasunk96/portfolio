import React, { useState } from 'react';
import styles from './styles.module.css';
import workData from '../../work.json';

const Experience = () => {
    const [currentActiveTab, setCurrentActiveTab] = useState(workData[0]);

    const handleTabChange = (event, value) => {
        const element = document.getElementById('tabDetailsContainer');
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.opacity = 1;
            setCurrentActiveTab(value);
        }, 500);
    }

    return (
        <div className={`${styles.experienceContainer} animationElement fadeInFromBottom`} style={{animationDelay: '200ms'}}>
            <div className={styles.headerContainer}>
                <div className={styles.experienceHeader}>
                    <h2>Where I've Worked</h2>
                </div>
            </div>
            <div className={styles.experienceSection}>
                <div className={styles.tabsListContainer}>
                    {workData.map((item, index) => <button key={index} onClick={(event) => handleTabChange(event, item)} className={styles.tabsButton}><div>{item.company}</div><div style={{ opacity: currentActiveTab.company === item.company ? 1 : 0 }} className={`${currentActiveTab.company === item.company && styles.activetabsButton}`}>&nbsp;</div></button>)}
                </div>
                <div id="tabDetailsContainer" className={styles.tabDetailsContainer}>
                    <div className={styles.tabDescriptionHeaderContainer}>
                        <h3>{currentActiveTab.positon}</h3>
                        <p>{currentActiveTab.duration}</p>
                    </div>
                    <div className={styles.tabDescriptionContainer}>
                        <div>
                            <ul>
                                {currentActiveTab !== {} && currentActiveTab.details.map((item, index) => <li key={`details-${index}`}>
                                    {item}
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Experience;