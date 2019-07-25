import React from 'react'
import Layout from '../Layout'
import PageCaption from '../PageCaption'
import Footer from '../Footer'
import Experience from '../Experience'
import Text from '../Text'
import './about.css'

const AboutPage = ({ meta, data, common }) => {
  return <Layout common={common} title={meta.title}>
    <PageCaption title={data.title} isH1 />
    <Text content={data.content} />
    <Text className="about-interests-closing" content={data.closing} />
    <Experience {...data.experience} />
    <Footer {...common.footer} />
  </Layout>
}

export default AboutPage
