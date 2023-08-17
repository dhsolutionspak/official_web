import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function Accordion() {
  const [selected, setSelected] = useState(0)
  const handelToggle = (index) => {
    if(selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  const accordionData = [
    {
      question: 'What services does DH Solutions offer?',
      answer: ' DH Solutions specializes in a wide range of digital services including website design and development, mobile app development, software solutions, digital marketing, and IT consultancy.'
    },
    {
      question: 'How can I contact DH Solutions for inquiries?',
      answer: 'You can reach out to us through our Contact page on the website, where you will find a form to submit your queries. Alternatively, you can email us at support@digitalhouse.com.pk or give us a call at +92-301-0586377'
    },
    {
      question: 'Is DH Solutions a registered company?',
      answer: 'Yes, DH Solutions is a registered PVT Limited Company, approved by SECP. We are in the process of obtaining LLC registration to expand our global presence.'
    },
    {
      question: 'What sets DH Solutions apart from other digital agencies?',
      answer: 'Our distinguishing factor lies in our team of over 220+ IT experts who bring a wealth of experience and creativity to every project. We are committed to delivering innovative, tailored solutions that cater to the unique needs of each client.'
    },
    {
      question: 'How does DH Solutions ensure data security and confidentiality?',
      answer: 'Data security is paramount to us. We employ robust security measures and follow industry best practices to protect your data. We also sign Non-Disclosure Agreements (NDAs) to ensure utmost confidentiality.'
    },
  ]
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index)=>(
        <Div className={`cs-accordian ${selected===index?'active':''}`} key={index}>
          <Div className="cs-accordian_head" onClick={()=>handelToggle(index)}>
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>                    
            </span>
          </Div>
          <Div className='cs-accordian_body'>
            <Div className="cs-accordian_body_in">{item.answer}</Div>
            </Div>
        </Div>
      ))}
    </Div>
  )
}
