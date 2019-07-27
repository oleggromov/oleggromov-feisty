import React from 'react'
import Logo from '../Logo'
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
    this.headerRoot = React.createRef()
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
      const hide = window.scrollY < this.hideLogoThreshold
      if (hide !== this.state.logoHidden) {
        this.setState({ logoHidden: hide })
      }
    }
  }

  get hideLogoThreshold() {
    if (!this._hideLogoThreshold) {
      const cssValue = getComputedStyle(this.headerRoot.current)
        .getPropertyValue('--hide-logo-threshold')
      this._hideLogoThreshold = Number(cssValue.replace('px', ''))
    }
    return this._hideLogoThreshold
  }

  componentDidMount() {
    this.triggerLogo()
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

    return <div className="header" ref={this.headerRoot}>
      <div className={`header-bar ${barClass}`}>
        <div className={`header-logo ${logoClass}`}>
          <Logo />
        </div>

        <div className="header-hamburger" onClick={this.triggerMenu}>
          <div className="header-hamburger-closed"></div>
          <div className="header-hamburger-open"></div>
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
