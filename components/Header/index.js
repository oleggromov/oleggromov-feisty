import React from 'react'
import Logo from '../Logo'
import HamburgerClosed from './HamburgerClosed'
import HamburgerOpen from './HamburgerOpen'
import Menu from '../Menu'
import throttle from './throttle'
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
      logoHidden: props.hideLogo
    }

    this.triggerMenu = this.triggerMenu.bind(this)
    this.triggerLogo = throttle(this.triggerLogo.bind(this), 100)
  }

  triggerMenu() {
    this.setState({ menuOpen: !this.state.menuOpen }, () => {
      if (this.props.hideLogo) {
        this.triggerLogo()
      }
    })
  }

  triggerLogo() {
    if (this.state.menuOpen) {
      this.setState({ logoHidden: false })
    } else {
      const hide = window.scrollY < this.props.hideLogoThreshold
      if (hide !== this.state.logoHidden) {
        this.setState({ logoHidden: hide })
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.triggerLogo)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.triggerLogo)
  }

  render() {
    const { menu } = this.props
    const { menuOpen, logoHidden } = this.state

    const barClass = menuOpen ? 'header-bar_open' : ''
    const overlayClass = menuOpen ? 'header-overlay_open' : ''
    const menuClass = menuOpen ? 'header-menu_open' : ''
    const logoClass = logoHidden ? 'header-logo_hidden' : ''

    return <div className="header">
      <div className={`header-bar ${barClass}`}>
        <div className={`header-logo ${logoClass}`}>
          <Logo />
        </div>

        <div className="header-hamburger" onClick={this.triggerMenu}>
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
}

export default Header
