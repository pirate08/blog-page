import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import BlogCard from './BlogCard';

const LatestBlog = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });
  return (
    <div>
      <div>
        {/* --Title-- */}
        <h1
          className='text-2xl text-gray-500'
          data-aos='fade-right'
          data-aos-delay='400'>
          Latest Blog
        </h1>
        <span className='inline-block border-b-2 border-red-600 w-20'></span>
      </div>
      {/* --Latest BlogCard-- */}
      <div className='mt-14'>
        <BlogCard />
      </div>
    </div>
  );
};

export default LatestBlog;
