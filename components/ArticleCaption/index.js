import React from 'react'
import FormattedDate from '../FormattedDate'
import './article-caption.css'

const renderDate = date => (<p className="article-caption-date">
  <FormattedDate date={date} />
</p>)

const ArticleCaption = ({ title, url, date, cover, isPageCaption = false }) => {
  const Tag = isPageCaption ? 'h1' : 'h2'
  const WrapperTag = isPageCaption ? 'div' : 'a'
  const className = cover ? 'article-caption_image' : ''
  const containerClassName = [
    isPageCaption ? 'article-caption-container_h1' : '',
    cover ? 'article-caption-container_image' : ''
  ].join(' ')

  // ToDo: what if image is narrower than the container?
  return <WrapperTag href={!isPageCaption ? url : null} className={`article-caption ${className}`}>
    <header className={`article-caption-container ${containerClassName}`}>
      <Tag className="article-caption-title">{title}</Tag>
      {cover && <div className="article-caption-image">
        <img src={cover} alt={`${title} - cover image`} />
      </div>}
      {date && renderDate(date)}
    </header>
  </WrapperTag>
}

export default ArticleCaption
