import React, { useEffect } from 'react'
import Layout from '../Layout'
import Footer from '../Footer'
import Text from '../Text'
import ArticleCaption from '../ArticleCaption'
import ArticleClosing from '../ArticleClosing'
import ReadNext from '../ReadNext'
import './page-article.css'

class PageArticle extends React.Component {
  componentDidMount() {
    const disqus = document.createElement('script')
    disqus.src = '//oleggromov.disqus.com/embed.js'
    disqus.setAttribute('data-timestamp', Number(new Date()))
    document.body.appendChild(disqus)
  }

  render() {
    const { meta, data, common } = this.props
    return <Layout common={common} title={data.title} meta={meta} useHighlight>
      <article className="page-article-content">
        <ArticleCaption title={data.title} date={data.published} cover={data.cover} isPageCaption />
        <Text content={data.content} />
        <ArticleClosing published={data.published} closing={data.closing} />
      </article>
      <ReadNext nextUrl={meta.next} pagesList={common.pages} defaultMenu={common.menu.items.articles} />
      <aside className="page-article-comments" id="comments">
        <div id="disqus_thread" />
      </aside>
      <Footer {...common.footer} />
    </Layout>
  }
}

export default PageArticle
