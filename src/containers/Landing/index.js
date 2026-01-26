import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

const roles = [
  'Frontend Engineer III',
  'React Specialist',
  'UI/UX Enthusiast',
  'Performance Optimizer',
];

export const Landing = ({ isNavbarLoaded }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    const ticker = setTimeout(() => {
      const fullText = roles[currentRole];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setDelta(50);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setDelta(100);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, currentRole, delta]);

  return (
    <section
      id="landing"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20
                 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/10 dark:bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-400/10 dark:bg-accent-500/10 rounded-full blur-3xl animate-float animation-delay-200" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-float animation-delay-400" />
      </div>

      {/* Social links - left side */}
      <div className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-dark-300 dark:after:bg-dark-600">
        {[
          { icon: FaGithub, href: 'https://github.com/prasunk96', label: 'GitHub' },
          { icon: FaLinkedin, href: 'https://linkedin.com/in/prasunk1796', label: 'LinkedIn' },
          { icon: FaTwitter, href: 'https://twitter.com/prasunk1796', label: 'Twitter' },
        ].map(({ icon: Icon, href, label }, index) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-500 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400
                     hover:-translate-y-1 transition-all duration-200 opacity-0 animate-fade-in"
            style={{ animationDelay: `${1200 + index * 100}ms`, animationFillMode: 'forwards' }}
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      {/* Email - right side */}
      <div className="hidden lg:flex fixed right-8 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-dark-300 dark:after:bg-dark-600">
        <a
          href="mailto:prasunk1796@gmail.com"
          className="text-dark-500 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400
                   transition-colors duration-200 text-sm tracking-widest writing-mode-vertical
                   opacity-0 animate-fade-in"
          style={{
            writingMode: 'vertical-rl',
            animationDelay: '1500ms',
            animationFillMode: 'forwards'
          }}
        >
          prasunk1796@gmail.com
        </a>
      </div>

      {/* Main content */}
      <div className="section-container relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Greeting */}
          <p
            className="text-primary-500 dark:text-primary-400 font-mono text-sm md:text-base mb-4
                     opacity-0 animate-fade-in-up"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            Hi, my name is
          </p>

          {/* Name */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            <span className="gradient-text">Prasun Kumar.</span>
          </h1>

          {/* Tagline with typing effect */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-600 dark:text-dark-300 mb-6
                     opacity-0 animate-fade-in-up"
            style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
          >
            I build things for the web.
          </h2>

          {/* Role typing effect */}
          <div
            className="h-8 mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
          >
            <span className="font-mono text-lg md:text-xl text-primary-500 dark:text-primary-400">
              {'> '}{text}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Description */}
          <p
            className="text-dark-500 dark:text-dark-400 text-lg max-w-xl mb-10 leading-relaxed
                     opacity-0 animate-fade-in-up"
            style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
          >
            Senior Frontend Engineer with 6+ years of experience specializing in React.js and TypeScript.
            I architect scalable, high-performance web applications and champion best practices.
            Currently building amazing things at{' '}
            <a
              href="https://clear.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 dark:text-primary-400 hover:underline"
            >
              Clear
            </a>.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a
              href="mailto:prasunk1796@gmail.com"
              className="btn-secondary"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dark-400 dark:text-dark-500
                 hover:text-primary-500 dark:hover:text-primary-400 transition-colors
                 animate-bounce-slow opacity-0 animate-fade-in"
        style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}
        aria-label="Scroll to about section"
      >
        <HiArrowDown size={24} />
      </a>
    </section>
  );
};

export default Landing;
