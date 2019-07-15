import React from 'react'
import Layout from '../Layout'
import Footer from '../Footer'
import Text from '../Text'
import '../base.css'

const ArticlePage = ({ data }) => {
  return <Layout menu={data.common.menu} title={data.data.meta.title}>
    <Text content={data.data.content} />
    <Footer {...data.common.footer} />
  </Layout>
}

export default ArticlePage
