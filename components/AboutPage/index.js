import React from 'react'
import Layout from '../Layout'
import Avatar from '../Avatar'
import Footer from '../Footer'
import Experience from '../Experience'
import Text from '../Text'

const AboutPage = ({ data }) => {
  return <Layout common={data.common} title={data.data.meta.title}>
    <Avatar />
    <Text content={data.data.content} />
    <Experience {...data.data.experience} />
    <Footer {...data.common.footer} />
  </Layout>
}

export default AboutPage
