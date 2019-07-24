import React from 'react'
import FormattedDate from '../FormattedDate'
import './page-caption.css'

const renderDate = date => (<p className="page-caption-date">
  <FormattedDate date={date} />
</p>)

const PageCaption = ({ title, date, cover, isH1 = false }) => {
  const Tag = isH1 ? 'h1' : 'h2'
  const className = [
    isH1 ? 'page-caption_h1' : '',
    cover ? 'page-caption_image' : ''
  ].join(' ')

  const style = cover ? { '--background-image': `url(${cover})` } : {}

  return <header className={`page-caption ${className}`} style={style}>
    <Tag className="page-caption-title">{title}</Tag >
    {date && renderDate(date)}
  </header>
}

export default PageCaption
