import React from 'react'
import '../Comments/Comments.css'
import CommentCard from './CommentCard'

const Comments = () => {
  return (
    <>
        <div className='ctn-comments'>
            <h2 className='comments-title'>¿Qué dicen nuestros pacientes?</h2>
            <p className='comments-description'>Puedes ver los comentarios y las puntuaciones de nuestros pacientes</p>
        </div>
        <div className='comments-card-section'>
            <CommentCard />
            <div className='next-button'>
                <span className='link-next-comment'>🡺</span>
            </div>
        </div> 
  </>
  )
}

export default Comments
