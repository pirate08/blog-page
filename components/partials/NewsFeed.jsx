import React from 'react';
import FeedCards from './FeedCards';

const NewsFeed = () => {
  return (
    <div className='w-full mt-4 mx-auto py-10 px-7 md:px-24 bg-gradient-to-b from-white to-gray-500'>
      <div>
        {/* --Title-- */}
        <h1
          className='text-2xl text-gray-500'
          data-aos='fade-right'
          data-aos-delay='400'>
          News Feeds
        </h1>
        <span className='inline-block border-b-2 border-red-600 w-20'></span>
      </div>
      <div className='mt-14'>
        {/* --Feed Page-- */}
        <FeedCards />
      </div>
    </div>
  );
};

export default NewsFeed;
