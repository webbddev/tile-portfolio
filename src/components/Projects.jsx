import { PROJECTS } from '@/constants/data';
import Image from 'next/image';

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
            className='block'
          >
            <div className='group relative mb-4 overflow-hidden rounded-lg bg-white shadow-lg'>
              <Image
                src={project.imgSrc}
                alt={project.title}
                className='h-auto w-full object-cover'
              />
              <div className='absolute bottom-0 left-0 right-0 m-4 p-8 text-white backdrop-blur-md bg-black/20 rounded-lg'>
                <h3 className='text-3xl mb-2'>{project.title}</h3>
                <p className='max-w-xs text-lg tracking-wider'>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
