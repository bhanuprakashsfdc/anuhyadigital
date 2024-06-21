import React from 'react'
import './Programs.css'
import strategy from '../../assets/programs/strategy.png'
import design from '../../assets/programs/design.png'
import launch from '../../assets/programs/launch.png'
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
        <img src={strategy} alt="" />
        <div className='text_name'>
          <h3>Strategy</h3>
        </div>
        <div className="caption">
            <p> The first step involves a discovey call to get requirements and build strategy to build applications</p>
        </div>
      </div>
      <div className='program'>
        <img src={design} alt="" />
        <div className='text_name'>
              <h3>Design</h3>
            </div>
        <div className="caption">
            <p> Planning and building prototype version of applications and redesign application on user inputs.
            </p>
        </div>
      </div>
      <div className='program'>
        <img src={launch} alt="" />
        <div className='text_name'>
              <h3>Launch</h3>
            </div>
        <div className="caption">
            <p> Train the trainer program and provide User training activity on applications.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Programs
