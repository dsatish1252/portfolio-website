// Content data for the portfolio
export const navLinks = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Services', path: '#services' },
  { name: 'Projects', path: '#projects' },
  { name: 'Contact', path: '#contact' },
];

export const heroData = {
  intro: 'Full Stack Development & Data Science Enthusiast',
  name: 'Satish Dasu',
  title: 'Passionate IT Graduate',
  image: '/images/profile.png',
  socialLinks: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/satish-dasu-3599b2265/', icon: 'Linkedin' },
    { name: 'GitHub', url: 'https://github.com/dsatish1252', icon: 'Github' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/satish_dasu/', icon: 'LeetCode' },
  ],
};

export const aboutData = {
  bio: 'I am a passionate developer with hands-on experience in both web development and data science. I build full-stack web applications using technologies like React, Node.js, Express.js, MongoDB, and PostgreSQL. Alongside my web development expertise, I also have strong knowledge in data science, including Python, pandas, scikit-learn, and data visualization tools. I have worked on projects involving machine learning, data analysis, and AI-driven solutions, demonstrating my ability to extract insights and build intelligent applications. My goal is to combine the power of data science and web development to create impactful digital experiences.',
  image: './images/profile.png',
  tabs: [
    {
      name: 'Skills',
      categories: [
        {
          name: 'Programming Languages',
          skills: ['JavaScript', 'Python', 'Java', 'C/C++', 'HTML', 'CSS', 'SQL'],
        },
        {
          name: 'Web Development',
          skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Bootstrap'],
        },
        {
          name: 'Tools and IDEs',
          skills: ['VS Code', 'PyCharm', 'Jupyter Notebook', 'Git', 'GitHub'],
        },
        {
          name: 'Data Science Skills',
          skills: ['scikit-learn', 'pandas', 'NumPy', 'Machine Learning', 'Data Visualization', 'Data Cleaning', 'Data Analysis'],
        },
      ],
    },
    {
      name: 'Experience',
      experiences: [
        {
          title: 'Full Stack Developer',
          company: 'Datavalley',
          period: 'Jun 2024 - Aug 2024',
          description: 'Developing and maintaining web applications using React.js, Node.js, and MongoDB. Implemented RESTful APIs and improved application performance.',
        },
        {
          title: 'Data Science Intern',
          company: 'SkillDzire',
          period: 'Dec 2024 - Apr 2025',
          description: 'Worked on data analysis projects using Python, pandas, and scikit-learn. Developed predictive models and created data visualizations.',
        },
      ],
    },
    {
      name: 'Education',
      educations: [
        {
          degree: 'Information Technology',
          institution: 'Andhra Loyola Institute of Engineering and Technology',
          period: '2021 - 2025',
          description: 'Focused on software development, data structures, and web technologies with strong academic performance.',
        },
        {
          degree: 'Intermediate',
          institution: 'Sri Chaitanya Junior College',
          period: '2019 - 2021',
          description: 'Studied Mathematics, Physics, and Chemistry with a solid foundation in analytical and problem-solving skills.',
        },
        {
          degree: 'SSC 10th Standard',
          institution: 'Fr. Bianchi (EM) High School',
          period: '2018 - 2019',
          description: 'Built a strong base in core subjects including Science, Mathematics, and English with consistent academic excellence.',
        },
      ],
    },
  ],
};

export const servicesData = [
  {
    title: 'Web Development',
    description: 'I can build responsive, modern websites using MERN Stack.',
    icon: 'Code',
    details: [
      'Full-stack web applications',
      'Responsive design',
      'API development',
      'Single Page Applications',
      'E-commerce solutions',
    ],
  },
  {
    title: 'Front End Development',
    description: 'I can build beautiful user interfaces using React.js, Bootstrap, Chakra UI and Material UI.',
    icon: 'Layout',
    details: [
      'Modern UI/UX design',
      'Component-based architecture',
      'State management',
      'Animation and interactions',
      'Cross-browser compatibility',
    ],
  },
  {
    title: 'Back End Development',
    description: 'I can build solid server-side applications using Node.js and Express.js.',
    icon: 'Server',
    details: [
      'RESTful API development',
      'Database design',
      'Authentication systems',
      'Server deployment',
      'Performance optimization',
    ],
  },
  {
    title: 'Data Science',
    description: 'I can analyze data, build predictive models, and extract insights using Python, pandas, and machine learning tools.',
    icon: 'BarChart',
    details: [
      'Data analysis and cleaning',
      'Machine learning models',
      'Data visualization',
      'Statistical analysis',
      'Predictive modeling',
    ],
  },
];

export const projectsData = [
  {
    id: 1,
    title: 'AI-Driven Resume Enhancer',
    description: 'An intelligent web application designed to enhance resumes by leveraging Natural Language Processing (NLP) techniques. It analyzes and extracts relevant information such as skills, education, and experience from uploaded resumes to assess and categorize the candidate\'s profile.\n\nBuilt with Python and Streamlit, this app is beneficial for both job seekers looking to optimize their resumes and recruiters aiming to speed up the shortlisting process. It also recommends relevant courses and skills to bridge gaps between a candidate\'s current capabilities and their targeted roles.',
    image: '/images/resume_project.jpeg',
    tags: ['Python','NLP', 'spaCy', 'Streamlit', 'scikit-learn', 'NLTK', 'pandas'],
    demoLink: 'https://resume-parser-app-satishdasu.streamlit.app/',
    codeLink: 'https://github.com/dsatish1252/Final_Year_Project',
  },
  {
    id: 2,
    title: 'Crop Recommendation System',
    description: 'This project provides farmers with intelligent recommendations for the most suitable crops to grow based on multiple parameters like soil nutrients (NPK), pH levels, temperature, humidity, and rainfall. By integrating machine learning models trained on agricultural datasets, the application can deliver accurate and data-driven crop suggestions that optimize yield and sustainability.\n\nThe solution, developed using Python and Streamlit, enables real-time user interaction and inputs, making it accessible and user-friendly. It helps improve agricultural productivity and decision-making, especially for farmers with limited access to agronomic advice.',
    image: '/images/crop_recommendation_project.jpeg',
    tags: ['Python', 'scikit-learn', 'Random Forest', 'Streamlit', 'Plotly', 'NumPy'],
    demoLink: 'https://acrop-recommendation-system-satishdasu.streamlit.app/',
    codeLink: 'https://github.com/dsatish1252/crop-recommendation',
  },
  {
    id: 3,
    title: 'Note Taking Application',
    description: 'A full-stack, multi-user note-taking app that allows users to securely create, read, update, and delete personal notes. The app supports user authentication and real-time updates, ensuring data persistence through PostgreSQL and seamless API communication with a Node.js and Express.js backend.\n\nReact.js with Material UI is used to deliver a clean and interactive frontend experience. This application is designed with productivity and simplicity in mind, enabling users to manage their notes across sessions and devices.',
    image: '/images/note_taking_project.jpg',
    tags: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Material UI'],
    demoLink: 'https://github.com/dsatish1252/note-taking-app',
    codeLink: 'https://github.com/dsatish1252/note-taking-app',
  },
  {
    id: 4,
    title: 'Image Colorization Application',
    description: 'An AI-powered application that breathes life into black-and-white images by adding realistic color using deep learning and computer vision techniques. It utilizes convolutional neural networks (CNNs) and OpenCV to transform grayscale images into naturally colored versions, maintaining structural integrity and texture.\n\nBuilt with Streamlit for an intuitive UI, this project serves as a powerful tool for photographers, historians, and content creators looking to restore old photos or reimagine grayscale visuals. The seamless upload and visualization flow makes the colorization process accessible to non-technical users as well.',
    image: '/images/image_colorizer_project.jpeg',
    tags: ['Python', 'PyTorch', 'OpenCV', 'Streamlit'],
    demoLink: 'https://image-colorization-application-satishdasu.streamlit.app/',
    codeLink: 'https://github.com/dsatish1252/Image-Colorization',
  },
  {
    id: 5,
    title: 'Online Code Compiler',
    description: 'A browser-based IDE that supports the compilation and execution of code in multiple programming languages such as C, C++, Java, and Python. It offers features like syntax highlighting, real-time output display, and collaborative coding, empowering developers to write and run code instantly without needing local setup.\n\nThis tool is ideal for students, educators, and professionals looking for a lightweight and accessible development environment. Built using React.js, Node.js, Express.js, and PostgreSQL, it\'s scalable, responsive, and ready for extension into a collaborative coding platform with chat and version control features.',
    image: '/images/online_code_compile_project.jpeg',
    tags: ['React.js', 'Node.js', 'Express.js', 'WebSocket', 'Monaco Editor', 'Redis'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'A sleek, responsive portfolio website built using React and Tailwind CSS to showcase my projects, technical skills, and achievements in a clean and organized layout. Designed for high performance and fast load times using the Vite build tool, the site offers smooth navigation, animations, and a fully responsive design across devices.\n\nThis site serves as a personal brand hub and is ideal for recruiters or collaborators seeking to explore my work. It features detailed project showcases, links to live demos and repositories, and a contact section for inquiries or professional connections.',
    image: '/images/portfolio_project.jpeg',
    tags: ['React', 'Tailwind CSS', 'Vite', 'TypeScript'],
    demoLink: '#',
    codeLink: '#',
  }
];

export const contactData = {
  email: 'satish@example.com',
  phone: '+91 7981500979',
  address: 'Gudivada, Andhra Pradesh, India',
  socials: [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'Facebook' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
  ],
};
