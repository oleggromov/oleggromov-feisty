import React from 'react'
import Text from '../Text'
import ArticleCaption from '../ArticleCaption'

const ArticleListItem = ({ title, published, excerpt, more, url, cover }) => {
  return <article>
    <ArticleCaption title={title} url={url} date={published} cover={cover} />
    <Text content={excerpt} />
    <p>
      <a href={url}>{more}</a>
    </p>
  </article>
}

export default ArticleListItem
