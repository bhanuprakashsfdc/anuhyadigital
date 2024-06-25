import React from 'react'
import Navbarpage from '../../components/Navbarpage/Navbarpage'
import Footer from '../../components/Footer/Footer'
import Testimonials from '../../components/Testimonials/Testimonials'

function Testimonialspage(){
  return (
    <div className="page-container">
      <Navbarpage />
      <div className="content-wrap">
        <div className="containerview">
          <Testimonials />
        </div>
       </div>
       <div className='footervalue'>
        <Footer />
      </div>
    </div>
  )
}

export default Testimonialspage