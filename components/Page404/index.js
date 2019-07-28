import React from 'react'
import Layout from '../Layout'
import Caption from '../Caption'
import Footer from '../Footer'
import Text from '../Text'
import './404.css'

const getRandom = limit => Math.floor(Math.random() * limit)

const Page404 = ({ common, data }) => {
  const tryLuck = (e) => {
    e.preventDefault()
    const randomPage = common.pages[getRandom(common.pages.length)]
    window.location = randomPage.meta.url
  }

  return <Layout common={common} title={data.title}>
    <Caption>
      <h1 className="not-found-caption">404<br />{data.title}</h1>
    </Caption>
    <Text content={data.content} />
    <div dangerouslySetInnerHTML={{__html: data.lucky }} onClick={tryLuck} />
    <Footer {...common.footer} />
  </Layout>
}

export default Page404
