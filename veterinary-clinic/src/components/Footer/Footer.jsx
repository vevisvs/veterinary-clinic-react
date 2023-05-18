import React from 'react'
import '../Footer/Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='ctn-footer'>
      <h1>YourVet</h1>
      <div className='footer-info-direction'>
        <p>Eulan Street 0012, New York</p>
        <p>City, USA</p>
        <p>info@yourpet.com</p>
        <p>+1(786)223482</p>
      </div>
      <div className='footer-icons'>
        <BsFacebook />
        <AiFillTwitterCircle />
        <SiGmail />
        <BsLinkedin />
      </div>
    </div>
  )
}

export default Footer
