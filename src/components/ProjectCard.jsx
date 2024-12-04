'use client';

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
          className='h-full w-auto object-cover'
        />
        <motion.div
          className='absolute inset-0 border-4 border-purple-400 rounded-lg'
          style={{
            WebkitMaskImage: maskImage,
            maskImage,
          }}
          ref={border}
        />
        <div className='absolute bottom-0 left-0 right-0 m-2 p-8 text-white backdrop-blur-md bg-black/20 rounded-lg'>
          <h3 className='text-3xl mb-2'>{project.title}</h3>
          <p className='max-w-xs text-lg tracking-wider mb-4'>
            {project.description}
          </p>
          <div className='flex flex-wrap gap-2'>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className='rounded bg-black/10 px-3 py-1 text-base font-light backdrop-blur-xl border-[0.5px] border-white/60 tracking-wider'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
