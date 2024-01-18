import React from 'react'
import CV from '../../assets/my_resume_1.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn' >Download CV</a>
        <a href="" className='btn btn-primary'>Lets's talk</a>
    </div>
    // <div className="scroll_down">Scroll Down</div>
  )
}

export default CTA