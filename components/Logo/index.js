import React from 'react'
import Gromov from './gromov.svg.js'
import './logo.css'

const Logo = ({ scale = 1 }) => {
  const style = scale !== 1 ? {
    width: `${Math.ceil(124 * scale)}px`,
    height: `${Math.ceil(16 * scale)}px`
  } : {}

  return <div className="logo" style={style}>
    <Gromov />
  </div>
}

export default Logo
