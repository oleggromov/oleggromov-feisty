import React from 'react'
import Layout from '../Layout'
import Caption from '../Caption'
import Footer from '../Footer'
import Experience from '../Experience'
import Text from '../Text'
import AvatarLine from '../AvatarLine'
import './about.css'

const AboutPage = ({ meta, data, common }) => {
  return <Layout common={common} title={meta.title}>
    <Caption>
      <h1>{data.title}</h1>
    </Caption>
    <AvatarLine data={data.avatarLine} />
    <Text content={data.content} />
    <Text className="about-interests-closing" content={data.closing} />
    <Experience {...data.experience} />
    <Footer {...common.footer} />
  </Layout>
}

export default AboutPage
