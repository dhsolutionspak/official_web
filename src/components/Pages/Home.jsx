import React, { useEffect } from 'react';
import Card from '../Card';
import FunFact from '../FunFact';
import Hero from '../Hero';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Cta from '../Cta';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
import PortfolioSlider from '../Slider/PortfolioSlider';
import PostSlider from '../Slider/PostSlider';
import TestimonialSlider from '../Slider/TestimonialSlider';
import TeamSlider from '../Slider/TeamSlider';
import VideoModal from '../VideoModal';
import TimelineSlider from '../Slider/TimelineSlider';
import { pageTitle } from '../../helper';

export default function Home() {
  pageTitle('Home');

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: 'Linkedin',
      links: 'https://www.linkedin.com/company/digital-house-solutions-pakistan',
    },
    {
      name: 'Instagram',
      links: 'https://instagram.com/dhsolutions.official?igshid=MmIzYWVlNDQ5Yg==',
    },
    {
      name: 'Facebook',
      links: 'https://www.facebook.com/profile.php?id=100089144452201&mibextid=LQQJ4d',
    },
  ];

  // FunFact Data
  const funfaceData = [
    {
      title: 'Global Happy Clients',
      factNumber: '1.5K',
    },
    {
      title: 'Project Completed',
      factNumber: '2.5K',
    },
    {
      title: 'Team Members',
      factNumber: '220',
    },
    {
      title: 'Our Products',
      factNumber: '3',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Creativity In <br/>Our Blood Line"
        subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
        btnText="Get a Quote"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/home-hero-01.jpg"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Our fun fact"
          subtitle="98% of our clients find their digital experience with us as delightful as a walk on the beach!."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
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
        
      {/* End Service Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider />
      </Div>
      {/* End Portfolio Section */}

      {/* Start Our History Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="DH Solutions History"
                subtitle="Our History"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
        Dare to Dream Big, Achieve Even Bigger - DH Solutions: Empowering your aspirations with transformative digital solutions.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div>
      {/* End Video Block Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
  
}
