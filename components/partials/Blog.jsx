import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import LatestBlog from './LatestBlog';

const BlogPage = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });
  return (
    <div className='w-full mx-auto py-10 px-4 md:px-24 bg-gradient-to-b from-sky-200 to-sky-50'>
      <div>
        {/* --Title-- */}
        <h1
          className='text-2xl md:text-4xl mb-6 font-bold'
          data-aos='fade-right'
          data-aos-delay='300'>
          The Help Scout Blog
        </h1>
        {/* --Paragraph-- */}
        <p
          className='md:text-2xl font-normal text-gray-500 w-full md:w-3/4 lg:w-2/4'
          data-aos='fade-right'
          data-aos-delay='400'>
          Get tips and advice on delivering exceptional customer service,
          engaging and delighting your customers, and building a
          customer-centric company.
        </p>
      </div>
      {/* --Tab Part-- */}
      <div
        className='mt-20 flex flex-wrap justify-center gap-2 md:gap-7 sm:px-0'
        data-aos='fade-down'
        data-aos-delay='300'>
        <Link href='/news-feed'>
          <button className='text-white bg-blue-800 px-3 py-1 rounded-lg hover:bg-blue-900 text-xs sm:text-lg'>
            News Feeds
          </button>
        </Link>
        <Link href='/upcoming-events'>
          <button className='text-white bg-blue-800 px-3 py-1 rounded-lg hover:bg-blue-900 text-xs sm:text-lg'>
            Upcoming Events
          </button>
        </Link>
        <Link href='/job'>
          <button className='text-white bg-blue-800 px-3 py-1 rounded-lg hover:bg-blue-900 text-xs sm:text-lg'>
            Jobs
          </button>
        </Link>
      </div>
      {/* --Sub-Tab Part-- */}
      <div
        className='mt-14 flex flex-wrap justify-center gap-2 md:gap-7 sm:px-0'
        data-aos='fade-down'
        data-aos-delay='300'>
        <button className='text-white bg-gray-800 px-4 py-1 rounded-lg hover:bg-gray-900 text-xs sm:text-md'>
          All
        </button>
        <button className='text-white bg-gray-800 px-4 py-1 rounded-lg hover:bg-gray-900 text-xs sm:text-md'>
          Software & Technology
        </button>
        <button className='text-white bg-gray-800 px-4 py-1 rounded-lg hover:bg-gray-900 text-xs sm:text-md'>
          Tips & Templates
        </button>
        <button className='text-white bg-gray-800 px-4 py-1 rounded-lg hover:bg-gray-900 text-xs sm:text-md'>
          Carrires
        </button>
        <button className='text-white bg-gray-800 px-4 py-1 rounded-lg hover:bg-gray-900 text-xs sm:text-md'>
          The Supportive
        </button>
      </div>

      {/* --Latest Blog-- */}
      <div className='mt-20'>
        <LatestBlog />
      </div>
    </div>
  );
};

export default BlogPage;
