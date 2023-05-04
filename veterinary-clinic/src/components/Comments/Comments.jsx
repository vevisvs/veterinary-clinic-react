import React from 'react'
import '../Comments/Comments.css'
import ModalComments from './ModalComments'

const Comments = () => {
  return (
    <>
        <div className='ctn-comments'>
            <h2 className='comments-title'>¿Qué dicen nuestros pacientes?</h2>
            <p className='comments-description'>Puedes ver los comentarios y las puntuaciones de nuestros pacientes</p>
        </div>
        <div className='comments-card-section'>
            <ModalComments />  
        </div> 
  </>
  )
}

export default Comments
