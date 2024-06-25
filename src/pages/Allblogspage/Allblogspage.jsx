import React from 'react'
import Navbarpage from '../../components/Navbarpage/Navbarpage'
import Footer from '../../components/Footer/Footer'
import AllBlogs from '../../components/Allblogs/Allblogs'

function Allblogspage(){
  return (
    <div className="page-container">
      <Navbarpage />
      <div className="content-wrap">
        <div className="containerview">
          <AllBlogs />
        </div>
       </div>
       <div className='footervalue'>
        <Footer />
      </div>
    </div>
  )
}

export default Allblogspage