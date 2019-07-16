import React from 'react'
import Layout from '../Layout'
import Footer from '../Footer'

const IndexPage = ({ data }) =>
  <Layout menu={data.common.menu} title={data.data.meta.title}>
    <Footer {...data.common.footer} />
  </Layout>

export default IndexPage
