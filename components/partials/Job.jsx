import React from 'react';
import JobCard from './JobCard';

const Job = () => {
  const jobs = [
    {
      title: 'Job Title 1',
      description: 'Job Description 1',
      requirements: ['Requirement 1', 'Requirement 2', 'Requirement 3'],
    },
    {
      title: 'Job Title 2',
      description: 'Job Description 2',
      requirements: ['Requirement 1', 'Requirement 2', 'Requirement 3'],
    },
    {
      title: 'Job Title 2',
      description: 'Job Description 2',
      requirements: ['Requirement 1', 'Requirement 2', 'Requirement 3'],
    },
    {
      title: 'Job Title 2',
      description: 'Job Description 2',
      requirements: ['Requirement 1', 'Requirement 2', 'Requirement 3'],
    },
    {
      title: 'Job Title 2',
      description: 'Job Description 2',
      requirements: ['Requirement 1', 'Requirement 2', 'Requirement 3'],
    },
  ];

  return (
    <div className='w-full mt-4 mx-auto py-10 px-7 md:px-24 bg-gradient-to-b from-white to-gray-500'>
      {jobs.map((job, index) => (
        // --Job Card displaying here--
        <JobCard
          key={index}
          title={job.title}
          description={job.description}
          requirements={job.requirements}
        />
      ))}
    </div>
  );
};

export default Job;
