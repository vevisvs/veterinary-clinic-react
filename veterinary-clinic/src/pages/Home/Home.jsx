import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Header/Navbar/Navbar'
import Services from '../../components/Header/Services/Services'
import Information from '../../components/Information/Information'
import Comments from '../../components/Comments/Comments'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Services />
        <Information />
        <Comments />
    </div>
  )
}

export default Home
