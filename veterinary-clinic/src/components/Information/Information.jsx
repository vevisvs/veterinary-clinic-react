import React from 'react'
import '../Information/Information.css'
import photo1 from '../../assets/info-vet.jpg'

const Information = () => {
  return (
    <div className='ctn-information'>
        <img className='info-vet-image' src={photo1}/>
        <div className='info-description'>
            <h2>Los mejores médicos veterinarios de todas las especialidades</h2>
            <p className='text-parrafo'>Todos nuestros veterinarios son expertos en su campo y graduados de las mejores universidades. Nuestro equipo de especialistas trabaja para brindarte el servicio que necesites.</p>
            <button className='info-button'>Contáctanos</button>
        </div>
    </div>
  )
}

export default Information
