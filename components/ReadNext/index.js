import React from 'react'
import './read-next.css'

const getNextPage = (url, pagesList) => {
  const matches = pagesList.filter(page => page.meta.url === url)
  return matches[0] || null
}

const ReadNext = ({ nextUrl, pagesList, defaultMenu }) => {
  const nextPage = getNextPage(nextUrl, pagesList)
  return <nav className="read-next">
    <h3>I suggest proceeding with:</h3>
    <ul>
      <li className="read-next-default">
        <a href={defaultMenu.url}>{defaultMenu.title}</a>
      </li>
      {nextPage && <li className="read-next-suggested">
        <a href={nextPage.meta.url}>{nextPage.data.title}</a>
      </li>}
    </ul>
  </nav>
}

export default ReadNext
