import React from 'react'
import './Footer.css'
import '../../index.css'
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
        <p>© {currentYear} Anuhya Digital.com All rights reserved. Built by Anuhya Digital </p>
        <ul>
            <li> Terms of Services</li>
            <li> Privacy Policy</li>
        </ul>
    </div>
  )
}

export default Footer
