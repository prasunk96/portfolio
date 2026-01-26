import React from 'react';
import { useInView } from '../../hooks/useInView';
import profileImage from '../../assets/images/meNew2026.jpeg';

export const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-white dark:bg-dark-900"
    >
      <div className="section-container">
        {/* Section Header */}
        <div
          className={`flex items-center gap-4 mb-12 transition-all duration-700
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="section-heading whitespace-nowrap">
            <span className="text-primary-500 dark:text-primary-400 font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px bg-dark-200 dark:bg-dark-700 flex-grow max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Text Content */}
          <div
            className={`md:col-span-2 space-y-4 transition-all duration-700 delay-100
              ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-dark-600 dark:text-dark-300 text-lg leading-relaxed">
              Hi! I'm <span className="text-primary-500 dark:text-primary-400 font-medium">Prasun</span>,
              a passionate frontend developer who loves creating things that live on the internet.
              My journey into web development began in high school when I discovered the magic of
              HTML marquee tags - and I've been hooked ever since!
            </p>

            <p className="text-dark-600 dark:text-dark-300 text-lg leading-relaxed">
              After completing my Bachelor's in Computer Science, I started my career at{' '}
              <a
                href="https://www.gslab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                GSLab
              </a>
              , where I built enterprise applications including campaign management tools and
              digital workspace environments. The experience taught me the importance of
              scalable architecture and clean code.
            </p>

            <p className="text-dark-600 dark:text-dark-300 text-lg leading-relaxed">
              I then moved to{' '}
              <a
                href="https://www.nobroker.in"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                NoBroker
              </a>
              , India's first proptech unicorn, where I worked on high-impact features
              that drove significant business value - from map view implementations that
              increased conversions by 70% to performance optimizations that improved
              Core Web Vitals scores.
            </p>

            <p className="text-dark-600 dark:text-dark-300 text-lg leading-relaxed">
              Currently, I'm a <span className="font-medium">Frontend Engineer III</span> at{' '}
              <a
                href="https://clear.in"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Clear (formerly ClearTax)
              </a>
              , where I'm leading the IDT Recon frontend team. I've spearheaded the development
              of a high-performance design system achieving 90% bundle size reduction, and
              migrated our build system from Webpack to Rspack with 94% faster build times.
            </p>

            <p className="text-dark-600 dark:text-dark-300 text-lg leading-relaxed">
              My focus areas include building scalable component libraries, optimizing
              performance, establishing best practices, and mentoring junior engineers.
            </p>
          </div>

          {/* Profile Image */}
          <div
            className={`transition-all duration-700 delay-200
              ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative group max-w-[300px] mx-auto">
              {/* Image container with gradient border */}
              <div className="relative z-10 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10" />
                <img
                  src={profileImage}
                  alt="Prasun Kumar"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[2/3] object-cover object-[center_20%] grayscale group-hover:grayscale-[50%] transition-all duration-500"
                />
              </div>

              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-primary-500 dark:border-primary-400 rounded-xl
                            translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2
                            transition-transform duration-300" />
            </div>

            {/* Companies worked with */}
            <div className="mt-8">
              <p className="text-sm text-dark-500 dark:text-dark-400 mb-3 font-medium">
                Companies I've worked with:
              </p>
              <div className="flex flex-wrap gap-3">
                {['Clear', 'NoBroker', 'GSLab'].map((company) => (
                  <span
                    key={company}
                    className="px-3 py-1.5 text-sm rounded-full bg-dark-100 dark:bg-dark-800
                             text-dark-600 dark:text-dark-300 border border-dark-200 dark:border-dark-700"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
