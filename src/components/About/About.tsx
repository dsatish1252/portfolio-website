import React, { useState, useEffect, useRef } from 'react';
import { aboutData } from '../../data/content';
import { motion, useInView } from 'framer-motion';

interface Category {
  name: string;
  skills: string[];
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface Tab {
  name: string;
  categories?: Category[];
  experiences?: Experience[];
  educations?: Education[];
}

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  // Force re-render when aboutData changes
  useEffect(() => {
    // This will force a re-render when the component mounts
    setActiveTab(prev => prev);
  }, [aboutData]);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-900 dark:to-primary-900/20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={`${aboutData.image}?t=${Date.now()}`}
                  alt="Satish Dasu" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop
                    target.src = 'https://via.placeholder.com/400x400?text=Profile+Image';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-white text-2xl font-bold">Satish Dasu</h3>
                  <p className="text-gray-200">Full Stack Development & Data Science Enthusiast</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {['JavaScript', 'React', 'Node.js', 'Python', 'Data Science'].map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <a 
                  href="#contact" 
                  className="block w-full py-3 text-center bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 text-justify">
              {aboutData.bio}
            </p>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                {aboutData.tabs.map((tab, index) => (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(index)}
                    className={`flex-1 py-4 px-4 text-center font-medium transition-colors ${
                      activeTab === index
                        ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                        : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
              
              <div className="p-6">
                {activeTab === 0 && aboutData.tabs[0].categories && (
                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                  >
                    {aboutData.tabs[0].categories.map((category) => (
                      <div key={category.name} className="mb-6 last:mb-0">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          {category.name}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <motion.span
                              key={skill}
                              variants={staggerItem}
                              className="px-4 py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
                
                {activeTab === 1 && aboutData.tabs[1].experiences && (
                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                  >
                    {aboutData.tabs[1].experiences.map((exp, index) => (
                      <motion.div 
                        key={index}
                        variants={staggerItem}
                        className="mb-6 last:mb-0 border-l-2 border-primary-600 dark:border-primary-400 pl-4"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {exp.title}
                        </h4>
                        <div className="flex justify-between mb-2">
                          <p className="text-primary-600 dark:text-primary-400">{exp.company}</p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.period}</p>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {exp.description}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
                
                {activeTab === 2 && aboutData.tabs[2].educations && (
                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                  >
                    {aboutData.tabs[2].educations.map((edu, index) => (
                      <motion.div 
                        key={index}
                        variants={staggerItem}
                        className="mb-6 last:mb-0 border-l-2 border-primary-600 dark:border-primary-400 pl-4"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <div className="flex justify-between mb-2">
                          <p className="text-primary-600 dark:text-primary-400">{edu.institution}</p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.period}</p>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {edu.description}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;