import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';
import { Reveal } from './Reveal';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Kinh nghiệm làm việc</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>
        </Reveal>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent dark:before:via-slate-600">
          {EXPERIENCES.map((exp, index) => (
            <Reveal key={index} delay={index * 0.2}>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Icon Marker */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-primary-100 dark:bg-slate-700 text-primary-600 dark:text-primary-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase size={18} />
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">{exp.role}</h3>
                    <time className="text-sm font-medium text-primary-600 dark:text-primary-400">{exp.period}</time>
                  </div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3">{exp.company}</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;