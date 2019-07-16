import React, { useState } from 'react'
import Avatar from '../Avatar'
import Text from '../Text'
import LogoSVG from './LogoSVG'
import HamburgerClosed from './HamburgerClosed'
import HamburgerOpen from './HamburgerOpen'
import './header.css'

const renderMenuItem = ({ url, title, active }) => {
  return <a className={active ? "header-menu-link active" : "header-menu-link"} href={url}>
    <span>{title}</span>
  </a>
}

const Header = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false)
  const headerClass = isOpen ? 'header_open' : ''
  const triggerMenu = () => setIsOpen(!isOpen)

  return <div className={`header ${headerClass}`}>
    <div className="header-logo">
      <LogoSVG />
    </div>

    <div className="header-menu" onClick={triggerMenu}>
      <div className="header-menu-closed"><HamburgerClosed /></div>
      <div className="header-menu-open"><HamburgerOpen /></div>
    </div>

    <div className="header-menu-container">
      <div className="header-menu-avatar">
        <Avatar />
      </div>
      <Text content={menu.text} />

      <nav className="header-menu-nav">
        {renderMenuItem(menu.items.articles)}
        {renderMenuItem(menu.items.about)}
      </nav>
    </div>
    <div className="header-menu-overlay"></div>
  </div>
}

export default Header
