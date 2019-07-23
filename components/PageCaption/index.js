import React from 'react'
import FormattedDate from '../FormattedDate'
import './page-caption.css'

const renderDate = date => (<p className="page-caption-date">
  <FormattedDate date={date} />
</p>)

const PageCaption = ({ title, date, isH1 = false }) => {
  const Tag = isH1 ? 'h1' : 'h2'
  const className = isH1 ? 'page-caption_title' : ''

  return <header className={`page-caption ${className}`}>
    <Tag className="page-caption-title">{title}</Tag >
    {date && renderDate(date)}
  </header>
}

export default PageCaption
