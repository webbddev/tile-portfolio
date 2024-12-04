import { ABOUT } from '../constants/data';

const About = () => {
  return (
    <section id='about' className='container mx-auto xl:py-20'>
      <h2 className='my-10 text-center text-3xl lg:text-8xl'>About Me</h2>
      <div className='flex items-center justify-center'>
        <p className='m-8 sm:w-[80vw] max-w-6xl text-2xl lg:text-[35px] 2xl:text-[40px] leading-tight text-stone-200'>
          {ABOUT}
        </p>
      </div>
    </section>
  );
};
export default About;
