import React from 'react'
import Layout from '../Layout'
import PageCaption from '../PageCaption'
import Footer from '../Footer'
import Experience from '../Experience'
import Text from '../Text'
import './about.css'

const AboutPage = ({ data }) => {
  return <Layout common={data.common} title={data.data.meta.title}>
    <PageCaption title={data.data.title} isH1 />
    <Text content={data.data.content} />
    <Text className="about-interests-closing" content={data.data.closing} />
    <Experience {...data.data.experience} />
    <Footer {...data.common.footer} />
  </Layout>
}

export default AboutPage
