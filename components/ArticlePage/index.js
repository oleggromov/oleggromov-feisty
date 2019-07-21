import React from 'react'
import Layout from '../Layout'
import Footer from '../Footer'
import Text from '../Text'
import ArticleCaption from '../ArticleCaption'

const ArticlePage = ({ data }) => {
  return <Layout common={data.common} title={data.data.meta.title}>
    <article>
      <ArticleCaption title={data.data.title} published={data.data.published} isH1={true} />
      <Text content={data.data.content} />
    </article>
    <Footer {...data.common.footer} />
  </Layout>
}

export default ArticlePage
