import React from 'react'
import Layout from '../Layout'
import Text from '../Text'
import Footer from '../Footer'
import ArticleListItem from '../ArticleListItem'
import Caption from '../Caption'
import Logo from '../Logo'
import AvatarLine from '../AvatarLine'
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

const IndexPage = ({ meta, data, common }) => {
  return <Layout common={common} title={data.title} hideLogo hideLogoThreshold={150}>
    <Caption>
      <h1 className="index-page-invisible">{data.title}</h1>
      <Logo scale={2} />
    </Caption>
    <aside className="index-intro">
      <AvatarLine data={data.avatarLine} aboutLink={common.menu.items.about.url} />
      <Text content={data.content} />
    </aside>
    <main>
      {renderAricles(data.pages)}
    </main>
    <Footer {...common.footer} />
  </Layout>
}

export default IndexPage
