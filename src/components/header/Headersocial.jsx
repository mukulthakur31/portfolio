import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import {AiOutlineGithub} from 'react-icons/ai'

const Headersocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkdin.com" target='_blank'><AiFillLinkedin/></a>
        <a href="https://www.google.com" target='_blank'><FcGoogle/></a>
        <a href="https://www.github.com" target='_blank'><AiOutlineGithub/></a>
    </div>
  )
}

export default Headersocial