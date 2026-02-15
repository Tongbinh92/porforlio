import React from 'react';
import { SKILLS } from '../constants';
import { Reveal } from './Reveal';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5">
      <div 
        className="bg-primary-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%`, transitionDelay: `${index * 100}ms` }}
      ></div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  const technicalSkills = SKILLS.filter(skill => skill.category === 'technical');
  const toolSkills = SKILLS.filter(skill => skill.category === 'tool');

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Kỹ năng chuyên môn</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Những công cụ và công nghệ tôi sử dụng hàng ngày</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Technical Skills */}
          <Reveal delay={0.2}>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4 dark:border-slate-700">Kỹ thuật & Lập trình</h3>
              {technicalSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </Reveal>

          {/* Tools & Soft Skills */}
          <Reveal delay={0.4}>
             <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4 dark:border-slate-700">Công cụ & Phần mềm</h3>
              {toolSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
              
              <div className="mt-8 pt-6 border-t dark:border-slate-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Kỹ năng khác</h4>
                <div className="flex flex-wrap gap-2">
                  {['Giao tiếp', 'Quản lý thời gian', 'Tư duy logic', 'Tiếng Anh cơ bản'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Skills;