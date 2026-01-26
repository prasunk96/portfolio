import React, { useEffect, useState, useCallback } from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ setIsNavbarLoaded }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    const isScrollingUp = prevScrollPos > currentScrollPos;

    setVisible(isScrollingUp || currentScrollPos < 10);
    setIsScrolled(currentScrollPos > 50);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    setIsNavbarLoaded?.(true);

    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll, setIsNavbarLoaded]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
          ${visible ? 'translate-y-0' : '-translate-y-full'}
          ${isScrolled ? 'py-3' : 'py-5'}
          ${isScrolled ? 'glass shadow-lg' : 'bg-transparent'}`}
      >
        <nav className="section-container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#landing"
            className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            PK
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  className="opacity-0 animate-fade-in-down"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <a
                    href={item.href}
                    className="text-dark-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400
                             transition-colors duration-200 text-sm font-medium animated-underline py-2"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1kUDVBjuV1P8c--FZgUeSdr25J1QulCSU/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm px-4 py-2 opacity-0 animate-fade-in-down"
              style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
            >
              Resume
            </a>

            {/* Theme Toggle */}
            <div
              className="opacity-0 animate-fade-in-down"
              style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
            >
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="relative z-50 w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span
                  className={`h-0.5 bg-dark-800 dark:bg-dark-100 rounded-full transition-all duration-300
                    ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}
                />
                <span
                  className={`h-0.5 bg-dark-800 dark:bg-dark-100 rounded-full transition-all duration-300
                    ${isMenuOpen ? 'w-0 opacity-0' : 'w-4'}`}
                />
                <span
                  className={`h-0.5 bg-dark-800 dark:bg-dark-100 rounded-full transition-all duration-300
                    ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-dark-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-[min(75vw,300px)] bg-white dark:bg-dark-800 z-40
          transform transition-transform duration-300 ease-in-out shadow-2xl md:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center gap-8">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                className={`transform transition-all duration-300 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="text-xl font-medium text-dark-700 dark:text-dark-200
                           hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li
              className={`transform transition-all duration-300 ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: `${navItems.length * 50}ms` }}
            >
              <a
                href="https://drive.google.com/file/d/1kUDVBjuV1P8c--FZgUeSdr25J1QulCSU/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
                onClick={closeMenu}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
