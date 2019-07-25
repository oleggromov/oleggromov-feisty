import React from 'react'
import Gromov from './gromov.svg.js'
import './logo.css'

const Logo = ({ scale = 1 }) => {
  const style = scale !== 1 ? {
    transform: `scale(${scale})`
  } : {}

  return <div className="logo" style={style}>
    <Gromov />
  </div>
}

export default Logo
