import React, { useState } from 'react'
import LogoSVG from './LogoSVG'
import HamburgerClosed from './HamburgerClosed'
import HamburgerOpen from './HamburgerOpen'
import Menu from '../Menu'
import './header.css'

const Header = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false)
  const barClass = isOpen ? 'header-bar_open' : ''
  const overlayClass = isOpen ? 'header-overlay_open' : ''
  const menuClass = isOpen ? 'header-menu_open' : ''
  const triggerMenu = () => setIsOpen(!isOpen)

  return <div className="header">
    <div className={`header-bar ${barClass}`}>
      <div className="header-logo">
        <LogoSVG />
      </div>

      <div className="header-hamburger" onClick={triggerMenu}>
        <div className="header-hamburger-closed">
          <HamburgerClosed />
        </div>
        <div className="header-hamburger-open">
          <HamburgerOpen />
        </div>
      </div>
    </div>
    <div className={`header-menu ${menuClass}`}>
      <Menu text={menu.text} items={menu.items} />
    </div>
    <div className={`header-overlay ${overlayClass}`}></div>
  </div>
}

export default Header
