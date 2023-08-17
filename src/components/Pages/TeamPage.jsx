import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Team from '../Team';

export default function TeamPage() {
  pageTitle('Team');
  const teamData = [
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Mudassir Jaleel',
      memberDesignation: 'CEO/Founder',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_2.jpeg',
      memberName: 'Mohsin Jaleel',
      memberDesignation: 'CTO/CO-Founder',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_3.jpeg',
      memberName: 'Sayyam Alam',
      memberDesignation: 'Chief Finance Officer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_5.jpeg',
      memberName: 'Ayesha Asif',
      memberDesignation: 'Cheif Marketing Officer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Our Team"
        bgSrc="images/team_hero_bg.jpeg"
        pageLinkText="Team"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Meet our awesome <br/>team members"
          subtitle="Our Team"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {teamData.map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6">
              <Team
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                memberSocial={item.memberSocial}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>
        <Spacing lg="70" md="50" />
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Div>
    </>
  );
}
