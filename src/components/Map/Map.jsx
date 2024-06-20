import React from 'react'

const Map = () => {
  return (
    <div className='map'>
      <iframe
      className="responsive-iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4887.100514208077!2d79.41341149678959!3d13.63530350000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b6808d67f3d%3A0xcd7e18f04d2832dd!2sAvasa%20Dental%20Hospital!5e1!3m2!1sen!2sin!4v1715131099419!5m2!1sen!2sin"
      width="100%"
      height="500"
      style={{ border: '0' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
    </div>
  )
}

export default Map
