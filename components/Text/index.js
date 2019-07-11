import React from 'react'
import './text.css'

const Text = ({ content }) =>
  <div className="text" dangerouslySetInnerHTML={{__html: content }} />

export default Text
