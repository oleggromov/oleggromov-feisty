import React from 'react'

const splitBundles = bundles => {
  const result = { css: [], js: [] }

  if (!Array.isArray(bundles) || bundles.length === 0) {
    return result
  }

  return bundles.reduce((acc, bundle) => {
    if (bundle.match(/\.css$/)) {
      acc.css.push(bundle)
    }

    if (bundle.match(/\.js$/)) {
      acc.js.push(bundle)
    }

    return acc
  }, result)
}

const HTMLTemplate = ({ title, bundles, children }) => {
  const { css, js } = splitBundles(bundles)

  return <html>
  <head>
    <title>{title}</title>
    {css.map(cssBundle => <link key={cssBundle} rel="stylesheet" type="text/css" href={cssBundle} />)}
  </head>
  <body>
    {children}
    {js.map(jsBundle => <script key={jsBundle} src={jsBundle}></script>)}
  </body>
  </html>
}


export default HTMLTemplate
