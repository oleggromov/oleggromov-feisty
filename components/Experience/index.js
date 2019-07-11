import React from 'react'
import Text from '../Text'
import './experience.css'

const Experience = ({ title, items, closing }) =>
  <>
    <h2>{title}</h2>

    {items.map(item => <div key={item.period} className="experience-highlight">
      <p className="experience-period">{item.period}</p>
      <Text content={item.text} />
    </div>)}

    <div dangerouslySetInnerHTML={{__html: closing}} />
  </>

export default Experience
