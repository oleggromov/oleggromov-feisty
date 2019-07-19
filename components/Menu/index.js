import React from 'react'
import Avatar from '../Avatar'
import Text from '../Text'
import './menu.css'

const renderMenuItem = ({ url, title, active }) => {
  const classes = active ? "menu-link active" : "menu-link"
  return <a className={classes} href={active ? '' : url}>
    <span>{title}</span>
  </a>
}

const Menu = ({ text, items }) => {
  return <div className="menu">
    <Avatar />
    <Text content={text} />

    <nav className="menu-nav">
      {renderMenuItem(items.articles)}
      {renderMenuItem(items.about)}
    </nav>
  </div>
}

export default Menu
