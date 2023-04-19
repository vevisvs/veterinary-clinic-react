import React, {useState} from 'react'
import './Navbar.css'
import {FaBars} from "react-icons/fa";
import {IoMdClose} from "react-icons/io";

const Navbar = () => {
    const [sidebarMenu, setSidebarMenu] = useState(true);
    
  return (
    <div className='ctn-nav'>
      <h1 className='logo-title'>YourVet</h1>
      <div className='ctn-menu-list'>
        <ul className='desktop-menu'>
            <li>Home</li>
            <li>Servicios</li>
            <li>Veterinarios</li>
            <li>Contacto</li>
        </ul>
      </div>
      <div className='mobile-menu'>
        <FaBars /> 
      </div>
    </div>
  )
}

export default Navbar
