import React, {useState}  from 'react'
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

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
       <Title subtitle='At Avasa Dental Clinic, we specialize in a wide array of dental services to enhance your smile and improve your oral health. 
                        From dental implants that provide a permanent solution for missing teeth, to veneers and crowns designed to restore and 
                        beautify your natural smile, our expert team is equipped to handle all your dental needs.'

              subtitle2='We offer advanced smile correction procedures to align and brighten your smile, alongside professional teeth whitening 
                        services to ensure your smile is as radiant as it is healthy. For those seeking comprehensive treatment, our root canal 
                        therapies are performed with the utmost care and precision, while our clear aligners offer a discreet alternative to 
                        traditional braces. We also provide custom-fitted dentures, crafted to provide comfort and a natural appearance. 
                        Trust Avasa Dental Clinic for all your dental needs—where your health meets our expertise.' 
        title='What we Offer'/>
       <Programs />
       <Services />
       <About setPlayState={setPlayState}/>
       <Title subtitle='Gallery' title='Our services'/>
       <Campus />
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
