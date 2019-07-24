import React, { useEffect } from 'react'
import Layout from '../Layout'
import Footer from '../Footer'
import Text from '../Text'
import PageCaption from '../PageCaption'
import ArticleClosing from '../ArticleClosing'

const ArticlePage = ({ data }) => {
  useEffect(() => {
    const disqus = document.createElement('script')
    disqus.src = '//oleggromov.disqus.com/embed.js'
    disqus.setAttribute('data-timestamp', +new Date())
    document.body.appendChild(disqus)
  })

  return <Layout common={data.common} title={data.data.meta.title} useHighlight>
    <article>
      <PageCaption title={data.data.title} date={data.data.published} cover={data.data.cover} isH1 />
      <Text content={data.data.content} />
      <ArticleClosing published={data.data.published} closing={data.data.closing} />
    </article>
    <aside>
      <div id="disqus_thread" />
    </aside>
    <Footer {...data.common.footer} />
  </Layout>
}

export default ArticlePage
