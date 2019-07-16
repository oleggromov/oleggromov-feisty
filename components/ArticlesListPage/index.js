import React from 'react'
import Layout from '../Layout'
import Footer from '../Footer'
import ArticleCaption from '../ArticleCaption'

const renderAricles = articles =>
  articles.map(({ title, published, excerpt, more, url }) =>
    <ArticleCaption key={url}
      title={title}
      published={published}
      excerpt={excerpt}
      more={more}
      url={url} />)

const ArticlesListPage = ({ data }) =>
  <Layout menu={data.common.menu} title={data.data.meta.title}>
    {renderAricles(data.data.list)}
    <Footer {...data.common.footer} />
  </Layout>

export default ArticlesListPage
