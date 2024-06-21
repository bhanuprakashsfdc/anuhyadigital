import React, {useRef} from 'react'
import './Clients.css'
import '../../index.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import janu from '../../assets/clients/ajanu.png'
import arun from '../../assets/clients/aarun.png'
import sfdemo from '../../assets/clients/asfdemo.png'
import gs7 from '../../assets/clients/ags7.png'
import jb from '../../assets/clients/ajb.png'

const Clients = () => {
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
    <div className='clients'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="cslider">
        <ul ref={slider}>
          <li>
            <div className="cslide">
                <img src={janu} alt="" />
            </div>
          </li>
          <li>
            <div className="cslide">
                <img src={arun} alt="" />
            </div>
          </li>
          <li>
            <div className="cslide">
                <img src={sfdemo} alt="" />
            </div>
          </li>
          <li>
            <div className="cslide">
                <img src={gs7} alt="" />
            </div>
          </li>
          <li>
            <div className="cslide">
                <img src={jb} alt="" />
            </div>
          </li>
          <li>
            <div className="cslide">
                <img src={janu} alt="" />
            </div>
          </li>
          <li>
            <div className="cslide">
                <img src={janu} alt="" />
            </div>
          </li>
          <li>
            <div className="cslide">
                <img src={janu} alt="" />
            </div>
          </li>
          <li>
            <div className="cslide">
                <img src={janu} alt="" />
            </div>
          </li>
          <li>
            <div className="cslide">
                <img src={janu} alt="" />
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Clients
