'use client';

import { useEffect, useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { LINKS } from '@/constants/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <nav className='fixed right-0 top-0 z-30 p-4'>
        <button onClick={toggleMenu} className='rounded-md p-2'>
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </nav>

      {isOpen && (
        <div className='fixed inset-0 z-20 flex flex-col items-center justify-center bg-black text-white'>
          <ul className='space-y-6 text-3xl'>
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.name}`}
                  onClick={toggleMenu}
                  className='text-5xl font-semibold uppercase tracking-wide hover:text-lime-300 lg:text-9xl'
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
