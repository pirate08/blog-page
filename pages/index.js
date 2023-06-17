import React from 'react'
import Header from '@/components/layout/Header';
import MainBody from '@/components/layout/MainBody';
import { Roboto } from 'next/font/google'
import Footer from '@/components/layout/Footer';
 
const roboto = Roboto({
  weight: ['100','400','700'],
  subsets: ['latin'],
  display: 'swap',
})

const Home = () => {
  return (
    <div className={roboto.className}>
      {/* --Importing Header-- */}
      <Header />
      {/* --Importing MainBody-- */}
      <MainBody />
      {/* --Importing Footer */}
      <Footer />
    </div>
  )
}

export default Home;
