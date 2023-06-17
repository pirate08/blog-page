import React from 'react';

const JobCard = ({ title, description, requirements }) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-4 mb-3'>
      {/* --Job Card-- */}
      <h2 className='text-xl font-bold mb-2'>{title}</h2>
      <p className='text-gray-700 mb-4'>{description}</p>
      <h3 className='text-lg font-bold mb-2'>Requirements</h3>
      <ul className='list-disc ml-6'>
        {requirements.map((requirement, index) => (
          <li key={index} className='text-gray-700'>
            {requirement}
          </li>
        ))}
      </ul>
      <button className='bg-yellow-400 hover:bg-yellow-500 text-white rounded-md px-4 py-2 mt-4'>
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
