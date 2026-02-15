import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight, Download } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <Reveal>
            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2 text-lg">
              Xin chào, tôi là
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {PERSONAL_INFO.name}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
              {PERSONAL_INFO.role}
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </Reveal>
          
          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#projects"
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-primary-500/30 flex items-center justify-center gap-2"
              >
                Xem dự án <ArrowRight size={20} />
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-slate-600 hover:border-primary-500 dark:hover:border-primary-500 rounded-full font-medium transition-all flex items-center justify-center gap-2"
              >
                Liên hệ tôi
              </a>
            </div>
          </Reveal>
        </div>

        {/* Image Content */}
        <div className="flex-1 flex justify-center z-10 relative">
          <Reveal delay={0.2}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-primary-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <img 
                src={PERSONAL_INFO.avatarUrl} 
                alt={PERSONAL_INFO.name} 
                className="rounded-full w-full h-full object-cover border-4 border-white dark:border-slate-700 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
              />
              
              {/* Decorative floating badges */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg animate-bounce delay-700">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg animate-bounce delay-1000">
                <span className="text-2xl">🤖</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;