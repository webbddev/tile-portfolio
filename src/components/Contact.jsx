import { CONTACT, SOCIAL_MEDIA_LINKS } from '../constants/data';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='mx-auto max-w-6xl'>
        <h2 className='my-10 text-center text-3xl lg:text-8xl'>
          Interested In Working Together?
        </h2>
        <p className='p-4 text-center text-xl font-sans tracking-tight'>
          {CONTACT.text}
        </p>
        <p className='my-4 text-center text-2xl font-medium text-lime-300 lg:pt-6 lg:text-5xl'>
          {CONTACT.email}
        </p>
        <p className='my-4 text-center text-2xl font-medium text-lime-300 lg:pb-6 lg:pt-3 lg:text-5xl'>
          {CONTACT.phone}
        </p>
      </div>
      {/* social media icons */}
      <div className='mt-20 mb-8 flex items-center justify-center gap-8'>
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            className='cursor-pointer hover:scale-125 transition-duration-300'
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
