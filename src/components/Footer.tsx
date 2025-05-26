import React from 'react';
import { Leaf, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Leaf className="h-8 w-8 text-yellow-400 mr-2" />
            <span className="text-2xl font-bold">PapayaBuddy</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#home" className="hover:text-yellow-300 transition-colors">
              Home
            </a>
            <a href="#scope" className="hover:text-yellow-300 transition-colors">
              Project
            </a>
            <a href="#methodology" className="hover:text-yellow-300 transition-colors">
              Research
            </a>
            <a href="#team" className="hover:text-yellow-300 transition-colors">
              Team
            </a>
            <a href="#contact" className="hover:text-yellow-300 transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-green-800 pt-8 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-300">About The Project</h4>
            <p className="text-green-100 text-sm">
              PapayaBuddy is a research project conducted at the Sri Lanka Institute of 
              Information Technology aimed at enhancing agricultural practices through 
              machine learning technologies.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-300">Research Areas</h4>
            <ul className="text-green-100 text-sm space-y-2">
              <li>Deep Learning</li>
              <li>Computer Vision</li>
              <li>Mobile Application Development</li>
              <li>Agricultural Technology</li>
              <li>Plant Pathology</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-300">Acknowledgements</h4>
            <p className="text-green-100 text-sm">
              This research was supported by grants from the Fruit Research and Development Institute 
              and technical assistance from the Department of Agriculture. Special thanks to the 
              farmers who participated in field testing.
            </p>
          </div>
        </div>
        
        <div className="mt-12 border-t border-green-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-300 text-sm">
            © 2024 PapayaBuddy Research Team. All rights reserved.
          </p>
          
          <p className="text-green-300 text-sm mt-4 md:mt-0 flex items-center">
            Made with 
            <Heart className="h-4 w-4 text-red-400 mx-1" />
            at SLIIT, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;