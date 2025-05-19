import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">
          &copy; {currentYear} Satish Dasu. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm">
          Designed and developed with <span className="text-primary-500">❤</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;