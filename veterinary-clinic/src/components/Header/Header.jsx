import React, { useContext } from 'react'
import './Header.css'
import photo from '../../assets/photo-portrait.png'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const Header = () => {
  const {isLogged, setIsLogged} = useContext(UserContext);
  
  const handleLogout = () => {
    sessionStorage.clear();
    setIsLogged(false);
  }

  return (
    <div className='ctn-header'>
      <div className='header-text'>
        <div className='job-title'>
          <hr/><span> Clínica Veterinaria</span>
        </div>
        <h1>Tu familia es importante para nosotros</h1>
        <h3>Estamos 24 horas al día disponibles para la salud de tus mascotas</h3>
        {
          isLogged ? 
            <button className='logout-button' onClick={handleLogout}>Cerrar sesión</button> 
            : <Link to='/login' className='header-button'>Inicia sesión</Link> 
        }
      </div>
      <div className='header-photos'>
        <img src={photo} className='portrait' alt='photo'/>
      </div>
      
    </div>
  )
}

export default Header
