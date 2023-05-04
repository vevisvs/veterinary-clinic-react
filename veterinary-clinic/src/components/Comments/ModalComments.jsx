import React, { useState } from 'react'
import CommentCard from './CommentCard'
import dataComments from '../Comments/DataComments.json'

const ModalComments = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [startIndex, setStartIndex] = useState(0);
    const [numberOfComments, setNumberOfComments] = useState(2);

    const goNext = () => {
      const nextIndex = selectedIndex + numberOfComments;
      const newIndex = nextIndex < dataComments.length ? nextIndex : 0;
      setStartIndex(newIndex);
      setSelectedIndex(newIndex);
    }

  return (
    <>
        <div className='ctn-modal'>
            <CommentCard selectedIndex={selectedIndex} 
                          dataComments={dataComments} 
                          startIndex={startIndex} 
                          numberOfComments={numberOfComments}
                          setNumberOfComments={setNumberOfComments}/>
        </div>
        <div className='next-button'>
            <span className='link-next-comment' onClick={goNext}>🡺</span>
        </div>
    </>
    
  )
}

export default ModalComments
