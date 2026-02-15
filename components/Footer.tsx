import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">{PERSONAL_INFO.name}</h3>
            <p className="text-gray-400">{PERSONAL_INFO.role}</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-primary-600">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-primary-600">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-primary-600">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {year} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="mt-2">Designed with passion for IT Support & Development.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;