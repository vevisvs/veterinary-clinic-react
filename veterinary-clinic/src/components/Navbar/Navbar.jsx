import React, {useContext, useState} from 'react'
import '../Navbar/Navbar.css'
import {FaBars} from "react-icons/fa";
import {IoMdClose} from "react-icons/io";
import {useNavigate} from 'react-router-dom';
import {UserContext} from "../../context/UserContext"

const Navbar = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {isLogged, userLogged} = useContext(UserContext);

  const goHome = () => {
    navigate("/");
  }
    
  return (
    <div className="navbar" id='home'>
      <div className='welcome-info'>
        <h1 className='logo-title' onClick={goHome}>YourVet</h1>
        {
          isLogged && <h4>{`Hola, ${userLogged?.name} ${userLogged?.lastName}`}</h4>
        }
      </div>
      <div className='icon-bars' onClick={() => setSidebarOpen(true)}><FaBars /></div>
      <div className={`sidebar ${sidebarOpen ? 'open' : 'desktop-version-menu'}`}>
        <div className='icon-close' onClick={() => setSidebarOpen(false)}><IoMdClose /></div>
        <ul className={ sidebarOpen ? 'sidebar-list' : 'menu-list'}>
          <li><a href='#home'>Home</a></li>
          <li><a href='#services'>Servicios</a></li>
          <li><a href='#vets'>Veterinarios</a></li>
          <li><a href='#contact'>Contacto</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
