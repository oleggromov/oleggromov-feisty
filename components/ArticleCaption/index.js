import React from 'react'
import './article-caption.css'

const formatDate = str =>
  new Date(str).toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: 'numeric'  })

const ArticleCaption = ({ title, published, isH1 = false }) => {
  const Tag = isH1 ? 'h1' : 'h2'
  const className = isH1 ? 'article-caption_title' : ''

  return <header className={`article-caption ${className}`}>
    <Tag className="article-caption-title">{title}</Tag >
    <p className="article-caption-date">{formatDate(published)}</p>
  </header>
}

export default ArticleCaption
