import React from 'react'
import '../Vets/Vets.css'
import dataVets from '../Vets/DataVet.json'

const Vets = () => {
  return (
    <div className='ctn-vets'>
        <div className='ctn-vets-title'>
            <h1>Nuestros veterinarios calificados</h1>
            <span className='link-vets'>Ver todos 🡲</span>
        </div>
        <div className='vets-preview'>
            {
                dataVets.map(vet => (
                    <div className='card-vet'>
                        <img src={vet.image}/>
                        <h4>{vet.title}</h4>
                        <p className='vet-field'>{vet.field}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Vets
