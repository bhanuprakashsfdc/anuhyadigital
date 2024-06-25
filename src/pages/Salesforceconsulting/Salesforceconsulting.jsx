import React from 'react'
import '../../index.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';

function Salesforceconsulting (){
  return (
    <div>
        <Navbar />
        <div className="container">
            <h1>Salesforce Consulting Services</h1>
            <p>
                At Anuhya Digital, we specialize in providing top-notch Salesforce consulting services. Our team of certified Salesforce experts is dedicated to helping your business leverage the full power of Salesforce to streamline operations, enhance customer relationships, and drive growth.
            </p>
            <h2>Our Services Include:</h2>
            <ul>
                <li>Salesforce Implementation</li>
                <li>Salesforce Integration</li>
                <li>Salesforce Custom Development</li>
                <li>Salesforce Optimization</li>
                <li>Training and Support</li>
            </ul>
            <p>
                With years of experience and a deep understanding of the Salesforce platform, we ensure that your business processes are optimized for maximum efficiency and effectiveness. Partner with us to transform your Salesforce environment and achieve your business goals.
            </p>
            <button className='btn'>Contact Us for a Consultation</button>
        </div>
        <Footer />
    </div>
  );
}

export default Salesforceconsulting;