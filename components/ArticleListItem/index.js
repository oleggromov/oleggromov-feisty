import React from 'react'
import Text from '../Text'
import ArticleCaption from '../ArticleCaption'
import './article-list-item.css'

const ArticleListItem = ({ title, published, excerpt, more, url }) => {
  return <article>
    <ArticleCaption title={title} published={published} />
    <Text content={excerpt} />
    <p>
      <a href={url}>{more}</a>
    </p>
  </article>
}

export default ArticleListItem
