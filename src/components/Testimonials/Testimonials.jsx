import React, {useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = ()=>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = ()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3> Sarah Thompson</h3>
                  <span> San Francisco, CA</span>
                </div>
              </div>
              <p>
                  Anuhya Digital's Salesforce consulting services have been a game-changer for our business. Their team helped us streamline our processes and maximize our Salesforce investment. We saw a significant improvement in our sales operations and customer management. Their expertise and dedication to client success are truly commendable.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3> Michael Rodriguez</h3>
                  <span> Austin, TX </span>
                </div>
              </div>
              <p>
              I am extremely impressed with the web design services provided by Anuhya Digital. They transformed our outdated website into a modern, user-friendly platform that has greatly enhanced our online presence. The team's creativity and attention to detail exceeded our expectations. We have received numerous compliments from our clients about our new website.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3> Emily Nguyen</h3>
                  <span> Seattle, WA</span>
                </div>
              </div>
              <p>
              Anuhya Digital's SEO services have helped our business achieve top rankings on search engines. Their comprehensive approach and in-depth keyword research have significantly increased our online visibility and organic traffic. We are now reaching a larger audience and generating more leads than ever before. I highly recommend their SEO expertise.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3> David Patel</h3>
                  <span> New York, NY</span>
                </div>
              </div>
              <p>
              Thanks to Anuhya Digital's Google Map Optimization services, our local business has seen a tremendous boost in foot traffic and online inquiries. They optimized our Google My Business listing and ensured our business appears prominently in local searches. Their efforts have made it easier for customers to find us, and we've seen a noticeable increase in sales as a result.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
