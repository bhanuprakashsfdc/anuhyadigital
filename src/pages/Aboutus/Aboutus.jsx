import React from 'react'
import Navbarpage from '../../components/Navbarpage/Navbarpage'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'

function Aboutus(){
  return (
    <div className="page-container">
      <Navbarpage />
      <div className="content-wrap">
        <div className="containerview">
          <About />
        </div>
       </div>
       <div className='footervalue'>
        <Footer />
      </div>
    </div>
  )
}

export default Aboutus