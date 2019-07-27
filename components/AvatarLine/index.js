import React from 'react'
import Avatar from '../Avatar'

const AvatarLine = ({ data, isLink = false }) => {
  const name = isLink ? <a href="/about">{data.name}</a> : data.name

  return <p>
    <span>{data.greeting}</span>
    <Avatar inline />
    <span>{name}</span>,
  </p>
}

export default AvatarLine
