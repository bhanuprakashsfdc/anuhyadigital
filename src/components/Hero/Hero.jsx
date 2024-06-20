import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1> Expert Dental Care in Tirupathi – Avasa Dental Clinic</h1>
        <p> 
          At Avasa Dental Clinic in Tirupathi, our state-of-the-art dental services are meticulously designed to provide patients with the expertise, treatments, and care necessary to maintain perfect oral health. 
        </p>
        <p>
          We empower our patients with comprehensive dental knowledge, innovative techniques, and personalized care plans essential for achieving and sustaining optimal dental wellness. Experience the future of dental care today and ensure your smile is both beautiful and healthy.
        </p>
        <button className='btn'>Book Your Appointment Today! <img src={dark_arrow} alt=""/>
        </button>
      </div>
    </div>
  )
}

export default Hero
