import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import '../Booking/Booking.css'

const Booking = () => {
  return (
    <>
      <Navbar />
      <div className='ctn-booking'>
        <h1>Iniciá una reserva</h1>
        <form className='booking-form'>
            <div className='booking-info'>
                <h3>Datos de la consulta</h3>
                <input className='book-input' type='date' placeholder='Seleccione la fecha'></input>
                <input className='book-input' type='text' placeholder='Seleccione el horario'></input>
                <input className='book-input' type='text' placeholder='Nombre del veterinario'></input>
                <textarea className='b-description' placeholder='describa el motivo de consulta'></textarea>
            </div>
            <div className='booking-info-customer'>
                <h3>Datos del propietario</h3>
                <input className='book-input' type='text' placeholder='Nombre'></input>
                <input className='book-input' type='text' placeholder='Apellido'></input>
                <input className='book-input' type='text' placeholder='email'></input>
                <input className='book-input' type='number' placeholder='Número'></input>
                <input className='book-input' type='text' placeholder='Dirección'></input>
            </div>
            <div className='booking-info-pet'>
                <h3>Datos de la mascota</h3>
                <input className='book-input' type='text' placeholder='Nombre'></input>
                <input className='book-input' type='text' placeholder='Edad'></input>
                <input className='book-input' type='text' placeholder='Género'></input>
                <input className='book-input' type='text' placeholder='Raza'></input>
            </div>
        </form>
      </div>
    </>
  )
}

export default Booking
