import React from 'react'
import Navbar from '@/components/partials/Navbar';
import BlogForPages from '@/components/partials/BlogForPages';
import Footer from '@/components/layout/Footer';
import Job from '@/components/partials/Job';

const job = () => {
  return (
    <div>
    {/* Navbar added-- */}
      <Navbar />
    {/* --Blog-for-pages added */}
      <BlogForPages />
    {/* --News-Feed added */}
      <Job />
    {/* --Importing Footer */}
      <Footer />
  </div>
  )
}

export default job;
