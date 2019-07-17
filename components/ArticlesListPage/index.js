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
  <Layout common={data.common} title={data.data.meta.title} isIndex={true}>
    {renderAricles(data.data.list)}
    <Footer {...data.common.footer} />
  </Layout>

export default ArticlesListPage
