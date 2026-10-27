import React from 'react'
import Navbar from '../component/home/Navbar'
import Hero from '../component/home/Hero'
import Hero2 from '../component/home/Hero2'
import Hero3 from '../component/home/Hero3'
import Hero4 from '../component/home/Hero4'
import Hero5 from '../component/home/Hero5'
import Portfolio from '../component/home/Portfolio'
import Blogs from '../component/home/Blogs'
import Footer from '../component/home/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Portfolio />
      <Blogs />
    </>
  )
}

export default Home
