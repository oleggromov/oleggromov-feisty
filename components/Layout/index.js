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
import favicon32 from '../favicon-32.png'
import favicon180 from '../favicon-180.png'

const getCanonical = url => {
  // ToDo get this from Feisty?
  const domain = 'https://oleggromov.com'
  if (!url || url === '/') {
    return domain
  } else if (url.match(/^\/*/)) {
    return domain + url.replace(/^\/*/, '/')
  }

  throw new Error(`Cannot generate canonical for ${url}`)
}

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
    const { description, url } = this.props.meta

    if (!this.state.client) {
      const { GA_ID } = process.env
      return <Helmet>
        <title>{this.title}</title>
        {description && <meta name="description" content={description} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700&display=swap&subset=cyrillic" rel="stylesheet" />
        <link href={favicon32} rel="icon" type="image/png" />
        <link href={favicon180} rel="apple-touch-icon" type="image/png" />
        <link rel="canonical" href={getCanonical(url)} />
        <link rel="prefetch" href="/about" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        {GA_ID && <script async="async" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>}
        {GA_ID && <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</script>}
        <meta charset="utf-8" />
      </Helmet>
    }
  }

  render() {
    const { children, common, title, hideLogo, noLogoLink } = this.props
    const { menu, titleSuffix } = common

    return <>
      {this.renderHelmet()}

      <div className="layout">
        <Header menu={menu} hideLogo={hideLogo} noLogoLink={noLogoLink} />
        <div className="layout-container">
          {children}
        </div>
      </div>
    </>
  }
}

Layout.defaultProps = {
  useHighlight: false
}

export default Layout
