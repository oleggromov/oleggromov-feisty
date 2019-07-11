import React, { useState } from 'react'
import Footer from '../Footer'
import './about.css'
import './reset.css'

const AboutPage = ({ data }) => {
  const [count, setCount] = useState(0)

  return <>
    <h1 className="about-page" onClick={() => setCount(count + 1)}>About page: {count} clicks</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    <Footer />
  </>
}

export default AboutPage
