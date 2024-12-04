import { LuImport } from 'react-icons/lu';
// import bensonImg from '../assets/benson.webp';
import nikoImg from '../assets/2.jpg';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='mt-16 overflow-hidden text-[15vw] sm:text-[12vw] font-semibold uppercase leading-none mb-2'>
          Nicholas <br /> Tetradov
        </h1>
        {/* <h3 className='bg-gradient-to-r from-stone-200 to-stone-400 bg-clip-text text-[25px] md:text-[2vw] tracking-normal font-normal text-transparent'>
          Full Stack Developer
        </h3> */}
        <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
          <div className='flex items-center gap-4 text-xl'>
            <a
              href='https://www.linkedin.com/in/yourusername'
              target='_blank'
              rel='noreferrer'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </a>
            <a
              href='https://github.com/yourusername'
              target='_blank'
              rel='noreferrer'
              aria-label='GitHub'
            >
              <FaGithub />
            </a>
            <a
              href='https://instagram.com/yourusername'
              target='_blank'
              rel='noreferrer'
              aria-label='Instagram'
            >
              <FaInstagram />
            </a>
            <a
              href='https://x.com/yourusername'
              target='_blank'
              rel='noreferrer'
              aria-label='X (Twitter)'
            >
              <FaXTwitter />
            </a>
          </div>
          <a
            href='/Benson-Langford.pdf'
            target='_blank'
            rel='noopener noreferrer'
            download={true}
            className='flex items-center rounded-lg bg-lime-300 py-[2px] px-[16px] font-sans font-medium text-black hover:bg-lime-400'
          >
            <span className='bg-gradient-to-r from-stone-800 to-stone-950 bg-clip-text text-lg font-light tracking-wide text-transparent'>
              Download CV
            </span>{' '}
            <LuImport className='ml-2 h-5 w-5' />
          </a>
        </div>
        <div className='w-full'>
          <Image
            src={nikoImg}
            alt='Nicholas Tetradov'
            className='mt-8 h-96 w-full object-cover object-[center_40%]'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
