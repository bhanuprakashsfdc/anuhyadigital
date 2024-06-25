import React, {useEffect, useState} from 'react'
import './Navbarpage.css'
import logo from '../../assets/adlogo.png'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import menu_icon from '../../assets/menu-icon.png'

const Navbarpage = () => {
    /* Onclick on menu navigate to section */
    const [sticky, setSticky] = useState(false);
    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false)
      })
    },[]);
    /* Display humbergericon on click hide menu bar */
    const [mobileMenu, setMobileMenu] = useState(false);
    const toogleMenu = ()=>{
      mobileMenu? setMobileMenu(false):setMobileMenu(true);
    }
    return (
        <nav className={`container ${sticky? 'dark-nav':''}`}>
          <img src={logo} alt="" className='logo'/>
          <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li> <NavLink to='/'>Home</NavLink></li>
            <li> <NavLink to='/about-us'>About Us</NavLink></li>
            <li> <NavLink to='/services'>Services</NavLink></li>
            <li> <NavLink to='/testimonials'>Testimonials</NavLink></li>
            <li> <NavLink to='/blogs'>Blogs</NavLink></li>
            <li> <NavLink to='/contact-us'><button className='btn'>Contact Us</button></NavLink></li>
          </ul>
          <img src={menu_icon} alt="" className='menu_icon nav_contact_box' onClick={toogleMenu}/>
        </nav>
      )
    }

export default Navbarpage