import React from 'react'
import {AiTwotoneStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'

const CommentCard = () => {
  return (
    <div className='card-comment'>
        <div className='card-text-info'>
            <h2>Title</h2>
            <p>Description</p>
        </div>
        <div className='card-user-info'>
            <img />
            <p>Name</p>
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
