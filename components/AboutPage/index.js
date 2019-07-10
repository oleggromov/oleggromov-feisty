import React from 'react'
import Footer from '../Footer'
import HTMLTemplate from '../HTMLTemplate'
import './about.css'
import './reset.css'

const AboutPage = ({ data, bundles }) =>
  <HTMLTemplate title="About me" bundles={bundles}>
    <h1 className="about-page">About page</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    <Footer />
  </HTMLTemplate>


export default AboutPage
