import React from 'react'
import data from './ServiceData.json'
import {FaAmbulance} from 'react-icons/fa'
import{GiRadioactive} from 'react-icons/gi'
import {TbCircuitResistor} from 'react-icons/tb'
import {BiInjection} from 'react-icons/bi'
import {MdLocalHospital} from 'react-icons/md'
import {MdOutlinePets} from 'react-icons/md'

const ServiceCard = () => {
  const iconMap = {
    GiRadioactive,
    FaAmbulance,
    TbCircuitResistor,
    BiInjection,
    MdLocalHospital,
    MdOutlinePets
  };

  return (
    <div className='service-card-info'>
      {
        data.map(item => (
          <div className='card'>
            {/* <div className='card-icon'>{item.icon}</div> */}
            {React.createElement(iconMap[item.icon], { className: 'card-icon' })}
            <h2 className='card-title'>{item.title}</h2>
            <p className='card-description'>{item.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ServiceCard
