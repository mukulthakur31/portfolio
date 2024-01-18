import React from 'react'
import {BiLogoGithub} from 'react-icons/bi'
import {AiFillInstagram} from 'react-icons/ai'
import {BiLogoFacebookSquare} from 'react-icons/bi'
import './footer.css';

const Footer = () => {
  return (
  <footer>
    <a href="#" className='footer_logo'>MUKUL THAKUR</a>

    <ul className='footer_links'>
      <li className='abc'><a href="#" className='text'>Home</a></li>
      <li className='abc'><a href="#about" className='text'>About</a></li>
      <li className='abc'><a href="#experience" className='text'>Experience</a></li>
      <li className='abc'><a href="#services" className='text'>Services</a></li>
      <li className='abc'><a href="#testimonials" className='text'>Testimonials</a></li>
      <li className='abc'><a href="#contact" className='text'>Contact</a></li>
    </ul>

    <div className="footer-socials">
      <a href="https://github.com"><BiLogoGithub/></a>
      <a href="https://instagram.com"><AiFillInstagram/></a>
      <a href="https://facebook.com"><BiLogoFacebookSquare/></a>
    </div>
  </footer>
  )
}

export default Footer