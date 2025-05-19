import React, { useState } from 'react';
import SocialIcon from '../common/SocialIcon';

interface ServiceProps {
  service: {
    title: string;
    description: string;
    icon: string;
    details: string[];
  };
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden h-full group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
          <SocialIcon name={service.icon} size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {service.description}
        </p>
        
        <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key features:</h4>
          <ul className="space-y-2">
            {service.details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default ServiceCard;