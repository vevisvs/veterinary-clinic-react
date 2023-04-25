import React from 'react'
import '../Services/Services.css'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='ctn-services'>
        <div className='services-title'>
            <h1>¿Qué servicios ofrecemos?</h1>
            <span className='offer-text'>Estamos a tu servicio con todo el equipo médico y personal que necesites</span>
        </div>
        <div className='ctn-services-info'>
          <ServiceCard />
        </div>
      
    </div>
  )
}

export default Services
