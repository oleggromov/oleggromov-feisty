import React from 'react'
import Layout from '../Layout'
import Footer from '../Footer'
import ArticleCaption from '../ArticleCaption'

const renderAricles = articles =>
  articles.map(page => {
    const { title, published, excerpt, more } = page.data
    const { url } = page.meta

    return <ArticleCaption key={url}
      title={title}
      published={published}
      excerpt={excerpt}
      more={more}
      url={url} />
  })


const ArticlesListPage = ({ data }) =>
  <Layout common={data.common} title={data.data.meta.title} isIndex={true}>
    {renderAricles(data.data.pages)}
    <Footer {...data.common.footer} />
  </Layout>

export default ArticlesListPage
