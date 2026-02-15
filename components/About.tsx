import React from 'react';
import { STRENGTHS, PERSONAL_INFO } from '../constants';
import { Reveal } from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Giới thiệu về tôi</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <Reveal delay={0.2}>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Tôi là <strong className="text-primary-600 dark:text-primary-400">{PERSONAL_INFO.name}</strong>, 
                một người đam mê công nghệ và giải quyết vấn đề. Hiện tại, tôi đang tập trung phát triển sự nghiệp trong lĩnh vực 
                IT Support và Helpdesk. 
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Với tư duy logic và sự tỉ mỉ, tôi không chỉ dừng lại ở việc sửa lỗi máy tính mà còn mong muốn xây dựng 
                các giải pháp phần mềm nhỏ, ứng dụng AI để tự động hóa các tác vụ lặp lại, giúp tối ưu hóa hiệu suất 
                làm việc cho bản thân và đồng nghiệp.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.4}>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STRENGTHS.map((strength, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                    <strength.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{strength.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{strength.description}</p>
                </div>
              ))}
             </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default About;