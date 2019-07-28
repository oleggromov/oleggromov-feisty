import React from 'react'
import Avatar from '../Avatar'
import Text from '../Text'
import './menu.css'

const renderMenuItem = ({ url, title, active }) => {
  const Tag = active ? 'span' : 'a'
  const classes = active ? 'menu-link active' : 'menu-link'
  const href = active ? undefined : url

  return <Tag className={classes} href={href}>
    <span>{title}</span>
  </Tag>
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
