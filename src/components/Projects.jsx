// import { PROJECTS } from '@/constants/data';
// import Image from 'next/image';

// const Projects = () => {
//   return (
//     <section className='p-8' id='projects'>
//       <h2 className='my-10 text-center text-3xl lg:text-8xl'>My Work</h2>
//       <div className='columns-1 gap-4 md:columns-2 lg:columns-3 xl:columns-4'>
//         {PROJECTS.map((project) => (
//           <a
//             key={project.id}
//             href={project.link}
//             target='_blank'
//             rel='noopener noreferrer'
//             className='block'
//           >
//             <div className='group relative mb-4 overflow-hidden rounded-lg bg-white shadow-lg'>
//               <Image
//                 src={project.imgSrc}
//                 alt={project.title}
//                 className='h-auto w-full object-cover'
//               />
//               <div className='absolute bottom-0 left-0 right-0 m-4 p-8 text-white backdrop-blur-md bg-black/20 rounded-lg'>
//                 <h3 className='text-3xl mb-2'>{project.title}</h3>
//                 <p className='max-w-xs text-lg tracking-wider'>{project.description}</p>
//               </div>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

'use client';

import { PROJECTS } from '@/constants/data';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(200px 200px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const border = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (!border.current) return;
      const borderRect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [offsetX, offsetY]);

  return (
    <div className='relative block mb-4'>
      <div className='group relative overflow-hidden rounded-lg bg-white shadow-lg'>
        <Image
          src={project.imgSrc}
          alt={project.title}
          className='h-auto w-full object-cover'
        />
        <motion.div
          className='absolute inset-0 border-2 border-purple-400 rounded-lg'
          style={{
            WebkitMaskImage: maskImage,
            maskImage,
          }}
          ref={border}
        />
        <div className='absolute bottom-0 left-0 right-0 m-4 p-8 text-white backdrop-blur-md bg-black/20 rounded-lg'>
          <h3 className='text-3xl mb-2'>{project.title}</h3>
          <p className='max-w-xs text-lg tracking-wider'>
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className='p-8' id='projects'>
      <h2 className='my-10 text-center text-3xl lg:text-8xl'>My Work</h2>
      <div className='columns-1 gap-4 md:columns-2 lg:columns-3 xl:columns-4'>
        {PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <ProjectCard project={project} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
