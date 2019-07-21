import React from 'react'
import Header from '../Header'
import {Helmet} from 'react-helmet'
import '../base.css'
import './layout.css'
import favicon from '../favicon-32.png'

const Layout = ({ children, common, title, isIndex = false }) => {
  const { menu, titleSuffix } = common

  return <>
    <Helmet>
      <title>{`${title} — ${titleSuffix}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=PT+Serif:400,700&display=swap&subset=cyrillic" rel="stylesheet" />
      <link href={favicon} rel="icon" type="image/png" />
      <link rel="prefetch" href="/about" />
    </Helmet>

    <div className="layout">
      <Header menu={menu} />
      {children}
    </div>
  </>
}


export default Layout
