import React from 'react'
import './InterestBox.css'

const InterestBox = ({title,style}) => {
  return (
    <div style={{...style}} className='interestBox'>
        <h1>{title}</h1>
      
    </div>
  )
}

export default InterestBox
