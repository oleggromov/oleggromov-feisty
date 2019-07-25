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
  constructor(props) {
    super(props)
    this.state = { client: false }
  }

  componentDidMount() {
    this.setState({ client: true })
    if (this.props.useHighlight) {
      hljs.registerLanguage('javascript', javascript)
      hljs.registerLanguage('xml', xml)
      hljs.registerLanguage('css', css)
      hljs.initHighlighting()
    }
  }

  get title() {
    const { title } = this.props
    const { titleSuffix } = this.props.common
    return titleSuffix === title ? title : `${title} — ${titleSuffix}`
  }

  renderHelmet() {
    if (!this.state.client) {
      const { GA_ID } = process.env
      return <Helmet>
        <title>{this.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=PT+Serif:400,700&display=swap&subset=cyrillic" rel="stylesheet" />
        <link href={favicon} rel="icon" type="image/png" />
        <link rel="prefetch" href="/about" />
        {GA_ID && <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>}
        {GA_ID && <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</script>}
      </Helmet>
    }
  }

  render() {
    const { children, common, title, hideLogo, hideLogoThreshold } = this.props
    const { menu, titleSuffix } = common

    return <>
      {this.renderHelmet()}

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
