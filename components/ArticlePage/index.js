import React, { useEffect } from 'react'
import Layout from '../Layout'
import Footer from '../Footer'
import Text from '../Text'
import PageCaption from '../PageCaption'
import ArticleClosing from '../ArticleClosing'

class ArticlePage extends React.Component {
  componentDidMount() {
    const disqus = document.createElement('script')
    disqus.src = '//oleggromov.disqus.com/embed.js'
    disqus.setAttribute('data-timestamp', Number(new Date()))
    document.body.appendChild(disqus)
  }

  render() {
    const { meta, data, common } = this.props
    return <Layout common={common} title={meta.title} useHighlight>
      <article>
        <PageCaption title={data.title} date={data.published} cover={data.cover} isH1 />
        <Text content={data.content} />
        <ArticleClosing published={data.published} closing={data.closing} />
      </article>
      <aside>
        <div id="disqus_thread" />
      </aside>
      <Footer {...common.footer} />
    </Layout>
  }
}

export default ArticlePage
