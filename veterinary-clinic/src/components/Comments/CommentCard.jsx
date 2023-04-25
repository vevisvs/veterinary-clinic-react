import React from 'react'
import {AiTwotoneStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'

const CommentCard = () => {
  return (
    <div className='card-comment'>
        <div className='card-text-info'>
            <h2 className='comment-title'>Titulo del comentario</h2>
            <p className='comment-text'>Esta es la descripcion del comentario</p>
        </div>
        <div className='card-user-info'>
            <img />
            <p className='comment-user'>Nombre usuario</p>
        </div>
        <span className='score'>
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <BsStarHalf />
        </span>
    </div>
  )
}

export default CommentCard
