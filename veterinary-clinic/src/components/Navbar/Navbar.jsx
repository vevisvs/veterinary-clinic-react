import React, {useState} from 'react'
import '../Navbar/Navbar.css'
import {FaBars} from "react-icons/fa";
import {IoMdClose} from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const goHome = () => {
      navigate("/");
    }
    
  return (
    <div className="navbar">
      <h1 className='logo-title' onClick={goHome}>YourVet</h1>
      <div className='icon-bars' onClick={() => setSidebarOpen(true)}><FaBars /></div>
      <div className={`sidebar ${sidebarOpen ? 'open' : 'desktop-version-menu'}`}>
        <div className='icon-close' onClick={() => setSidebarOpen(false)}><IoMdClose /></div>
        <ul className={ sidebarOpen ? 'sidebar-list' : 'menu-list'}>
          <li>Home</li>
          <li>Servicios</li>
          <li>Veterinarios</li>
          <li>Contacto</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
