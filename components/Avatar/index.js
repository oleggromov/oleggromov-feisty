import React from 'react'
import './avatar.css'
import avatar from './oleggromov-avatar.jpg'
import avatar80px from '!!url-loader!./oleggromov-avatar-80px.jpg'

const Avatar = ({ inline = false, articleClosing = false }) => {
  const Tag = inline ? 'span' : 'div'
  const className = [
    inline ? 'avatar_inline' : '',
    articleClosing ? 'avatar_closing' : ''
  ].join(' ')
  const image = inline ? avatar80px : avatar

  return <Tag className={`avatar ${className}`}>
    <Tag className="avatar-image">
      <img src={image} alt="Oleg Gromov profile picture" />
    </Tag>
  </Tag>

}

export default Avatar
