'use client';

import { EXPERIENCES } from '../constants/data';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    // Main container - centers content on medium screens and up
    <section className=' pb-4 flex flex-col md:flex md:items-center md:justify-center md:min-h-screen'>
      {/* Section Title with animation */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className='my-20 text-center text-4xl lg:text-8xl font-bold'
      >
        Experience
      </motion.h2>

      {/* Experience Cards Container */}
      <div className='mx-auto max-w-6xl'>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className='flex flex-wrap lg:justify-center space-x-4 xl:space-x-8 p-4'
          >
            {/* Year Display - Animated */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4'
            >
              <p className='mb-2 text-md text-stone-400'>{experience.year}</p>
            </motion.div>

            {/* Experience Details Container - Animated */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='flex-1 w-[70vw] lg:w-3/4 m-8'
            >
              {/* Role and Company */}
              <div className='flex items-center'>
                <h3 className='mb-2 font-semibold text-[20px] flex items-center font-oswald'>
                  {experience.role} -{' '}
                  <span className='text-stone-400 font-medium'>
                    {experience.company}
                  </span>
                </h3>
              </div>

              {/* Location and Description */}
              <p className='mb-2 text-xl text-stone-400 italic'>
                {experience.location}
              </p>
              <p className='mb-4 text-stone-400 text-[16px] md:text-[17px] 2xl:text-[18px] font-lighter font-merriweather'>
                {experience.description}
              </p>

              {/* Technology Tags */}
              {experience.technologies &&
                experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='mr-2 mt-4 rounded bg-stone-700/40 px-2 py-1 text-sm font-medium text-stone-300'
                  >
                    {tech}
                  </span>
                ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
