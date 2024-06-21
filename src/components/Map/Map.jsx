import React from 'react'

const Map = () => {
  return (
    <div className='map'>
      <iframe
      className="responsive-iframe"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1862.8184079822706!2d79.44778326769973!3d13.652564782976434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4becd641e2cd%3A0xb583a27bb54d5781!2sAnuhya%20Digital%20Services%20Pvt%20ltd%20-%20Salesforce%20CRM%20Implementation%2C%20Web%20Design%2C%20SEO%20and%20Map%20Optimisation!5e1!3m2!1sen!2sin!4v1718939801409!5m2!1sen!2sin"
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
