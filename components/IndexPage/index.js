import React from 'react'
import Layout from '../Layout'
import Text from '../Text'
import Footer from '../Footer'
import ArticleListItem from '../ArticleListItem'
import PageCaption from '../PageCaption'
import Logo from '../Logo'
import './index-page.css'

const renderAricles = articles =>
  articles.map(page => {
    const { title, published, excerpt, more, cover } = page.data
    const { url } = page.meta

    return <ArticleListItem key={url}
      title={title}
      published={published}
      excerpt={excerpt}
      more={more}
      url={url}
      cover={cover} />
  })

const IndexPage = ({ data }) =>
  <Layout common={data.common} title={data.data.meta.title} hideLogo hideLogoThreshold={150}>
    <div className="index-logo">
      <h1>{data.data.title}</h1>
      <Logo scale={2} />
    </div>
    <Text content={data.data.content} />
    {renderAricles(data.data.pages)}
    <Footer {...data.common.footer} />
  </Layout>

export default IndexPage
