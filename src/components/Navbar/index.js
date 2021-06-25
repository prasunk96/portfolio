import { React, useEffect, useState } from 'react';
import styles from './styles.module.css';

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const Navbar = ({ setIsNavbarLoaded }) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [showHamMenue, setShowHamMenue] = useState(false);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;

        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 10) || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setIsNavbarLoaded(true);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll, setIsNavbarLoaded]);

    useEffect(() => {
        let element =  document.getElementById('appBody');
        let landingElement = document.getElementById('hamMenueOverlay');
        let aside = document.getElementById('hamMenueList');
        let ham = document.querySelector('#hamButton');

        if(showHamMenue) {
            element.style.overflow = 'hidden';
            landingElement.style.visibility = 'visible';
            landingElement.style['backdrop-filter'] = 'blur(7px)';
            aside.style.visibility = 'visible';
            aside.style.transform = 'translateX(0vw)';
            ham.classList.remove(`${styles.hamButton}`);
            ham.classList.add(`${styles.hamButtonAfter}`);
        } else {
             element.style.overflow = 'auto';
             landingElement.style.visibility = 'hidden';
             aside.style.visibility = 'hidden';
             aside.style.transform = 'translateX(100vw)';
             ham.classList.remove(`${styles.hamButtonAfter}`);
             ham.classList.add(`${styles.hamButton}`);
             landingElement.style['backdrop-filter'] = 'blur(0px)';
            }
    }, [showHamMenue])

    const handleHamClick = () => {
       setShowHamMenue(!showHamMenue);
    }

    return (
        <header id="navbarHeader" className={`${styles.navbarHeader} ${!visible ? styles.scrollDown : window.pageYOffset !== 0 && styles.scrollUp}`}>
            <nav className={styles.navbar}>
                <div className={styles.navButtons}>
                    <ul>
                        <li className={`animationElement fadeInFromTop`} style={{animationDelay: '100ms'}}><a href="#about">About</a></li>
                        <li className={`animationElement fadeInFromTop`} style={{animationDelay: '200ms'}}><a href="#experience">Experience</a></li>
                        <li className={`animationElement fadeInFromTop`} style={{animationDelay: '300ms'}}><a href="#projects">Projects</a></li>
                        <li className={`animationElement fadeInFromTop`} style={{animationDelay: '400ms'}}><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className={styles.hamMenue}>
                    <div>
                        <button id="hamButton" aria-label="Menu" className={styles.hamButton} onClick={handleHamClick}>
                            <div className={styles.hamBox}>
                                <div id="ham" className={styles.ham}></div>
                            </div>
                        </button>
                        <aside id="hamMenueList" aria-hidden="true" tabIndex="-1" className={styles.hamMenueList}>
                            <nav>
                                <ul>
                                    <li onClick={handleHamClick}><a href="#about">About</a></li>
                                    <li onClick={handleHamClick}><a href="#experience">Experience</a></li>
                                    <li onClick={handleHamClick}><a href="#projects">Projects</a></li>
                                    <li onClick={handleHamClick}><a href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </aside>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;