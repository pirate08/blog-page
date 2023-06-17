import React from 'react';

const EventCard = () => {
  return (
    <div>
      {/* --Card-1 */}
      <div className='bg-white rounded-lg shadow-md p-4 mb-4'>
        <h2 className='text-xl font-bold'>Weekend Batch Lunch</h2>
        <p className='text-gray-500'>17th June and 2:00 p.m.</p>
        <p className='text-gray-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          architecto.
        </p>
        <div className='flex justify-end'>
          <button className='bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 mt-3'>
            Register
          </button>
        </div>
      </div>
      {/* --Card-2 */}
      <div className='bg-white rounded-lg shadow-md p-4 mb-4'>
        <h2 className='text-xl font-bold'>KID'S FAIR Kolkata'23</h2>
        <p className='text-gray-500'>7th July and 10:00 a.m.</p>
        <p className='text-gray-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          architecto.
        </p>
        <div className='flex justify-end'>
          <button className='bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 mt-3'>
            Register
          </button>
        </div>
      </div>
      {/* --Card-3 */}
      <div className='bg-white rounded-lg shadow-md p-4 mb-4'>
        <h2 className='text-xl font-bold'>East Kolkata Wetland Walks</h2>
        <p className='text-gray-500'>20th August and 10:30 a.m.</p>
        <p className='text-gray-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          architecto.
        </p>
        <div className='flex justify-end'>
          <button className='bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 mt-3'>
            Register
          </button>
        </div>
      </div>
      {/* --Card-4 */}
      <div className='bg-white rounded-lg shadow-md p-4 mb-4'>
        <h2 className='text-xl font-bold'>Live Concerts by Legend</h2>
        <p className='text-gray-500'>19th November and 6:30 p.m.</p>
        <p className='text-gray-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          architecto.
        </p>
        <div className='flex justify-end'>
          <button className='bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 mt-3'>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
