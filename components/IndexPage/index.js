import React from 'react'
import Layout from '../Layout'
import Text from '../Text'
import Footer from '../Footer'
import ArticleListItem from '../ArticleListItem'
import PageCaption from '../PageCaption'
import Logo from '../Logo'
import Avatar from '../Avatar'
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

const IndexPage = ({ data }) => {
  return <Layout common={data.common} title={data.data.meta.title} hideLogo hideLogoThreshold={150}>
    <div className="index-logo">
      <h1>{data.data.title}</h1>
      <Logo scale={2} />
    </div>
    <aside className="index-intro">
      <p>
        <span>{data.data.intro_greeting}</span>
        <Avatar inline />
        <span><a href="/about">{data.data.intro_name}</a></span>
      </p>
      <Text content={data.data.content} />
    </aside>
    {renderAricles(data.data.pages)}
    <Footer {...data.common.footer} />
  </Layout>
}

export default IndexPage
