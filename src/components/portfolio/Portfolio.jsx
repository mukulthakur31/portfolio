import React from 'react'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'
import './portfolio.css'


const data=[
   {
      id:1,
      image:img1,
      title:'believe',
      github:'https://github.com',
      demo:'https://dribbble.com/shots/21162535-Believe'

   },
   {
      id:2,
      image:img2,
      title:'Crypto Wallet Mobile App',
      github:'https://github.com',
      demo:'https://https://dribbble.com/shots/21057523-Crypto-Wallet-Mobile-App'

   },
   {
      id:3,
      image:img1,
      title:'crypto currency dashboard',
      github:'https://github.com',
      demo:'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'

   },
   {
      id:4,
      image:img1,
      title:'crypto currency dashboard',
      github:'https://github.com',
      demo:'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'

   },
   {
      id:5,
      image:img1,
      title:'crypto currency dashboard',
      github:'https://github.com',
      demo:'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'

   },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
     <div className="container portfolio_container">
    {
      data.map(({id,image,title,github,demo})=>{
         return(
            <article key={id}className='portfolio_item'>
            <div className="portfolio_item-image">
             <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="styling-button">
            <a href={github} target='_blank'  className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>liv demo</a>
            </div>
         </article>
         )

      })
   
   }
     </div>
    </section>
  )
}

export default Portfolio