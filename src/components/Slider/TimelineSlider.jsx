import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Timeline from '../Timeline';

export default function TimelineSlider() {
  const timelineData = [
    [
      {
        year: '2019',
        name: 'Idea Received',
        position: 'Started Work on Idea',
        type: '',
      },
      {
        year: '2020',
        name: 'Stared one Service',
        position: 'Website Development',
        type: '',
      },
    ],
    [
      {
        year: '2021',
        name: 'Got Registration from SECP',
        position: 'Digital House Solutions PVT Limited',
        type: '',
      },
      {
        year: '2022',
        name: 'Started Second Service',
        position: 'Web Applications Development',
        type: '',
      },
    ],
    [
      {
        year: '2023',
        name: 'Team of 220+ & 11 Services',
        position: 'DH Solutions is now providing 11 Services',
        type: '',
      },
      {
        year: '2023',
        name: 'Digital House Solutions LLC',
        position: 'In Process',
        type: '',
      },
    ],
  ];

  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    arrows: false,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="cs-arrow_style3">
      {timelineData.map((item, index) => (
        <Div key={index}>
          <Timeline columnData={item} />
        </Div>
      ))}
    </Slider>
  );
}
