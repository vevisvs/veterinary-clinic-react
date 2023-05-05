import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import '../Login/Login.css'
import {IoMdArrowRoundBack} from "react-icons/io"
import {IoMdEye} from "react-icons/io"
import {AiFillEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const goBack = () => {
    navigate(-1);
  }

  const handleIcon = () => {
    setShowPassword(!showPassword);
  }

  return (
        <>
          <Navbar />
          <div className='container-login-form'>
            <div className='icon-direction'>
              <IoMdArrowRoundBack className='arrow' onClick={goBack} />
            </div>
            <div className='ctn-login'> 
              <h1 className='login-title'>Iniciá sesión</h1>
              <form className='form-login'>
                <div className='form-input'>
                  <input className='email-input' type="email" placeholder='usuario@email.com' required></input>
                </div>
                <div className='form-input'>
                  <input className='password-input' type={showPassword ? 'text' : 'password'} placeholder='Contraseña' id='passcode' required></input>
                  <span onClick={handleIcon}>
                    {showPassword ? <AiFillEyeInvisible className='eye-icon' /> : <IoMdEye className='eye-icon' />}
                  </span>
                </div>
                <button className='login-button'>Iniciar sesión</button>
                <div className='reset-sign'>
                  <p className='reset'>¡Olvidé mi contraseña!</p>
                  <p className='sign-in'><Link to="/register">Registrarme</Link></p>
                </div>
              </form>
            </div>
          </div>
        </>
  )
}

export default Login
