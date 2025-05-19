import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { Project } from './Projects';
import SocialIcon from '../common/SocialIcon';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    // Disable body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      
      // Re-enable body scroll
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto"
      >
        <div className="relative h-64 sm:h-80 md:h-96">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full text-gray-800 dark:text-white hover:bg-white hover:dark:bg-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          
          <div className="absolute bottom-0 left-0 w-full p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Project Description
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 whitespace-pre-line text-justify">
            {project.description}
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Technologies Used
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {project.tags.map((tag) => (
              <div key={tag} className="flex items-center gap-2">
                <SocialIcon name="CheckCircle" className="text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">{tag}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
            >
              <ExternalLink size={18} />
              View Demo
            </a>
            <a 
              href={project.codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors"
            >
              <Github size={18} />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;