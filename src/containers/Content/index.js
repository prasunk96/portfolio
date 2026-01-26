import React from 'react';
import { useInView } from '../../hooks/useInView';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import vaNew from '../../assets/images/vaNew.png';
import octoSearch from '../../assets/images/octoSearch.png';

const projects = [
  {
    title: 'Visual Algo',
    description: 'An interactive single-page application that visualizes sorting algorithms in real-time. Watch bubble sort, quick sort, merge sort, and more come to life with customizable speed and array size controls.',
    tech: ['React', 'Redux', 'JavaScript', 'CSS3'],
    image: vaNew,
    github: 'https://github.com/prasunk96/visual-algo',
    live: 'https://prasunk96.github.io/visual-algo/',
    featured: true,
  },
  {
    title: 'Octo-Search',
    description: 'A GitHub profile and repository explorer with a fresh UI perspective. Search users, explore their repositories, and view detailed stats powered by the GitHub API.',
    tech: ['Vue.js', 'Vuex', 'Vue Router', 'GitHub API', 'Netlify'],
    image: octoSearch,
    github: 'https://github.com/prasunk96/octo-search',
    live: 'https://octo-search.netlify.app/',
    featured: true,
  },
];

const otherProjects = [
  {
    title: 'NoBroker',
    description: 'Built Google-styled map view increasing conversions by 70%. Re-implemented homepage for festive season with 123% increase in lead creation.',
    tech: ['React', 'Next.js', 'Google Maps', 'Performance'],
    live: 'https://www.nobroker.in/',
  },
  {
    title: 'Design System',
    description: 'High-performance component library with 90% bundle size reduction, accessibility support, and theming capabilities built for Clear.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
  },
  {
    title: 'Recon Framework',
    description: 'Extensible framework reducing development time from weeks to days, with 80% code reusability across different reconciliation modules.',
    tech: ['React', 'TypeScript', 'TanStack'],
  },
  {
    title: 'Smart Search Chatbot',
    description: 'AI-powered property search chatbot using Google Dialogflow, achieving <1 second TBT and streamlined API calls.',
    tech: ['React', 'Dialogflow', 'Node.js'],
  },
];

export const Content = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { ref: otherRef, isInView: otherInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="projects"
      className="section-padding bg-dark-50 dark:bg-dark-800/50"
    >
      <div className="section-container">
        {/* Section Header */}
        <div
          ref={ref}
          className={`flex items-center gap-4 mb-12 transition-all duration-700
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="section-heading whitespace-nowrap">
            <span className="text-primary-500 dark:text-primary-400 font-mono text-xl mr-2">04.</span>
            Things I've Built
          </h2>
          <div className="h-px bg-dark-200 dark:bg-dark-700 flex-grow max-w-xs" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.title}
                className={`relative grid md:grid-cols-12 gap-4 items-center transition-all duration-700
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150 + 100}ms` }}
              >
                {/* Project Image */}
                <div
                  className={`md:col-span-7 relative group
                    ${isEven ? 'md:order-1' : 'md:order-2'}`}
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden rounded-xl"
                  >
                    <div className="absolute inset-0 bg-primary-500/20 dark:bg-primary-400/20 z-10
                                  group-hover:bg-transparent transition-colors duration-300" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-cover grayscale-[50%] group-hover:grayscale-0
                               transition-all duration-500 group-hover:scale-105"
                    />
                  </a>
                </div>

                {/* Project Content */}
                <div
                  className={`md:col-span-6 relative z-10
                    ${isEven
                      ? 'md:order-2 md:-ml-16 text-left md:text-right'
                      : 'md:order-1 md:-mr-16 text-left'
                    }`}
                >
                  <p className="text-primary-500 dark:text-primary-400 font-mono text-sm mb-2">
                    Featured Project
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-dark-800 dark:text-dark-100 mb-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <div className="card p-6 mb-4">
                    <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <ul className={`flex flex-wrap gap-3 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="text-sm font-mono text-dark-500 dark:text-dark-400"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex gap-4 ${isEven ? 'md:justify-end' : ''}`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub size={22} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      aria-label="External Link"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Other Noteworthy Projects */}
        <div ref={otherRef}>
          <h3
            className={`text-2xl font-bold text-center text-dark-800 dark:text-dark-100 mb-8
              transition-all duration-700
              ${otherInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Other Noteworthy Projects
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className={`card p-6 group hover:bg-dark-50 dark:hover:bg-dark-700/50
                  transition-all duration-700 flex flex-col
                  ${otherInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100 + 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <FaFolder className="text-primary-500 dark:text-primary-400 text-3xl" />
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-400 dark:text-dark-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      aria-label="External Link"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>

                <h4 className="text-xl font-bold text-dark-800 dark:text-dark-100 mb-3
                             group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h4>

                <p className="text-dark-500 dark:text-dark-400 mb-4 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs font-mono text-dark-400 dark:text-dark-500"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
