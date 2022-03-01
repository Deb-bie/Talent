import React from 'react'
import Hero from '../../components/hero/hero';
import Navbar from '../../components/navbar/navbar';
import Packages from '../../components/packages/packages';




const Home = () => {
  return (
    <div>
       <Navbar />

       <Hero />

       <Packages />
    </div>
  )
}

export default Home;



