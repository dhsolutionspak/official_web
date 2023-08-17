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
      question: 'What is the typical timeline for project completion?',
      answer: ' Project timelines vary depending on the scope and complexity. We work closely with our clients to establish realistic timelines and milestones, ensuring transparency and on-time delivery.'
    },
    {
      question: 'Does DH Solutions offer ongoing support after project completion?',
      answer: 'Absolutely! We provide post-project support and maintenance packages to address any issues, updates, or enhancements you may need, ensuring your digital assets remain up-to-date and optimal.'
    },
    {
      question: 'Can DH Solutions handle international projects?',
      answer: 'Yes, we embrace projects from around the world. Our expanding global reach, along with our diverse team, allows us to effectively cater to clients on an international scale.'
    },
    {
      question: 'What industries does DH Solutions cater to?',
      answer: 'We have experience across various industries including finance, healthcare, e-commerce, education, and more. Our versatile expertise enables us to adapt our solutions to suit different sectors needs.'
    },
    {
      question: 'How can I stay updated on DH Solutions latest offerings and news?',
      answer: 'You can subscribe to our newsletter on the website or follow us on our social media platforms. We regularly share updates, industry insights, and success stories.'
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
