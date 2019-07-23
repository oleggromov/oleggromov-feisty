import React from 'react'
import FormattedDate from '../FormattedDate'
import './article-caption.css'

const ArticleCaption = ({ title, published, isH1 = false }) => {
  const Tag = isH1 ? 'h1' : 'h2'
  const className = isH1 ? 'article-caption_title' : ''

  return <header className={`article-caption ${className}`}>
    <Tag className="article-caption-title">{title}</Tag >
    <p className="article-caption-date">
      <FormattedDate date={published} />
    </p>
  </header>
}

export default ArticleCaption
