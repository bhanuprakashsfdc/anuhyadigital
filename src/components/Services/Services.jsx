import React from 'react';
import './Services.css';
import '../../index.css'
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';

const Services = () => {
  return (
    <div className='servicesview'>
      <div className='services'>
        <div className='service'>
          <div className='caption'>
              <h2>Salesforce Consulting</h2>
              <p className='ptext'>
                Our Salesforce Consulting services help businesses leverage the full potential of Salesforce to streamline 
                operations, improve customer relationships, and drive growth. From initial setup to advanced customization, 
                we provide comprehensive support tailored to your needs.
              </p>
          </div>
        </div>
        <div className='service'>
          <div className="caption">
            <h2>Salesforce Custom Development</h2>
              <p>
                Customize Salesforce to meet your unique business requirements with our custom development services. We build 
                tailored solutions, including custom apps, components, and workflows, to enhance your Salesforce experience.
              </p>
          </div>
        </div>
        <div className='service'>
          <div className="caption">
            <h2>Web Designing</h2>
              <p>
              Create stunning, user-friendly websites that capture your brand’s essence. Our web design services focus on 
              delivering responsive, visually appealing sites that provide an excellent user experience across all devices.
              </p>
          </div>
        </div>
      </div>
      <div className='services1'>
        <div className='service'>
          <div className="caption">
            <h2>UI/UX Design</h2>
              <p>
                Enhance user engagement with our UI/UX design services. We craft intuitive, aesthetically pleasing interfaces 
                that prioritize user experience, ensuring your website or application is both functional and attractive.
              </p>
          </div>
        </div>
        <div className='service'>
          <div className="caption">
            <h2>SEO Implementation</h2>
              <p>
                Boost your online visibility and drive organic traffic with our SEO implementation services. We use the latest SEO 
                techniques and strategies to help your website rank higher on search engines and attract more visitors.
              </p>
          </div>
        </div>
        <div className='service'>
          <div className="caption">
            <h2>Google Map Optimization</h2>
              <p>
                Improve your local search presence with our Google Map Optimization services. We optimize your Google My Business 
                listing to ensure your business appears prominently in local search results and attracts more customers.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
