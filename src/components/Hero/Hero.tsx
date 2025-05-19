import React, { useEffect, useRef } from 'react';
import { heroData } from '../../data/content';
import { ArrowDown } from 'lucide-react';
import SocialIcon from '../common/SocialIcon';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      const image = heroRef.current.querySelector('.hero-image') as HTMLElement;
      const content = heroRef.current.querySelector('.hero-content') as HTMLElement;
      
      if (image && content) {
        image.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
        content.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden" ref={heroRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800"></div>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[length:40px_40px]"></div>
      
      <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40 flex flex-col lg:flex-row items-center z-20">
        <div className="hero-content flex-1 text-center lg:text-left mb-16 lg:mb-0 lg:pr-8">
          <p className="text-primary-100 font-medium mb-4 opacity-0 animate-fade-in" style={{animationDelay: '0.2s'}}>
            {heroData.intro}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 opacity-0 animate-fade-in" style={{animationDelay: '0.4s'}}>
            Hi, I'm <span className="text-secondary-300">{heroData.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-white mb-8 opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
            {heroData.title}
          </h2>
          
          <div className="flex justify-center lg:justify-start gap-4 mb-8 opacity-0 animate-fade-in" style={{animationDelay: '0.8s'}}>
            {heroData.socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label={link.name}
              >
                <SocialIcon name={link.icon} />
              </a>
            ))}
          </div>
          
          <div className="flex justify-center lg:justify-start gap-4 opacity-0 animate-fade-in" style={{animationDelay: '1s'}}>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white text-primary-600 font-medium rounded-full transition-all duration-300 hover:bg-primary-50 hover:scale-105 shadow-lg"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              View Projects
            </a>
          </div>
        </div>
        
        <div className="hero-image relative flex-1 flex justify-center lg:justify-end opacity-0 animate-fade-in" style={{animationDelay: '1.2s'}}>
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img 
              src={heroData.image} 
              alt={heroData.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-700/20 rounded-full"></div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;