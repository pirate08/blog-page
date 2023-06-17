import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CiMenuBurger } from 'react-icons/ci';
import { GrClose } from 'react-icons/gr';

const NavItems = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Contact Us',
    link: '/contact',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='bg-white text-black shadow-md'>
        <div className='container mx-auto px-4 lg:px-14'>
          <div className='h-24 flex items-center justify-between py-4'>
            <Link
              href='/'
              className='text-xl lg:text-2xl font-bold flex items-center'>
              {/* --Logo Image-- */}
              <Image src='/icon.png' height={50} width={50} alt='Logo' />
              {/* --Logo Text-- */}
              <h1>Information Stock</h1>
            </Link>

            <div className='lg:hidden'>
              <button
                className='text-black focus:outline-none text-xl'
                onClick={toggleMenu}
                aria-label='Toggle menu'>
                {isOpen ? <CiMenuBurger /> : <GrClose />}
              </button>
            </div>
            <div
              className={`hidden lg:flex lg:items-center lg:w-auto ${
                isOpen ? 'block' : 'hidden'
              }`}>
              {/* --Desktop View-- */}
              <div className='text-lg lg:flex-grow flex items-center'>
                {NavItems.map((nav_items, index) => (
                  <div key={index}>
                    <Link
                      href={nav_items.link}
                      className='block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-8 cursor-pointer'>
                      {nav_items.name}
                    </Link>
                  </div>
                ))}
                <button className='bg-blue-800 hover:bg-blue-900 text-white px-2 py-2 rounded-sm'>
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* --Mobile View-- */}
      <div className='px-7'>
        {isOpen ? (
          ''
        ) : (
          <div className='h-48 bg-black text-white flex items-center justify-center flex-col gap-3 hover:text-gray-900'>
            {NavItems.map((nav_items, index) => (
              <div key={index}>
                <Link href={nav_items.link} className='cursor-pointer'>
                  {nav_items.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
