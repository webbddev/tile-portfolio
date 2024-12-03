import { LuImport } from 'react-icons/lu';
import bensonImg from '../assets/benson.webp';
import nikoImg from '../assets/8.jpg';
import Image from 'next/image';

const Hero = () => {
  return (
    <section>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none'>
          Alevtina <br /> Gordienko
        </h1>
        <div className='mt-8'>
          <a
            href='/public/Benson-Langford.pdf'
            target='_blank'
            rel='noopener noreferrer'
            download={true}
            className='flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400'
          >
            <span>Download CV</span>
            <LuImport className='ml-2 h-5 w-5' />
          </a>
        </div>
        <div className='w-full'>
            <Image src={nikoImg} alt="benson" className='mt-8 h-96 w-full object-cover' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
