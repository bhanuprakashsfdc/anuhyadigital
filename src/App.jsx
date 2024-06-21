import React, {useState}  from 'react'
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import Services from './components/Services/Services'
import Map from './components/Map/Map'
import Mininavbar from './components/Mininavbar/Mininavbar'
import './index.css'
import Clients from './components/Clients/Clients'
const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Helmet>
        <title>Anuhya Digital</title>
        <meta name="description" content="Anuhya Digital we are providing salesforce consulting services" />
        <meta name="keywords" content="Salesforce, web design, web development" />
      </Helmet>
      <Navbar/>
      <Hero 
        title="We offer Salesforce solutions for growing your business"
        subtitle1="We are a team of talented Salesforce Consultants building optimized solutions."
        subtitle2="We empower our clients with comprehensive Salesforce knowledge, innovative solutions, and personalized strategies essential for achieving and sustaining optimal business success. Experience the future of Salesforce consulting today and ensure your business is both efficient and thriving."
        buttonText="Book Your Appointment Today!"
        buttonLink="#"
      />
      <div className="container">
       <About setPlayState={setPlayState}/>
       <Title subtitle='As a Salesforce consulting company, we are committed to upholding a set of core values that guide our actions and decisions every day. We believe that by staying true to these values, we can provide the best possible service to our clients and make a positive impact in our communities.'
              title='Our Values'/>
       <Programs />
       <Title subtitle='Gallery' title='Our services'/>
       <Services />
       {
        /* <Title subtitle='' title='Our Portfolio'/>
            <Campus />
        */
       }

       <Title subtitle='Clients' title='Our Clients'/>
       <Clients />
       <Title subtitle='Testimonials' title='What Clients Says'/>
       <Testimonials/>
       <Title subtitle='Contact Us' title='Get in Touch'/>
       <Contact/>
       <Map />
       <Mininavbar />
       <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/> 
    </div>
  )
}

export default App
