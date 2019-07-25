import React from 'react'
import Header from '../Header'
import {Helmet} from 'react-helmet'
import hljs from 'highlight.js/lib/highlight'

import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import 'highlight.js/styles/github.css'

import '../base.css'
import './layout.css'
import favicon from '../favicon-32.png'

class Layout extends React.Component {
  componentDidMount() {
    if (this.props.useHighlight) {
      hljs.registerLanguage('javascript', javascript)
      hljs.registerLanguage('xml', xml)
      hljs.registerLanguage('css', css)
      hljs.initHighlighting()
    }
  }

  get title() {
    const { title, titleSuffix } = this.props  
    return titleSuffix === title ? title : `${title} — ${titleSuffix}`
  }

  render() {
    const { children, common, title, hideLogo, hideLogoThreshold } = this.props
    const { menu, titleSuffix } = common

    return <>
      <Helmet>
        <title>{this.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=PT+Serif:400,700&display=swap&subset=cyrillic" rel="stylesheet" />
        <link href={favicon} rel="icon" type="image/png" />
        <link rel="prefetch" href="/about" />
      </Helmet>

      <div className="layout">
        <Header menu={menu} hideLogo={hideLogo} hideLogoThreshold={hideLogoThreshold} />
        {children}
      </div>
    </>
  }
}

Layout.defaultProps = {
  useHighlight: false
}

export default Layout
