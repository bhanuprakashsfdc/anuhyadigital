import React from 'react'
import Navbarpage from '../../components/Navbarpage/Navbarpage'
import Footer from '../../components/Footer/Footer'
import Blogs from '../../components/Blogs/Blogs'

function Blogspage(){
  return (
    <div className="page-container">
      <Navbarpage />
      <div className="content-wrap">
        <div className="containerview">
          <Blogs />
        </div>
       </div>
       <div className='footervalue'>
        <Footer />
      </div>
    </div>
  )
}

export default Blogspage