import React from 'react'
import Avatar from '../Avatar'
import './avatar-line.css'

const AvatarLine = ({ data, aboutLink = null }) => {
  const name = aboutLink ? <a href={aboutLink}>{data.name}</a> : data.name

  return <p className="avatar-line">
    <span>{data.greeting}</span>
    <Avatar inline />
    <span>{name}</span>,
  </p>
}

export default AvatarLine
