import MainBlog from '@/components/partials/MainBlog'
import Navbar from '@/components/partials/Navbar'
import React from 'react'

const blog = () => {
  return (
    <div>
      {/* --Navbar-- */}
      <Navbar />
      {/* --HomePage-- */}
      <MainBlog />
    </div>
  )
}

export default blog
