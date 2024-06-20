import React from 'react'
import './Programs.css'
import dental_implans from '../../assets/img/implant.png'
import veneers from '../../assets/img/veneers1.png'
import crowns from '../../assets/img/crowns2.png'
import program_1 from '../../assets/img/1.png'
import program_2 from '../../assets/img/5.png'
import program_3 from '../../assets/img/5.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={dental_implans} alt="" />
        <div className='text_name'>
          <h3>Dental Implants</h3>
        </div>
        <div className="caption">
            <p> we restore smiles and confidence with dental implants, a permanent solution for missing teeth. 
              Enjoy your favorite meals and smile without hesitation. 
              Trust us to bring back your smile’s function and beauty seamlessly.</p>
        </div>
      </div>
      <div className='program'>
        <img src={veneers} alt="" />
        <div className='text_name'>
              <h3>Veneers</h3>
            </div>
        <div className="caption">
            <p> Enhance your natural beauty with porcelain veneers at Avasa Dental Clinic. 
              Dubbed instant orthodontics, veneers offer a quick and dramatic improvement 
              to your smile. Align and perfect your teeth faster and simpler—without the 
              need for braces. Embrace a stunning smile today!
            </p>
        </div>
      </div>
      <div className='program'>
        <img src={crowns} alt="" />
        <div className='text_name'>
              <h3>Crowns</h3>
            </div>
        <div className="caption">
            <p> Restore your tooth’s integrity with a dental crown at Avasa Dental Clinic. Resembling a cap, our crowns cover the entire visible section of your tooth, returning it to its original size, shape, and color, while protecting its structural integrity. Safeguard your smile with our expert care.</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
