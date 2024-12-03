import { EXPERIENCES } from '../constants/data';

const Work = () => {
  return (
    <section className='p-8' id='experience'>
      <h2 className='my-10 text-center text-3xl lg:text-8xl'>Experience</h2>
      <div className='mx-auto max-w-6xl'>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-16 border-l-2 border-lime-300 pl-8'>
            <div className='flex flex-col gap-2'>
              <h3 className='text-3xl font-semibold'>{experience.company}</h3>
              <div className='flex justify-between items-center'>
                <h4 className='text-xl tracking-wider uppercase text-gray-200'>
                  {experience.role}
                </h4>
                <span className='text-lime-300'>{experience.year}</span>
              </div>
              <p className='mt-4 text-lg text-gray-300 font-sans'>
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
