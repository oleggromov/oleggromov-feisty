import React from 'react'
import FormattedDate from '../FormattedDate'
import './article-caption.css'

const renderDate = date => (<p className="article-caption-date">
  <FormattedDate date={date} />
</p>)

const renderTags = tagStr => {
  const tags = tagStr.split(',')
  return (<p className="article-caption-tags">
    {tags.map(tag => <span>{`#${tag.trim()}`}</span>)}
  </p>)
}

const ArticleCaption = ({ title, url, date, cover, coverType, tags, isPageCaption = false }) => {
  const HeaderTag = isPageCaption ? 'h1' : 'h2'
  const WrapperTag = isPageCaption ? 'div' : 'a'
  const className = [
    cover ? 'article-caption_cover' : '',
    coverType ? `article-caption_cover_${coverType}` : '',
    isPageCaption ? 'article-caption_page-caption' : ''
  ].join(' ')
  const href = !isPageCaption ? url : null

  // ToDo: what if image is narrower than the container?
  return <WrapperTag href={href} className={`article-caption ${className}`}>
    <header className="article-caption-container">
      <HeaderTag className="article-caption-title">
        {title}
      </HeaderTag>
      {cover && <div className="article-caption-image">
        <img src={cover} alt={`${title} - cover image`} />
      </div>}
      {date && renderDate(date)}
      {isPageCaption && tags && renderTags(tags)}
    </header>
  </WrapperTag>
}

export default ArticleCaption
