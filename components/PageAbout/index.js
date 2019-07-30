import React from 'react'
import Layout from '../Layout'
import Caption from '../Caption'
import Footer from '../Footer'
import Experience from '../Experience'
import Text from '../Text'
import AvatarLine from '../AvatarLine'
import './page-about.css'

const renderLink = (name, { url, title }) => {
  const prefix = title.match(/^@/) ? '@' : ''
  const trimmedTitle = title.replace(/^@/, '')
  return <li className={name} key={url}>
    <a href={url} target="_blank" rel="noopener" title={name}>
      {prefix}<span>{trimmedTitle}</span>
    </a>
  </li>
}

const PageAbout = ({ meta, data, common }) => {
  return <Layout common={common} title={data.title} description={meta.description}>
    <main>
      <Caption>
        <h1>{data.title}</h1>
      </Caption>
      <AvatarLine data={data.avatarLine} />
      <Text className="page-about-text" content={data.intro} />
      <Text className="page-about-text" content={data.interests} />
      <Text className="page-about-cta" content={data.interestsCta} />
      <Experience {...data.experience} />
      <Text className="page-about-text" className="page-about-cta" content={data.experienceCta} />
      <Text className="page-about-text" content={data.social} />
      <aside className="page-about-social">
        <ul>
          {Object.keys(data.links).map(key => renderLink(key, data.links[key]))}
        </ul>
      </aside>
      <Text className="page-about-text page-about-closing" content={data.closing} />
    </main>
    <Footer {...common.footer} />
  </Layout>
}

export default PageAbout
