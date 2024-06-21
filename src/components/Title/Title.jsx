import React from 'react'
import './Title.css'
import '../../index.css'
const Title = ({title,subtitle,subtitle2}) => {
  return (
    <div className='title'>
      <h2>{title}</h2>
      <p>{subtitle} </p>
      <p>{subtitle2} </p>
    </div>
  )
}

export default Title
