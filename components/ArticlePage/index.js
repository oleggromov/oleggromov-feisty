import React from 'react'
import Layout from '../Layout'
import Footer from '../Footer'
import Text from '../Text'

const ArticlePage = ({ data }) => {
  return <Layout common={data.common} title={data.data.meta.title}>
    <Text content={data.data.content} />
    <Footer {...data.common.footer} />
  </Layout>
}

export default ArticlePage
