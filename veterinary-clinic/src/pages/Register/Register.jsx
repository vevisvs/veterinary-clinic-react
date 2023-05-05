import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {IoMdArrowRoundBack} from "react-icons/io"
import { useNavigate } from 'react-router-dom'
import '../Register/Register.css'

const Register = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
  return (
    <>
        <Navbar />
        <div className='icon-direction'>
            <IoMdArrowRoundBack className='arrow' onClick={goBack} />
        </div>
        <div className='ctn-register'>
            <h1 className='register-title'>Registrá tus datos y creá tu cuenta</h1>
            <form className='form-register'>
                <div className='register-name'>
                    <input className='input-register-name' type='text' placeholder='Nombre' required></input>
                </div>
                <div className='register-lastname'>
                    <input className='input-register-lastname' type='text' placeholder='Apellido' required></input> 
                </div>
                <div className='register-email'>
                    <input type='email' className='input-register-email' placeholder='Correo electrónico' required></input>
                </div>
                <div className='register-passcode'>
                    <input type='password' className='input-register-passcode' placeholder='Contraseña' required></input>
                </div>
                <button className='register-button'>Crear cuenta</button>
            </form>
        </div>
      
    </>
  )
}

export default Register
