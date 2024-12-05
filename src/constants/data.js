import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from 'react-icons/fa6';

import project1 from '../assets/project1.webp';
import project2 from '../assets/project2.webp';
import project3 from '../assets/project3.webp';
import project4 from '../assets/project4.webp';
import project5 from '../assets/project5.webp';
import project6 from '../assets/project6.webp';
import project7 from '../assets/project7.webp';
import project8 from '../assets/project8.webp';
import project9 from '../assets/project9.webp';

export const LINKS = [
  { id: 'projects', name: 'projects' },
  { id: 'about', name: 'about' },
  { id: 'experience', name: 'experience' },
  { id: 'contact', name: 'contact' },
];

export const MARQUEE_TEXT =
  'React, Next.js, Node, MongoDb, Tailwind, MySql, Javascript, Redis,';

export const PROJECTS = [
  {
    id: 1,
    title: 'E-commerce Website',
    description:
      'A full-featured e-commerce website built with React and Node.js.',
    imgSrc: project1,
    link: 'https://example.com/ecommerce-website',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    id: 2,
    title: 'Social Media App',
    description:
      'A social media application with real-time chat and notifications.',
    imgSrc: project2,
    link: 'https://example.com/social-media-app',
    technologies: ['HTML', 'CSS', 'Angular', 'Firebase'],
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'A personal portfolio website to showcase projects and skills.',
    imgSrc: project3,
    link: 'https://example.com/portfolio-website',
    technologies: ['HTML', 'CSS', 'React'],
  },
  {
    id: 4,
    title: 'Blog Platform',
    description:
      'A blogging platform with user authentication and content management.',
    imgSrc: project4,
    link: 'https://example.com/blog-platform',
    technologies: ['HTML', 'CSS', 'Vue.js', 'Express', 'mySQL'],
  },
  {
    id: 5,
    title: 'Task Management Tool',
    description: 'A task management tool to organize and prioritize work.',
    imgSrc: project5,
    link: 'https://example.com/task-management-tool',
    technologies: ['HTML', 'CSS', 'Vue.js', 'Express', 'mySQL'],
  },
  {
    id: 6,
    title: 'Online Learning Platform',
    description:
      'An online learning platform offering various courses and resources.',
    imgSrc: project6,
    link: 'https://example.com/online-learning-platform',
    technologies: ['HTML', 'CSS', 'Vue.js', 'Express', 'mySQL'],
  },
  {
    id: 7,
    title: 'Fitness Tracker',
    description: 'A mobile application to track fitness activities and goals.',
    imgSrc: project7,
    link: 'https://example.com/fitness-tracker',
    technologies: ['HTML', 'CSS', 'React'],
  },
  {
    id: 8,
    title: 'Recipe App',
    description: 'An app for browsing and saving various cooking recipes.',
    imgSrc: project8,
    link: 'https://example.com/recipe-app',
    technologies: ['HTML', 'CSS', 'React', 'Redux', 'Firebase'],
  },
  {
    id: 9,
    title: 'Weather Dashboard',
    description:
      'A weather dashboard providing current weather data and forecasts.',
    imgSrc: project9,
    link: 'https://example.com/weather-dashboard',
    technologies: ['HTML', 'CSS', 'React', 'Redux', 'Firebase'],
  },
];
export const ABOUT =
  'As a dedicated Full Stack Developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I excel in building robust and scalable solutions. My expertise includes working with JavaScript frameworks such as React and Node.js, as well as proficiency in databases like MongoDB and SQL. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.';

export const EXPERIENCES = [
  {
    company: 'Google',
    location: 'Mountain View, CA, USA', // Add location here

    role: 'Software Engineer',
    year: '12/2023 - Present',
    description: [
      'Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Enhancing application performance and ensuring high-quality code through rigorous testing and code reviews. Contributing to the continuous improvement of development processes and best practices.',
    ],
    technologies: ['Javascript', 'React.js', 'Next.js', 'mongoDB'],
  },
  {
    company: 'Facebook',
    location: 'Mountain View, CA, USA', // Add location here

    role: 'Frontend Developer',
    year: '01/2021 - 11/2023',
    description: [
      'Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.',
    ],
    technologies: ['Javascript', 'React.js', 'Next.js', 'mongoDB'],
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: 'https://x.com/',
    icon: <FaFacebook fontSize={26} className='hover:opacity-80' />,
  },
  {
    href: 'https://x.com/',
    icon: <FaDiscord fontSize={26} className='hover:opacity-80' />,
  },
  {
    href: 'https://x.com/',
    icon: <FaInstagram fontSize={26} className='hover:opacity-80' />,
  },
  {
    href: 'https://x.com/',
    icon: <FaXTwitter fontSize={26} className='hover:opacity-80' />,
  },
  {
    href: 'https://github.com/',
    icon: <FaGithub fontSize={26} className='hover:opacity-80' />,
  },
  {
    href: 'https://www.linkedin.com/',
    icon: <FaLinkedin fontSize={26} className='hover:opacity-80' />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, I'd love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: 'nikolay.tetradov@gmail.com',
  phone: '+373 (0) 78 369 569)',
};
