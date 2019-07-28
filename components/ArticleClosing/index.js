import React from 'react'
import Avatar from '../Avatar'
import Text from '../Text'
import FormattedDate from '../FormattedDate'
import './article-closing.css'


const ArticleClosing = ({ published, closing }) => {
  return <div className="article-closing">
    <div className="article-closing-avatar">
      <Avatar articleClosing />
    </div>

    <div className="article-closing-everything">
      <div className="article-closing-meta">
        <span>Published by Oleg Gromov</span>
        <span>on <FormattedDate date={published} /></span>
      </div>

      {closing && <div className="article-closing-text">
        <Text content={closing} />
      </div>}

      <div className="article-closing-actions">
        <a href="#comments" className="article-closing-cta">Leave a comment</a>
      </div>
    </div>
  </div>
}

export default ArticleClosing
