import React from 'react'
import UpcomingEvents from '@/components/partials/UpcomingEvents';
import Navbar from '@/components/partials/Navbar';
import BlogForPages from '@/components/partials/BlogForPages';
import Footer from '@/components/layout/Footer';

const upcomingEvents = () => {
  return (
    <div>
      {/* Navbar added-- */}
        <Navbar />
      {/* --Blog-for-all-pages added */}
        <BlogForPages />
      {/* --Upcoming Events--  */}
        <UpcomingEvents />
      {/* --Importing Footer */}
        <Footer />
    </div>
  )
}

export default upcomingEvents;