import React from 'react'
import './About.css'
import about_img from '../../assets/img/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{
          setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3 className='h3text'> About University</h3>
        <h2>In Avasa</h2>
        <p>Since 2019, Avasa Dental has stood as a beacon of dental excellence in Tirupati, located strategically on TK Street. As a premier destination for top-notch dental care, we serve both local residents and visitors with unmatched expertise. Our commitment to customer satisfaction drives our continuous growth and cements our reputation in the dental community. </p>
        <p>At Avasa Dental, every team member strives toward a common vision, ensuring that each patient receives personalized and thorough care. Looking ahead, we aim to broaden our services and reach more clients, maintaining our easy accessibility and convenient location opposite Chips Corner. Choose Avasa Dental, where we prioritize your smile and dental health above all.</p>
      </div>
    </div>
  )
}

export default About
