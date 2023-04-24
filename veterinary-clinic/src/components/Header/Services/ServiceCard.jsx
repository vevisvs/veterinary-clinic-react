import React from 'react'
import data from './ServiceData.json'

const ServiceCard = () => {
  return (
    <div className='service-card-info'>
      {
        data.map(item => (
          <div className='card'>
            <div className='card-icon'>{item.icon}</div>
            <h2 className='card-title'>{item.title}</h2>
            <p className='card-description'>{item.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ServiceCard
