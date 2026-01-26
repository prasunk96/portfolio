import React, { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart, FaCheck, FaCopy } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/prasunk96', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/prasunk1796', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/prasunk1796', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://instagram.com/prasunk1796', label: 'Instagram' },
];

export const Footer = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('prasunk1796@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      ref={ref}
      className="relative bg-white dark:bg-dark-900"
    >
      {/* Contact Section */}
      <div className="section-padding pb-12">
        <div className="section-container">
          <div
            className={`max-w-2xl mx-auto text-center transition-all duration-700
              ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-primary-500 dark:text-primary-400 font-mono text-sm mb-4">
              05. What's Next?
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-800 dark:text-dark-100 mb-6">
              Get In Touch
            </h2>

            <p className="text-dark-500 dark:text-dark-400 text-lg leading-relaxed mb-10">
              I'm currently open to new opportunities and always excited to connect with fellow developers,
              discuss interesting projects, or just have a chat about tech. Whether you have a question,
              want to collaborate, or just want to say hi, my inbox is always open!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:prasunk1796@gmail.com"
                className="btn-primary"
              >
                <HiMail className="mr-2" size={20} />
                Say Hello
              </a>

              <button
                onClick={copyEmail}
                className="btn-secondary group"
              >
                {copied ? (
                  <>
                    <FaCheck className="mr-2 text-green-500" size={16} />
                    Copied!
                  </>
                ) : (
                  <>
                    <FaCopy className="mr-2" size={16} />
                    Copy Email
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-8 border-t border-dark-100 dark:border-dark-800">
        <div className="section-container">
          <div
            className={`flex flex-col items-center gap-6 transition-all duration-700 delay-200
              ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Social Links - Mobile */}
            <div className="flex items-center gap-6 lg:hidden">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-500 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400
                           transition-all duration-200 hover:-translate-y-1"
                  aria-label={label}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>

            {/* Credit */}
            <div className="text-center">
              <p className="text-dark-500 dark:text-dark-400 text-sm">
                Designed & Built with{' '}
                <FaHeart className="inline-block text-red-500 mx-1" size={12} />
                by{' '}
                <a
                  href="https://github.com/prasunk96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 dark:text-primary-400 hover:underline"
                >
                  Prasun Kumar
                </a>
              </p>
              <p className="text-dark-400 dark:text-dark-500 text-xs mt-2">
                Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
