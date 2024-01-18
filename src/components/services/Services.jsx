import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'


const services = () => {
  return (
    <section id='services'>
      <h5>What i Offer</h5>
      <h2>Services</h2>
      <div className="container service_container">
        <article className='service'>
        <div className="service_head">
          <h3 className='service_heading'>UI/UX Design</h3>
        </div>

        <ul className='service_list'>
          <li className='service_li'>
         <BsCheckLg className='service_list-icon'/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </li>
          <li className='service_li'>
         <BsCheckLg className='service_list-icon'/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </li>
          <li className='service_li'>
         <BsCheckLg className='service_list-icon'/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </li>
          <li className='service_li'>
         <BsCheckLg className='service_list-icon'/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </li>
          <li className='service_li'>
         <BsCheckLg className='service_list-icon'/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </li>
         
        </ul>
        </article>

        <article className='service'>
        <div className="service_head">
          <h3 className='service_heading'>Web development</h3>
        </div>

        <ul className='service_list'>
          <li className='service_li'>
         <BsCheckLg className='service_list-icon'/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </li>
          <li className='service_li'>
         <BsCheckLg className='service_list-icon'/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </li>
          <li className='service_li'>
         <BsCheckLg className='service_list-icon'/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </li>
          <li className='service_li'>
         <BsCheckLg className='service_list-icon'/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </li>
         
        </ul>
        </article>

        <article className='service'>
        <div className="service_head">
          <h3 className='service_heading'>Content creation</h3>
        </div>

        <ul className='service_list'>
          <li className='service_li'>
         <BsCheckLg className='service_list-icon'/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </li>
          <li className='service_li'>
         <BsCheckLg className='service_list-icon'/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </li>
          <li className='service_li'>
         <BsCheckLg className='service_list-icon'/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </li>
          <li className='service_li'>
         <BsCheckLg className='service_list-icon'/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </li>
          <li className='service_li'>
         <BsCheckLg className='service_list-icon'/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </li>
        </ul>
        </article>
      </div>
    </section>
  )
}

export default services