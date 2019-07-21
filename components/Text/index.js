import React from 'react'
import './text.css'

const Text = ({ content, className = '' }) =>
  <div className={`text ${className}`} dangerouslySetInnerHTML={{__html: content }} />

export default Text
