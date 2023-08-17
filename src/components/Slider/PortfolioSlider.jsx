import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';

export default function PortfolioSlider() {
  const portfolioData = [
    {
      title:'Motoride Group',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio-1.png'
    },
    {
      title:'Crockett & Co',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio-2.png'
    },
    {
      title:'Tritone Group',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio-3.png'
    },
    {
      title:'DH Clients Portal',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio-4.png'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
      {portfolioData.map((item, index)=> (
        <Div key={index}>
          <Portfolio 
            title={item.title} 
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  )
}
