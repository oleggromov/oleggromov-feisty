import React from 'react'
import './avatar.css'
import avatar from './oleggromov-avatar.jpg'

const Avatar = () => <div className="avatar">
  <div className="avatar-image">
    <img src={avatar} alt="Oleg Gromov profile picture" />
  </div>
</div>

export default Avatar
