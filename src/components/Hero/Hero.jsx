import React from 'react'
import './Hero.css'
import '../../index.css'
import dark_arrow from '../../assets/arrow.png'

const Hero = ({ title, subtitle1, subtitle2, buttonText, buttonLink }) => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{subtitle1}</p>
        <p>{subtitle2}</p>
        <a href="tel:+918861789164" className='btn'>
          {buttonText} <img src={dark_arrow} alt=""/>
        </a>
      </div>
    </div>
  )
}

export default Hero
