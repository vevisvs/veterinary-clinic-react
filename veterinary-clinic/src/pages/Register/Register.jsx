import React, { useContext } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {IoMdArrowRoundBack} from "react-icons/io"
import {MdOutlineError} from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import '../Register/Register.css'
import { useState } from 'react'
import axios from 'axios'
import { UserContext } from '../../context/UserContext'

const Register = () => {
    const navigate = useNavigate();
    const {dataUser, setDataUser} = useContext(UserContext);

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();

    const [error, setError] = useState(false);
    const [errorRegisterMsj, setErrorRegisterMsj] = useState("");

    const goBack = () => {
        navigate(-1);
    }
    const handleRegisterUser = (e) => {
        e.preventDefault();
        if (name && lastname && address && phone && email && password) {
          setError(false);
          axios
            .post(
              "http://localhost:8080/customer/add",
              {
                name: name,
                lastName: lastname,
                address: address,
                contactNumber: Number(phone),
                email: email,
                password: password
              },
            )
            .then(response => {
              console.log("respuesta:", response); //recibo un objeto de respuesta
              if (response.status === 200 || response.status === 201) {
                setDataUser(response.config.data); //agrego al userContext la informacion del nuevo usuario creado
                setName("");
                setLastname("");
                setAddress("");
                setPhone("");
                setEmail("");
                setPassword("");
                goBack(); //redirige al usuario al formulario de login automáticamente
              }
            })
            .catch(error => console.log(error));
        } else {
          setError(true);
          setErrorRegisterMsj("Debes completar todos los campos del formulario");
        }
      }
  return (
    <>
        <Navbar />
        <div className='icon-direction'>
            <IoMdArrowRoundBack className='arrow' onClick={goBack} />
        </div>
        <div className='ctn-register'>
            {
                error ? (
                  <div className='error-message-div'>
                    <MdOutlineError className='error-icon'/>
                    <p>{errorRegisterMsj}</p>
                  </div>
                  ) : ""
            }
            <h1 className='register-title'>Registrá tus datos y creá tu cuenta</h1>
            <form className='form-register' >
                <div className='register-name'>
                    <input className='input-register-name' type='text' name='name' value={name} placeholder='Nombre' onChange={(e) => setName(e.target.value)} required></input>
                </div>
                <div className='register-lastname'>
                    <input className='input-register-lastname' type='text' name='lastname' value={lastname} placeholder='Apellido' onChange={(e) => setLastname(e.target.value)} required></input> 
                </div>
                <div className='register-address'>
                    <input className='input-register-address' type='text' name='address' value={address} placeholder='direccion' onChange={(e) => setAddress(e.target.value)} required></input> 
                </div>
                <div className='register-phone'>
                    <input className='input-register-phone' type='text' name='phone' value={phone} placeholder='telefono' onChange={(e) => setPhone(e.target.value)} required></input> 
                </div>
                <div className='register-email'>
                    <input type='email' className='input-register-email' name='email' value={email} placeholder='Correo electrónico' onChange={(e) => setEmail(e.target.value)} required></input>
                </div>
                <div className='register-passcode'>
                    <input type='password' className='input-register-passcode' name='password' value={password} placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <button className='register-button' onClick={handleRegisterUser}>Crear cuenta</button>
            </form>
        </div>
      
    </>
  )
}

export default Register