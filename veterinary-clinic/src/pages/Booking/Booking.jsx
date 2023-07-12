import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import '../Booking/Booking.css'
import catImage from '../../assets/cat5.jpg'
import { useReducer } from 'react'
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {setHours, setMinutes, addDays} from 'date-fns';
import { format } from 'date-fns';
import { UserContext } from '../../context/UserContext'

const Booking = () => {
  const { userLogged } = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [vetList, setVetList] = useState([])

  //data inicial del form
  const initialState = {
    dataConsulta: {
      fecha: '',
      nombreVeterinario: '',
      motivoConsulta: ''
    },
    dataPropietario: {
      nombre: '',
      apellido: '',
      email: '',
      numero: '',
      direccion: ''
    },
    dataMascota: {
      nombre: '',
      edad: '',
      genero: '',
      raza: ''
    },
  }

  const formBookingReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_FIELD':
        const newValue = action.field === 'fecha' && action.value instanceof Date ? action.value.toISOString() : action.value;
        return {
          ...state,
          [action.section]: {
            ...state[action.section],
            [action.field]: newValue
          }
        };
      default:
        return state;
    }
  };

   //uso del useReducer para manejar el estado del form (envio como parametro la data inicial y la funcion Reducer)
   const [state, dispatch] = useReducer(formBookingReducer, initialState);

  const handleInputChange = (section, field, value) => {
    dispatch({
      type: 'UPDATE_FIELD',
      section,
      field,
      value
    });
  }

  const handleDateChange = (date) => {
    const formattedDate = format(date, "yyyy-MM-dd'T'HH:mm:ss");
    setSelectedDate(date);
    handleInputChange('dataConsulta', 'fecha', formattedDate);
    console.log(formattedDate)
  };

  const handleBooking = (e) => {
    e.preventDefault();
    console.log("enviando formulario de reserva")
    if(initialState){
      axios.post('http://localhost:8080/appointment/create', {
        initialState
      })
      .then(response => {
        console.log('reserva creada exitosamente', response.data);
        if(response.status === 200 || response.status === 201){
          console.log('se muestra mensaje de exito al usuario')
        }
      })
    }else{
      console.log('hubo un error al crear la reserva')
    }
  }

  useEffect(() => {
    axios.get('http://localhost:8080/vet/list')
      .then(response => {
        console.log("listando veterinarios...")
        setVetList(response.data)
      })
  }, [])

  console.log("data del form:", state)
      
  return (
    <>
      <Navbar />
      <div className='ctn-booking'>
        <img src={catImage} className='booking-img'></img>
        <div className='form-data-ctn'>
          <h1 className='title-booking-form'>Iniciá una reserva</h1>
          <form className='booking-form'>
            <div className='booking-info'>
                <h3>Datos de la consulta</h3>
                  <DatePicker 
                    value={selectedDate}
                    selected={selectedDate}
                    onChange={handleDateChange}
                    format="yyyy-MM-dd'T'HH:mm:ss.SSSxxx" // Formato ISO 8601
                    timeIntervals={30}
                    timeCaption="Hora"
                    placeholderText="Selecciona una fecha y hora"
                    showTimeSelect
                    timeFormat="p"
                    dateFormat="Pp"
                    minDate={addDays(new Date(), 1)}
                    minTime={setHours(setMinutes(new Date(), 0), 8)}
                    maxTime={setHours(setMinutes(new Date(), 30), 20)}
                  /> 
                <select defaultValue={1} className='book-input' onChange={e => handleInputChange('dataConsulta', 'nombreVeterinario', e.target.value)}>
                  <option value={1} disabled>Selecciona un veterinario</option>
                  {
                    vetList?.map(vet => (
                      <option key={vet.id} value={vet.name}>{vet.name}, {vet.surname}</option>
                    ))
                  }
                </select>
                <textarea className='b-description' 
                  value={state.initialState?.dataConsulta?.motivoConsulta} 
                  placeholder='Describa el motivo de consulta'
                  onChange={e => handleInputChange('dataConsulta', 'motivoConsulta', e.target.value)}>
                </textarea>
            </div>
            <div className='booking-info-customer'>
                <h3>Datos del propietario</h3>
                <input className='book-input' 
                  type='text' 
                  // value={state.dataPropietario.nombre} 
                  value={userLogged?.name}
                  placeholder='Nombre'
                  onChange={e => handleInputChange('dataPropietario', 'nombre', e.target.value)}>
                </input>
                <input className='book-input' 
                  type='text' 
                  // value={state.dataPropietario.apellido} 
                  value={userLogged?.lastName}
                  placeholder='Apellido'
                  onChange={e => handleInputChange('dataPropietario', 'apellido', e.target.value)}>
                </input>
                <input className='book-input' 
                  type='text' 
                  // value={state.dataPropietario.email} 
                  value={userLogged?.email}
                  placeholder='email'
                  onChange={e => handleInputChange('dataPropietario', 'email', e.target.value)}>
                </input>
                <input className='book-input' 
                  type='number' 
                  // value={state.dataPropietario.numero} 
                  value={userLogged?.contactNumber}
                  placeholder='Número'
                  onChange={e => handleInputChange('dataPropietario', 'numero', e.target.value)}>
                </input>
                <input className='book-input' 
                  type='text' 
                  // value={state.dataPropietario.direccion} 
                  value={userLogged?.address}
                  placeholder='Dirección'
                  onChange={e => handleInputChange('dataPropietario', 'direccion', e.target.value)}>
                </input>
            </div>
            <div className='booking-info-pet'>
                <h3>Datos de la mascota</h3>
                <input className='book-input' 
                  type='text' 
                  value={state.dataMascota.nombre} 
                  placeholder='Nombre'
                  onChange={e => handleInputChange('dataMascota', 'nombre', e.target.value)}>
                </input>
                <input className='book-input' 
                  type='text' 
                  value={state.dataMascota.edad} 
                  placeholder='Edad'
                  onChange={e => handleInputChange('dataMascota', 'edad', e.target.value)}>
                </input>
                <input className='book-input' 
                  type='text' 
                  value={state.dataMascota.genero} 
                  placeholder='Género'
                  onChange={e => handleInputChange('dataMascota', 'genero', e.target.value)}>
                </input>
                <input className='book-input' 
                  type='text' 
                  value={state.dataMascota.raza} 
                  placeholder='Raza'
                  onChange={e => handleInputChange('dataMascota', 'raza', e.target.value)}>
                </input>
            </div>
        </form>
        <button className='booking-btn' onClick={handleBooking}>Crear reserva</button>
        </div>
      </div>
      
    </>
  )
}

export default Booking
