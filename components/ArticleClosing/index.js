import React from 'react'
import Avatar from '../Avatar'
import Text from '../Text'
import FormattedDate from '../FormattedDate'
import './article-closing.css'

const ArticleClosing = ({ published, closing }) => {
  return <div className="article-closing">
    <Avatar />

    <div className="article-closing-meta">
      Published by Oleg Gromov<br />on <FormattedDate date={published} />
    </div>

    <div className="article-closing-text">
      <Text content={closing} />
    </div>

    <div className="article-closing-actions">
      <a href="#disqus_thread" className="article-closing-cta">Leave a comment</a>
    </div>
  </div>
}

export default ArticleClosing
