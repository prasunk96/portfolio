import React, { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import workData from '../../work.json';
import { HiChevronDown, HiLocationMarker, HiCalendar } from 'react-icons/hi';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section
      id="experience"
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
            <span className="text-primary-500 dark:text-primary-400 font-mono text-xl mr-2">03.</span>
            Where I've Worked
          </h2>
          <div className="h-px bg-dark-200 dark:bg-dark-700 flex-grow max-w-xs" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-dark-200 dark:bg-dark-700 transform md:-translate-x-1/2" />

          {workData.map((job, index) => {
            const isExpanded = expandedIndex === index;
            const isEven = index % 2 === 0;

            return (
              <div
                key={`${job.company}-${index}`}
                className={`relative mb-8 last:mb-0 transition-all duration-700
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100 + 100}ms` }}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full
                    transform -translate-x-1/2 z-10 transition-all duration-300
                    ${index === 0
                      ? 'bg-primary-500 dark:bg-primary-400 ring-4 ring-primary-100 dark:ring-primary-900 scale-125'
                      : 'bg-dark-300 dark:bg-dark-600 hover:bg-primary-400 dark:hover:bg-primary-500'
                    }`}
                />

                {/* Content Card */}
                <div
                  className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)]
                    ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
                >
                  <div
                    className={`card p-6 cursor-pointer group
                      ${isExpanded ? 'ring-2 ring-primary-500/20' : ''}`}
                    onClick={() => toggleExpand(index)}
                  >
                    {/* Job Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-dark-800 dark:text-dark-100 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                          {job.position}
                        </h3>
                        <p className="text-lg text-primary-500 dark:text-primary-400 font-medium mt-1">
                          @ {job.company}
                        </p>
                      </div>
                      <button
                        className={`p-2 rounded-full bg-dark-100 dark:bg-dark-700
                          hover:bg-primary-100 dark:hover:bg-primary-900/30
                          transition-all duration-300
                          ${isExpanded ? 'rotate-180 bg-primary-100 dark:bg-primary-900/30' : ''}`}
                        aria-label={isExpanded ? 'Collapse' : 'Expand'}
                      >
                        <HiChevronDown className="w-5 h-5 text-dark-500 dark:text-dark-400" />
                      </button>
                    </div>

                    {/* Job Meta */}
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-dark-500 dark:text-dark-400">
                      <span className="flex items-center gap-1">
                        <HiCalendar className="w-4 h-4" />
                        {job.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiLocationMarker className="w-4 h-4" />
                        {job.location}
                      </span>
                    </div>

                    {/* Expandable Highlights */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out
                        ${isExpanded ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}
                    >
                      <div className="border-t border-dark-100 dark:border-dark-700 pt-4">
                        <h4 className="text-sm font-semibold text-dark-600 dark:text-dark-300 mb-3 uppercase tracking-wider">
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {job.highlights.map((highlight, hIndex) => (
                            <li
                              key={hIndex}
                              className="flex gap-3 text-dark-600 dark:text-dark-300"
                            >
                              <span className="text-primary-500 dark:text-primary-400 mt-1.5 flex-shrink-0">
                                <svg className="w-2 h-2 fill-current" viewBox="0 0 8 8">
                                  <circle cx="4" cy="4" r="4" />
                                </svg>
                              </span>
                              <span className="leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Preview of first highlight when collapsed */}
                    {!isExpanded && (
                      <p className="mt-4 text-dark-500 dark:text-dark-400 text-sm line-clamp-2">
                        {job.highlights[0]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline End Dot */}
        <div
          className={`relative transition-all duration-700 delay-500
            ${isInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-dark-200 dark:bg-dark-700 transform -translate-x-1/2" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
