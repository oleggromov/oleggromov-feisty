import React from 'react'
import Layout from '../Layout'
import Text from '../Text'
import Footer from '../Footer'
import ArticleListItem from '../ArticleListItem'
import './article-list.css'

const renderAricles = articles =>
  articles.map(page => {
    const { title, published, excerpt, more } = page.data
    const { url } = page.meta

    return <ArticleListItem key={url}
      title={title}
      published={published}
      excerpt={excerpt}
      more={more}
      url={url} />
  })

const ArticlesListPage = ({ data }) =>
  <Layout common={data.common} title={data.data.meta.title}>
    <h1 className="article-list-heading">{data.data.title}</h1>
    <Text content={data.data.content} className="article-list-intro" />
    {renderAricles(data.data.pages)}
    <Footer {...data.common.footer} />
  </Layout>

export default ArticlesListPage
