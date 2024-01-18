import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Headersocial from './Headersocial'
// import { FcGoogle } from 'react-icons/fc//

const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello i'm</h5>
      <h1>Mukul Thakur</h1>
      <h5 className='text-light'>Learning react js</h5>
      <CTA/>
     
      <Headersocial/>
      
      <div className="me">
      <img src={ME} alt="my pic" />
      </div>
      <a href="#contact" className='scrolldown'>Scroll down</a>
    </div>
   </header>
  )
}

export default Header