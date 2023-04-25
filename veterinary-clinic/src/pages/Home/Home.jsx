import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components//Navbar/Navbar'
import Services from '../../components/Services/Services'
import Information from '../../components/Information/Information'
import Comments from '../../components/Comments/Comments'
import Vets from '../../components/Vets/Vets'
import Blog from '../../components/Blog/Blog'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Services />
        <Information />
        <Comments />
        <Vets />
        <Blog />
    </div>
  )
}

export default Home
