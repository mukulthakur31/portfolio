import React from 'react'
import './contact.css'
import {CgMail} from 'react-icons/cg';
import {MdOutlineTextsms} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hp8nv02', 'template_9f9bvtb', form.current, 'y2gGGRmaxTZ8wXDMl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact-types">
        <article class="contact-option">
          <CgMail class="contact-type"/>
          <h4>Email</h4>
          <h5>mukulthakur****@gmail.com</h5>
          <a href="mailto:mukulthakur01234@gmail.com">send a message</a>
        </article>
        <article class="contact-option">
          <MdOutlineTextsms class="contact-type"/>
          <h5>Message</h5>
          <h4>78766***27</h4>
          <a href="https://mail.google.com/mail/u/0/#inbox">send a message</a>

        </article>
        <article class="contact-option">
          <IoLogoWhatsapp class="contact-type"/>
          <h4>whatts_App</h4>
          <h5>78766***27</h5>
          <a href="https://api.whatsapp.com/send?phone=+917018122707" target='_blank' a>send a message</a>

        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='enter your name' required />
          <input type="email" name='email' placeholder='enter your email' required />
          <textarea name="message" rows="10" placeholder='send a message'></textarea>
          <button class=" btn btn-primary">Send</button>
        
        </form>
      </div>


    </section>
  )
}

export default Contact