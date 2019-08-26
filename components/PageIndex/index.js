import React from 'react'
import Layout from '../Layout'
import Text from '../Text'
import Footer from '../Footer'
import ArticleCaption from '../ArticleCaption'
import Caption from '../Caption'
import Logo from '../Logo'
import AvatarLine from '../AvatarLine'
import './page-index.css'

const renderAricles = articles =>
  articles.map(page => {
    const { title, published, excerpt, more, cover, coverType } = page.data
    const { url } = page.meta

    const moreSuffix = more.match(/\s?→$/) ? ' →' : ''
    const moreTransformed = more.replace(/\s?→$/, '')

    // ToDo: refactor the component so it doesn't rely on index
    return <article className="page-index-article" key={url}>
      <ArticleCaption title={title} url={url} date={published} cover={cover} coverType={coverType} />
      <Text content={excerpt} />
      <p>
        <a className="page-index-more" href={url}>
          <span>{moreTransformed}</span>{moreSuffix}
        </a>
      </p>
    </article>
  })

const PageIndex = ({ meta, data, common }) => {
  return <Layout common={common} title={data.title} meta={meta} hideLogo noLogoLink>
    <Caption>
      <Logo scale={2} />
    </Caption>
    <aside>
      <AvatarLine data={data.avatarLine} aboutLink={common.menu.items.about.url} />
      <Text content={data.intro} />
    </aside>
    <main>
      <h1 className="page-index-caption">{data.title}</h1>
      <div>
        {renderAricles(data.pages)}
      </div>
    </main>
    <Footer {...common.footer} />
  </Layout>
}

export default PageIndex
