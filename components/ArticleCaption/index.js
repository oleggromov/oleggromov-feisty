import React from 'react'
import Text from '../Text'
import './article-caption.css'

const formatDate = str =>
  new Date(str).toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: 'numeric'  })

const ArticleCaption = ({ title, published, excerpt, more, url }) => {
  return <article>
    <header class="article-caption">
      <h1 className="article-caption-title">{title}</h1>
      <p className="article-caption-date">{formatDate(published)}</p>
    </header>
    <Text content={excerpt} />
    <p>
      <a href={url}>{more}</a>
    </p>
  </article>
}

export default ArticleCaption
