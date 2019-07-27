import React from 'react'
import './caption.css'

const Caption = ({ children }) => {
  return <header className="caption">
    {children}
  </header>
}

export default Caption
