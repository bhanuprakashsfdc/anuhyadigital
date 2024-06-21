import React from 'react'
import './About.css'
import '../../index.css'
import about_img from '../../assets/programs/hero-img.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
      {/* 
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{
          setPlayState(true)}}/>
      */}
      </div>
      <div className="about-right">
        <h3 className='h3text'> About Us</h3>
        <h2>In Anuhya Digital</h2>
        <p>Since 2019, Anuhya Digital has stood as a beacon of Salesforce excellence, strategically serving clients worldwide. As a premier destination for top-notch Salesforce solutions, we provide unmatched expertise to businesses of all sizes. Our commitment to customer satisfaction drives our continuous growth and cements our reputation in the Salesforce consulting community.</p>
        <p>At Anuhya Digital, every team member strives toward a common vision, ensuring that each client receives personalized and thorough service. Looking ahead, we aim to broaden our offerings and reach more clients, maintaining our dedication to delivering exceptional and accessible Salesforce solutions.</p>
      </div>
    </div>
  )
}

export default About
