import React from 'react'
import Layout from '../Layout'
import Caption from '../Caption'
import Footer from '../Footer'
import Experience from '../Experience'
import Text from '../Text'
import AvatarLine from '../AvatarLine'
import './page-about.css'

const AboutPage = ({ meta, data, common }) => {
  return <Layout common={common} title={data.title}>
    <Caption>
      <h1>{data.title}</h1>
    </Caption>
    <AvatarLine data={data.avatarLine} />
    <Text content={data.content} />
    <Text className="page-about-cta" content={data.closing} />
    <Experience {...data.experience} />
    <Footer {...common.footer} />
  </Layout>
}

export default AboutPage
