import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Card from '../Card'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import PricingTableList from '../PricingTable/PricingTableList'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

export default function ServicesPage() {
  pageTitle('Service');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Services'
        bgSrc='images/service_hero_bg.jpeg'
        pageLinkText='Services'
      />

<Spacing lg='150' md='80'/>

<Div className='cs-shape_wrap_4'>
  <Div className="cs-shape_4"></Div>
  <Div className="cs-shape_4"></Div>
  <Div className="container">
    <Div className="row">
      <Div className="col-xl-4">
        <SectionHeading
          title='Services we can help you with' 
          subtitle='What Can We Do'
        />
        <Spacing lg='90' md='45'/>
      </Div>
      <Div className='col-xl-8'>
        <Div className='row'>
          <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
          <Div className='col-lg-3 col-sm-6'>
            <Card
              title='Applications Development'
              link='/service/ui-ux-design'
              src='/images/service-1.jpg'
              alt='Service'
            />
            <Spacing lg='0' md='30'/>
          </Div>
          <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
          <Div className='col-lg-3 col-sm-6'>
            <Card
              title='Website Development'
              link='/service/reactjs-development'
              src='/images/service-2.jpg'
              alt='Service'
            />
            <Spacing lg='0' md='30'/>
          </Div>
          <Div className='col-lg-3 col-sm-6'>
            <Card
              title='Digital Marketing'
              link='/service/digital-marketing'
              src='/images/service-3.jpg'
              alt='Service'
            />
            <Spacing lg='0' md='30'/>
          </Div>
          <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
          <Div className='col-lg-3 col-sm-6'>
            <Card
              title='UI/UX Design'
              link='/service/technology'
              src='/images/service-4.jpg'
              alt='Service'
            />
            <Spacing lg='0' md='30'/>
          </Div>
          <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
          <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
          <Div className='col-lg-3 col-sm-6'>
            <Card
              title='Database Solutions'
              link='/service/consultancy'
              src='/images/service-5.jpg'
              alt='Service'
            />
            <Spacing lg='0' md='30'/>
          </Div>
          <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
          <Div className='col-lg-3 col-sm-6'>
            <Card
              title='Cyber Security'
              link='/service/creative-design'
              src='/images/service-6.jpg'
              alt='Service'
            />
            <Spacing lg='0' md='30'/>
          </Div>


          <Div className='col-lg-3 col-sm-6'>
            <Card
              title='IOT'
              link='/service/digital-marketing'
              src='/images/service-7.jpg'
              alt='Service'
            />
            <Spacing lg='0' md='30'/>
          </Div>
          
          <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
          <Div className='col-lg-3 col-sm-6'>
            <Card
              title='AI/ML'
              link='/service/technology'
              src='/images/service-8.jpg'
              alt='Service'
            />
            <Spacing lg='0' md='30'/>
          </Div>




        </Div>

        
      </Div>
    </Div>
  </Div>
  </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <SectionHeading
          title='Providing best <br/>pricing for client' 
          subtitle='Pricing & Packaging'
        />
        <Spacing lg='85' md='40'/>
        <PricingTableList/>
      </Div>
      <Spacing lg='125' md='55'/>
      <TestimonialSlider/>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
