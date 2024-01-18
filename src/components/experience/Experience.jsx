import React from 'react'
import {FaCheckCircle} from 'react-icons/fa'
import './experience.css'

const Experience = () => {
  return (
   
    <section id='experience'>
      <h5>What Skills I Have </h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend develpoment</h3>
          <div className="experience_content">
            <article className='experience_details'>
             <FaCheckCircle className='modify'/>
            <div>
            <h2 >HTML</h2>
             <small className='text-light'>experienced</small>
            </div>
            </article>
            <article className='experience_details'>
             <FaCheckCircle className='modify'/>
            <div>
            <h2 >CSS</h2>
             <small className='text-light'>intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
             <FaCheckCircle className='modify'/>
            <div>
            <h2 >javascript</h2>
             <small className='text-light'>intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
             <FaCheckCircle className='modify'/>
             <div>
             <h2 >react-js</h2>
             <small className='text-light'>beginner</small>
             </div>
            </article>
            <article className='experience_details'>
             <FaCheckCircle className='modify'/>
            <div>
               <h2 >bootstrap</h2>
             <small className='text-light'>intermediate</small>
             </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>backend develpoment</h3>
          <div className="experience_content">
            <article className='experience_details'>
             <FaCheckCircle className='modify'/>
            <div> <h2 >node-js</h2>
             <small className='text-light'>beginner</small></div>
            </article>
            <article className='experience_details'>
             <FaCheckCircle className='modify'/>
             <div>
             <h2 >mongo-db</h2>
             <small className='text-light'>beginner</small>
             </div>
            </article>
            <article className='experience_details'>
             <FaCheckCircle className='modify'/>
             <div>
             <h2 >php</h2>
             <small className='text-light'>intermediate</small>
             </div>
            </article>
          </div>
        </div>
       
      </div>
    </section>
  )
}

export default Experience