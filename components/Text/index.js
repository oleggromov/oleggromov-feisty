import React from 'react'

const Text = ({ content, className }) =>
  <div className={className} dangerouslySetInnerHTML={{__html: content }} />

export default Text
