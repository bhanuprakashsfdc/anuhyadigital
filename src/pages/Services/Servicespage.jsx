import React from 'react'
import Navbarpage from '../../components/Navbarpage/Navbarpage'
import Footer from '../../components/Footer/Footer'
import Services from '../../components/Services/Services'

function Servicespage(){
  return (
    <div className="page-container">
      <Navbarpage />
      <div className="content-wrap">
        <div className="containerview">
          <Services />
        </div>
       </div>
       <div className='footervalue'>
        <Footer />
      </div>
    </div>
  )
}

export default Servicespage