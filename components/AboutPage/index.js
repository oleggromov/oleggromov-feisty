import React from 'react'
import Layout from '../Layout'
import Header from '../Header'
import Avatar from '../Avatar'
import Footer from '../Footer'
import Experience from '../Experience'
import Text from '../Text'
import './about.css'
import '../base.css'

const AboutPage = ({ data }) => {
  return <>
    <Layout>
      <Header menu={data.common.menu} />
      <Avatar />
      <Text content={data.data.content} />
      <Experience {...data.data.experience} />
      <Footer {...data.common.footer} />
    </Layout>
  </>
}

export default AboutPage
