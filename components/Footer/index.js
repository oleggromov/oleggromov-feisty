import React from 'react'
import Text from '../Text'
import './footer.css'

const Footer = ({ copyright, author, generator }) =>
  <div className="footer">
    <p>
      <span>{copyright.replace('{{NOW}}', (new Date).getFullYear())}<span>, </span></span>
      <span className="footer-author">{author}</span>
    </p>
    <Text content={generator} />
  </div>


export default Footer
