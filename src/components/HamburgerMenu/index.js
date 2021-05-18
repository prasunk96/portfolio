import { React, useState, useEffect } from 'react';
import styles from './styles.module.css';

function useDelayUnmount(isMounted, delayTime) {
    const [showDiv, setShowDiv] = useState(false);
    useEffect(() => {
      let timeoutId;
      if (isMounted && !showDiv) {
        setShowDiv(true);
      } else if (!isMounted && showDiv) {
        timeoutId = setTimeout(() => setShowDiv(false), delayTime); //delay our unmount
      }
      return () => clearTimeout(timeoutId);
    }, [isMounted, delayTime, showDiv]);
    return showDiv;
}

const mountedStyle = { animation: `${styles.inAnimation} 250ms ease-in` };
const unmountedStyle = {
    animation: `${styles.outAnimation} 270ms ease-out`,
    animationFillMode: "forwards"
};

export const HamMenu = () => {
    const [isMenueOpen, setIsMenueOpen] = useState(false);

    const showDiv = useDelayUnmount(isMenueOpen, 250);

    const handleHamMenuCdivck = () => {
        const el = document.getElementById('ham-menu');
        const secondChild = document.querySelector("#ham-menu span:nth-child(2)");
        const thirdChild = document.querySelector("#ham-menu span:nth-child(3)");
        if (isMenueOpen) {
            el.firstElementChild.style.transform = 'rotate(0)';
            secondChild.style.opacity = '1';
            secondChild.style.transform = 'translateX(0)';
            thirdChild.style.transform = 'rotate(0)';
        } else {
            el.firstElementChild.style.transform = 'rotate(45deg)';
            secondChild.style.opacity = '0';
            secondChild.style.transform = 'translateX(20px)';
            thirdChild.style.transform = 'rotate(-45deg)';
        }
        setIsMenueOpen(!isMenueOpen)
    }
    return (
        <>
        <div id="ham-menu" className={styles.hamButton} onClick={handleHamMenuCdivck}>
            <span className={styles.hamMenuBar}>&nbsp;</span>
            <span className={styles.hamMenuBar}>&nbsp;</span>
            <span className={styles.hamMenuBar}>&nbsp;</span>
        </div>
        {showDiv && <div id="nav-bar" style={isMenueOpen ? mountedStyle : unmountedStyle} className={styles.navBar}>
            <div className={styles.hamMenuItem}>About</div>
            <div className={styles.hamMenuItem}>Experience</div>
            <div className={styles.hamMenuItem}>Work</div>
            <div className={styles.hamMenuItem}>Contact</div>
        </div>}
        </>
    )
}