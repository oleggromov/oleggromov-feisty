import React from 'react'
import './footer.css'

const Footer = ({ copyright, author, generator }) =>
  <div className="footer">
    <p>
      {copyright.replace('{{NOW}}', (new Date).getFullYear())}
      <span className="footer-author">{author}</span>
    </p>
    <p dangerouslySetInnerHTML={{__html: generator.replace(/<.*?p>/, '')}} />
  </div>


export default Footer
