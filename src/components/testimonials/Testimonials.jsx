import React from 'react'
import Avt1 from '../../assets/avatar2.jpg'
import Avt2 from '../../assets/avatar3.jpg'
import Avt3 from '../../assets/avatar4.jpg'
import './testimonials.css'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar:Avt1,
    name:'tina snow',
    review:'Tina Snow is the second extended play by American rapper Megan Thee Stallion. It was released on June 8, 2018, by 1501 Certified Entertainment and 300 Entertainment. '
  },
  {
    avatar:Avt2,
    name:'shatta wale ',
    review:'Tina Snow is the second extended play by American rapper Megan Thee Stallion. It was released on June 8, 2018, by 1501 Certified Entertainment and 300 Entertainment. '
  },
  {
    avatar:Avt3,
    name:'kwane despite',
    review:'Tina Snow is the second extended play by American rapper Megan Thee Stallion. It was released on June 8, 2018, by 1501 Certified Entertainment and 300 Entertainment. '
  }

]

const Testimonials = () => {
  return (
    <section id='testimonilas'>
       <h5>Review for clients</h5>
        <h2>Testimonials</h2>
      <Swiper className="container testimonial_container"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={50}
       slidesPerView={1}
      
       pagination={{ clickable: true }}
       >
       {
        data.map(({avatar,name,review},index)=>{
          return(
            <SwiperSlide key={index} className='testimonial-about'>
              <div className="testimonial">
                <img src={avatar}  />
              </div>
              <h5> {name}</h5>
              <small className='modify'>{review}</small>
            </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section >
  )
}

export default Testimonials