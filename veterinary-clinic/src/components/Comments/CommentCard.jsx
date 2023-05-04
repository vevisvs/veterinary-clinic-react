import React, { useState, useEffect } from 'react'
import {AiTwotoneStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'

const CommentCard = ({ dataComments, startIndex, numberOfComments, setNumberOfComments }) => {
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setNumberOfComments(1);
      } else {
        setNumberOfComments(2);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const commentsToRender = dataComments.slice(startIndex, startIndex + numberOfComments);

  return (
    <>
      {commentsToRender.map(comment => (
        <div className='card-comment' key={comment.id}>
          <div className='card-text-info'>
            <h2 className='comment-title'>{comment.title}</h2>
            <p className='comment-text'>{comment.message}</p>
          </div>
          <div className='card-user-info'>
            <img />
            <p className='comment-user'>{comment.name}</p>
            <span className='score'>
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <BsStarHalf />
              <span className='score-number'>{comment.score}</span>
            </span>
          </div>
          
        </div>
      ))}
    </>
  );
};

export default CommentCard
