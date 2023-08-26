import { About, Contact, Education, Footer, Hero, Navbar, Skills } from '@/components'
import React from 'react'

const Home = () => {
  return (
    <div className='px-1 md:px-5 lg:px-10 xl:px-20'>
    <Navbar />
    <Hero />
    <About />
    <Education />
    <Skills />
    <Contact />
    <Footer />
    </div>
  )
}

export default Home
