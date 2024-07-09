import React from 'react'
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';

import Title from '../components/Title/Title';
import Contact from '../components/Contact/Contact';
import Map from '../components/Map/Map';
import Footer from '../components/Footer/Footer';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Title subtitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Map />
      <Footer/>
    </div>
  )
}

export default Layout
