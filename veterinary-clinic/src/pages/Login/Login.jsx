import React, { useContext, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import '../Login/Login.css'
import {IoMdArrowRoundBack} from "react-icons/io"
import {MdOutlineError} from "react-icons/md"
import {IoMdEye} from "react-icons/io"
import {AiFillEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../../context/UserContext'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");

  const {setIsLogged, findUserByEmail} = useContext(UserContext);

  const goBack = () => {
    navigate(-1);
  }

  const handleIcon = () => {
    setShowPassword(!showPassword);
  }

  /* validar que el usuario haya ingresado la info en los inputs de email y username. 
    Si los datos son válidos, el servidor devuelve un token. Sino, muestra un msj de error */
   const handleLoginUser = (e) => {
        e.preventDefault();
        if( email && password ){ 
          axios.post('http://localhost:8080/login', {
              email,
              password
          })
            .then(response => {
            console.log('usuario logueado correctamente', response.data); 
            if(response.status === 200 || response.status === 201){
              sessionStorage.setItem("token", response.data.token);
              sessionStorage.setItem("email", email);
              setIsLogged(true);
              //hacer el llamado de la funcion que busca al usuario por su email, trae toda su info y la guarda:
              findUserByEmail(email);
              navigate("/");
            }
          })
          .catch(error => console.log('Hubo un error', error));
        } else {
          console.log("datos incorrectos")
          setError(true)
          setErrorMessage(`Email y/o contraseña inválidos.\n¡Inténtalo de nuevo!`)
        }
      }

  return (
        <>
          <Navbar /> 
          <div className='container-login-form'>
            <div className='icon-direction'>
              <IoMdArrowRoundBack className='arrow' onClick={goBack} />
            </div>
            <div className='ctn-login'> 
            {
              error && (
                <div className='error-container'>
                  <MdOutlineError className='icon-error'/>
                  <p>{errorMessage}</p>
                </div>
                )
            }
              <h1 className='login-title'>Iniciá sesión</h1>
              <form className='form-login'>
                <div className='form-input'>
                  <input className='email-input' type="email" value={email} placeholder='usuario@email.com' onChange={(e) => setEmail(e.target.value)} required></input>
                </div>
                <div className='form-input'>
                  <input className='password-input' type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Contraseña' id='passcode' required></input>
                  <span onClick={handleIcon}>
                    {showPassword ? <AiFillEyeInvisible className='eye-icon' /> : <IoMdEye className='eye-icon' />}
                  </span>
                </div>
                <button className='login-button' onClick={handleLoginUser}>Iniciar sesión</button>
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