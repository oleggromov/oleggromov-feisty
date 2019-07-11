import React from 'react'
import Text from '../Text'
import './footer.css'

const Footer = ({ copyright, author, generator }) =>
  <div className="footer">
    <p>
      {copyright.replace('{{NOW}}', (new Date).getFullYear())}
      <span className="footer-author">{author}</span>
    </p>
    <Text content={generator} />
  </div>


export default Footer
