import React from 'react'

const Text = ({ content }) =>
  <div className="text" dangerouslySetInnerHTML={{__html: content }} />

export default Text
