import React from 'react'
import Text from '../Text'
import PageCaption from '../PageCaption'

const ArticleListItem = ({ title, published, excerpt, more, url, cover }) => {
  return <article>
    <PageCaption title={title} date={published} cover={cover} />
    <Text content={excerpt} />
    <p>
      <a href={url}>{more}</a>
    </p>
  </article>
}

export default ArticleListItem
