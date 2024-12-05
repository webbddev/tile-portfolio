'use client';

import { ABOUT } from '../constants/data';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id='about' className='container mx-auto xl:py-20'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className='my-20 text-center text-4xl lg:text-8xl font-bold'
      >
        About Me
      </motion.h2>
      <div className='flex items-center justify-center'>
        <p className='m-8 font-light sm:w-[80vw] max-w-6xl text-2xl lg:text-[35px] 2xl:text-[40px] leading-tight text-stone-200'>
          {ABOUT}
        </p>
      </div>
    </section>
  );
};
export default About;
