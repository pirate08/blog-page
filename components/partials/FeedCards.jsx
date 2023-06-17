import React from 'react';
import Image from 'next/image';
import { BsHeadphones } from 'react-icons/bs';

const FeedCards = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full flex-wrap'>
      {/* First Row */}
      <div className='flex-1 flex flex-col mr-3'>
        <div className='flex-1 border-2 border-gray-200 py-5 px-3 cursor-pointer mb-2'>
          {/* --Title */}
          <h1 className='text-xl sm:text-3xl font-bold leading-10'>
            The First Signs of{' '}
            <span className='bg-orange-200 px-1'>Alcholic Liver</span> Damage
            Are Not in the Liver.{' '}
          </h1>
          {/* --Paragraph-- */}
          <p className='mt-4 mb-2 text-md text-gray-500'>
            The combination of my father's death and my personal back ground lit
            a fire in me to know more.
          </p>
          <p className='mt-2 mb-6 text-md text-gray-500'>
            He was admitted to the hospital on June 24,2016
          </p>
          <div className='flex items-center'>
            {/* --Author-- */}
            <Image
              src='/reporter.avif'
              width={60}
              height={20}
              alt='Reporter'
              className='rounded-md mr-2'
            />
            {/* --Name of Author-- */}
            <div>
              <h3 className='text-sm font-bold'>Marina Sherof</h3>
              <h6 className='text-xs'>Reporter</h6>
            </div>
          </div>
        </div>
        <div className='flex-1  border-2 border-gray-200 py-5 px-3 cursor-pointer mb-2'>
          {/* --Second Post-- */}

          {/* --Title */}
          <h1 className='text-xl sm:text-3xl font-bold leading-10'>
            The Founder's Guide to Actually Understanding Users Nowdays.
          </h1>
          {/* --Paragraph-- */}
          <p className='mt-6 mb-2 text-md text-gray-500'>
            By Jonathan O'Connell, Andrew Van Dam Aaron Gregg and Alyssa Fowers.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className='flex-1 border-2 border-gray-200 py-5 px-3 cursor-pointer mb-2 mr-3'>
        {/* --Third Post-- */}
        <div className='flex justify-center'>
          {/* --Image-- */}
          <Image
            src='/thirdpost.avif'
            width={700}
            height={200}
            alt='Billionare'
            className='mb-5'
          />
        </div>
        {/* --Title */}
        <h1 className='text-xl sm:text-3xl font-bold leading-10'>
          How 7 Lines of Code Turned Into a $36 Billion Empire.
        </h1>
        {/* --Paragraph-- */}
        <p className='mt-4 mb-9 text-md text-gray-500'>
          Yeah, it's safe to say these guys have a great sense of humuor. Which
          isn't really surprising for us, considering their seemingly absurd
          solution to online payments. Instead of chasing 1000-hour programming
          contracts to build clunky payments solution for each individual
          client, the Collison.
        </p>

        <div className='flex items-center'>
          {/* --Author-- */}
          <Image
            src='/editor.avif'
            width={60}
            height={20}
            alt='Editor'
            className='rounded-md mr-2'
          />
          {/* --Name of Author-- */}
          <div>
            <h3 className='text-sm font-bold'>James Robert</h3>
            <h6 className='text-xs'>Editor</h6>
          </div>
        </div>
      </div>

      {/* Third and Fourth Rows */}
      <div className='flex-1 flex flex-col mr-3'>
        <div className='flex-1 border-2 border-gray-200 py-5 px-3 cursor-pointer mb-2'>
          {/* --Fourth Post-- */}
          <div className='flex justify-center'>
            {/* --Image-- */}
            <Image
              src='/fourthpost.avif'
              width={700}
              height={200}
              alt='Man in Black'
              className='mb-5'
            />
          </div>
          {/* --Title */}
          <h1 className='text-xl sm:text-2xl font-bold leading-10'>
            To Become <span className='bg-blue-100 px-1'>Happier</span> Ask
            Yourself These Two Questions Every Night.{' '}
          </h1>
          {/* --Paragraph-- */}
          <p className='mt-4 mb-2 text-md text-gray-500'>
            By Jonathon O'Connell
          </p>
        </div>
        <div className='flex-1 border-2 border-gray-200 py-5 px-3 cursor-pointer mb-2'>
          {/* --Fifth Post-- */}
          <div className='flex justify-center'>
            {/* --Image-- */}
            <Image
              src='/fifthpost.avif'
              width={700}
              height={200}
              alt='Nature'
              className='mb-5'
            />
          </div>
          {/* --Title */}
          <h1 className='text-xl sm:text-2xl font-bold leading-10'>
            10 Things I Stole From People Smarter Than Me.
          </h1>
          {/* --Paragraph-- */}
          <p className='mt-4 mb-2 text-md text-gray-500'>
            By Jonathon O'Connell
          </p>
        </div>
      </div>

      {/* Sixth and Seventh Rows */}
      <div className='flex-1 flex flex-col'>
        <div className='flex-1 border-2 border-gray-200 py-5 px-3 cursor-pointer mb-2'>
          {/* --Sixth Post-- */}
          {/* --Title */}
          <h1 className='text-xl sm:text-2xl font-bold leading-10'>
            Traveller Visiting Ice Cave With Amazing Eye-catching Scences.
          </h1>
          {/* --Paragraph-- */}
          <p className='mt-4 mb-3 text-md text-gray-500'>
            Slack has become indispensable for many businesses operating
            remotely during the pandemic. Here's what the acquisition could mean
            for users...
          </p>
          <div className='flex items-center'>
            {/* --Author-- */}
            <Image
              src='/editor.avif'
              width={60}
              height={20}
              alt='Editor'
              className='rounded-md mr-2'
            />
            {/* --Name of Author-- */}
            <div>
              <h3 className='text-sm font-bold'>James Robert</h3>
              <h6 className='text-xs'>Editor</h6>
            </div>
          </div>
        </div>
        <div className='flex-1 border-2 border-gray-200 py-5 px-3 cursor-pointer mb-2'>
          {/* --Seventh Post-- */}
          {/* --More info-- */}
          <div className='flex gap-1'>
            <span className='text-lg mt-1'>
              <BsHeadphones />
            </span>
            <h4 className='mb-3 font-bold'>Post Reports/Podcast</h4>
          </div>
          {/* --Title */}
          <h1 className='text-xl sm:text-2xl font-bold leading-10'>
            Things to Do After 6 P.M. Will Enrich{' '}
            <span className='bg-yellow-200 px-1'>Your Life.</span>
          </h1>
          {/* --Paragraph-- */}
          <p className='mt-4 mb-4 text-md text-black font-bold'>
            Apple Podcasts, Google Prodacts,stitcher
          </p>
          <div className='flex items-center'>
            {/* --Author-- */}
            <Image
              src='/reporter.avif'
              width={60}
              height={20}
              alt='Reporter'
              className='rounded-md mr-2'
            />
            {/* --Name of Author-- */}
            <div>
              <h3 className='text-sm font-bold'>Marina Sherof</h3>
              <h6 className='text-xs'>Reporter</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCards;
