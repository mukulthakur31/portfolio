import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import{FaUserAlt} from 'react-icons/fa'
import{BsBookmarkCheck} from 'react-icons/bs'
import{GrServices} from 'react-icons/gr'
import{IoMdContacts} from 'react-icons/io'
import './nav.css';
import { useState} from 'react';
const Nav = () => {

  const [activenavmember, setnavmember]=useState('#');
  return (
  <nav >
    <a href="#" onClick={()=>setnavmember('#')} className={activenavmember==='#' ? 'active':''}><AiOutlineHome /></a>
    <a href="#about" onClick={()=>setnavmember('#about')} className={activenavmember==='#about' ? 'active':''}><FaUserAlt /></a>
    <a href="#experience" onClick={()=>setnavmember('#experience')} className={activenavmember==='#experience' ? 'active':''}>< BsBookmarkCheck/></a>
    <a href="#services" onClick={()=>setnavmember('#services')} className={activenavmember==='#services' ? 'active':''}><GrServices /></a>
    <a href="#contact" onClick={()=>setnavmember('#contact')} className={activenavmember==='#contact' ? 'active':''}><IoMdContacts/></a>
    
  </nav>
  )
}

export default Nav