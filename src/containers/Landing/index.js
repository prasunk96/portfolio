import { React } from 'react';
import styles from './styles.module.css';
import profileImage from '../../assets/images/profileImage.jpg';
import { HamMenu } from '../../components/HamburgerMenu';

export const Landing = () => {
    return (
        <div className={styles.landing}>
            <HamMenu />
            <div className={styles.landingTitle}>
                {/* <div className={styles.designation}>Hi,</div> */}
                <div className={styles.name}>Prasun Kumar</div>
            </div>
            {/* <div className={styles.seperatorDiv}>&nbsp;</div> */}
            {/* <div className={styles.profileImageContianer}>
                <div className={styles.profileImage}>
                    <img alt="profileImage" src={profileImage} className={styles.profileImageTag} />
                </div>
            </div> */}
        </div>
    )
}