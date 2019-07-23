import React from 'react'
import Text from '../Text'
import PageCaption from '../PageCaption'
import './article-list-item.css'

const ArticleListItem = ({ title, published, excerpt, more, url }) => {
  return <article>
    <PageCaption title={title} date={published} />
    <Text content={excerpt} />
    <p>
      <a href={url}>{more}</a>
    </p>
  </article>
}

export default ArticleListItem
