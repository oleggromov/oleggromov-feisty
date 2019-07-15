import React from 'react'
import Layout from '../Layout'
import Avatar from '../Avatar'
import Footer from '../Footer'
import Experience from '../Experience'
import Text from '../Text'
import '../base.css'

const AboutPage = ({ data }) => {
  return <Layout menu={data.common.menu} title={data.data.meta.title}>
    <Avatar />
    <Text content={data.data.content} />
    <Experience {...data.data.experience} />
    <Footer {...data.common.footer} />
  </Layout>
}

export default AboutPage
