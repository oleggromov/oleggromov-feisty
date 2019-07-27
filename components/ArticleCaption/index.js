import React from 'react'
import FormattedDate from '../FormattedDate'
import './article-caption.css'

const renderDate = date => (<p className="article-caption-date">
  <FormattedDate date={date} />
</p>)

const ArticleCaption = ({ title, date, cover, isH1 = false }) => {
  const Tag = isH1 ? 'h1' : 'h2'
  const className = [
    isH1 ? 'article-caption_h1' : '',
    cover ? 'article-caption_image' : ''
  ].join(' ')

  const style = cover ? { '--background-image': `url(${cover})` } : {}

  return <header className={`article-caption ${className}`} style={style}>
    <Tag className="article-caption-title">{title}</Tag >
    {date && renderDate(date)}
  </header>
}

export default ArticleCaption
