import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Reveal } from './Reveal';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Dự án tiêu biểu</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Một số sản phẩm phần mềm và công cụ tôi đã xây dựng</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="h-full bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 flex flex-col group hover:-translate-y-2">
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white dark:bg-slate-700 rounded-lg text-primary-600 dark:text-primary-400 shadow-sm">
                      <Folder size={24} />
                    </div>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        title="Xem chi tiết"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-white dark:bg-slate-900 text-gray-600 dark:text-gray-400 rounded-md border border-gray-200 dark:border-slate-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;