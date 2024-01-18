import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {RiAwardFill} from 'react-icons/ri';
import {HiUsers} from 'react-icons/hi';
import {GrProjects} from 'react-icons/gr';

const About = () => {
  return (
    <section id="about"> 
      <h5>Get to know</h5>
      <h1>About me </h1>

      <div className="container about_container">
         <div className="about-me">
          <div className='my-image'>
            <img src={ME} alt="my pic"/>
            </div>
         </div>
         <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <RiAwardFill className='about_icon'/>
              <h5>Experience</h5>
              <small>3+years working experience</small>
            </article>
            <article className='about_card'>
              <HiUsers className='about_icon'/>
              <h5>clients</h5>
              <small>3+years working experience</small>
            </article>
            <article className='about_card'>
              <GrProjects className='about_icon'/>
              <h5>projects</h5>
              <small>3+years working experience</small>
            </article>
          </div>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus aperiam sed eaque quaerat animi ab soluta voluptate repellat magnam molestias vel eligendi voluptas error deleniti, iste eum facere debitis veritatis!</p>
          <a href="#contact" className='btn btn-primary'> let's talk</a>
         </div>
        </div> 
    </section>
  )
}

export default About