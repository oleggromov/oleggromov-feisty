import React from 'react'

const AboutPage = data => {
  return <div>
    <h1>About page</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
}

export default AboutPage
