import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/blog');
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.log('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);

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
      {/* --BlogPosts-- */}
      {postData.map((post) => (
        <div key={post.id}>
          <div
            className='border-2 border-blue-200 px-8 py-4 mb-8 cursor-pointer '
            data-aos='fade-right'
            data-aos-delay='400'>
            <div className='flex lg:flex-row flex-col gap-14'>
              <div>
                <Image
                  src={post.image}
                  width={700}
                  height={400}
                  alt='Latest-Blog-1'
                  className='hover:scale-110 ease-in-out duration-300 cursor-pointer h-full flex items-center rounded-lg'
                />
              </div>
              <div>
                <h1 className='text-2xl text-gray-500 mb-3'>{post.title}</h1>
                <p className='text-sm text-gray-500'>{post.description}</p>
                <div className='mt-3 mb-2 text-sm text-gray-500'>
                  <h3>{post.date}</h3>
                  <h3 className='text-red-700 uppercase mt-2'>{post.status}</h3>
                </div>
              </div>
            </div>
            {/* --Read More Option-- */}
            <div>
              <Link
                href='/blog'
                className='float-right text-md bg-green-800 hover:bg-green-900 text-white px-3 py-1 rounded-md'>
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
