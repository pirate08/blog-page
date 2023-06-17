import React from 'react'
import NewsFeed from '@/components/partials/NewsFeed'
import Navbar from '@/components/partials/Navbar';
import BlogForPages from '@/components/partials/BlogForPages';
import Footer from '@/components/layout/Footer';

const newsFeed = () => {
  return (
    <div>
      {/* Navbar added-- */}
        <Navbar />
      {/* --Blog-for-pages added */}
        <BlogForPages />
      {/* --News-Feed added */}
        <NewsFeed />
      {/* --Importing Footer */}
        <Footer />
    </div>
  )
}

export default newsFeed;
