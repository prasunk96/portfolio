import React from 'react';
import { useInView } from '../../hooks/useInView';
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiWebpack,
  SiVuedotjs,
  SiGraphql,
  SiTestinglibrary,
  SiOpenai,
  SiJenkins,
  SiGithubactions,
} from 'react-icons/si';
import { TbBrandReactNative, TbRobot, TbBrain } from 'react-icons/tb';
import { HiOutlineCube, HiSparkles, HiHeart } from 'react-icons/hi';

const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '</>',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'TanStack', icon: TbBrandReactNative, color: '#FF4154' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    ],
  },
  {
    title: 'Tools & CI/CD',
    icon: '⚡',
    skills: [
      { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
      { name: 'Rspack', icon: SiWebpack, color: '#FF6B35' },
      { name: 'React Testing Library', icon: SiTestinglibrary, color: '#E33332' },
      { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
    ],
  },
  {
    title: 'AI & Productivity',
    icon: '🤖',
    skills: [
      { name: 'Claude Code', icon: TbBrain, color: '#D97706' },
      { name: 'GitHub Copilot', icon: SiOpenai, color: '#000000' },
      { name: 'Cursor', icon: HiSparkles, color: '#7C3AED' },
      { name: 'Windsurf', icon: TbRobot, color: '#06B6D4' },
      { name: 'Lovable', icon: HiHeart, color: '#FF6B6B' },
    ],
  },
  {
    title: 'Other Skills',
    icon: '🎯',
    skills: [
      { name: 'Micro Frontends', icon: HiOutlineCube, color: '#6366F1' },
      { name: 'Web Sockets', icon: HiOutlineCube, color: '#F59E0B' },
      { name: 'Zustand', icon: HiOutlineCube, color: '#764ABC' },
    ],
  },
];

export const Skills = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding bg-dark-50 dark:bg-dark-800/50"
    >
      <div className="section-container">
        {/* Section Header */}
        <div
          className={`flex items-center gap-4 mb-12 transition-all duration-700
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="section-heading whitespace-nowrap">
            <span className="text-primary-500 dark:text-primary-400 font-mono text-xl mr-2">02.</span>
            Skills & Technologies
          </h2>
          <div className="h-px bg-dark-200 dark:bg-dark-700 flex-grow max-w-xs" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`card p-6 transition-all duration-700
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${categoryIndex * 100 + 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-dark-800 dark:text-dark-100">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className={`group flex items-center gap-2 p-3 rounded-lg
                                bg-dark-50 dark:bg-dark-700/50
                                hover:bg-primary-50 dark:hover:bg-primary-900/20
                                border border-transparent hover:border-primary-200 dark:hover:border-primary-700
                                transition-all duration-300
                                ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                      style={{ transitionDelay: `${(categoryIndex * 6 + skillIndex) * 50 + 200}ms` }}
                    >
                      <Icon
                        className="text-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm text-dark-600 dark:text-dark-300 font-medium truncate">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
            I'm constantly learning and exploring new technologies. Currently diving deeper into{' '}
            <span className="text-primary-500 dark:text-primary-400">performance optimization</span>,{' '}
            <span className="text-primary-500 dark:text-primary-400">design systems</span>, and{' '}
            <span className="text-primary-500 dark:text-primary-400">developer experience tools</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
