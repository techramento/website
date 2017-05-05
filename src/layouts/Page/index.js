import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import warning from 'warning'
import { BodyContainer, joinUri, Link } from 'phenomic'

import Button from '../../components/Button'
import Loading from '../../components/Loading'

import styles from './index.css'

const Page = (
  { isLoading, __filename, __url, head, body, header, footer, children },
  { metadata: { pkg } }
) => {
  warning(
    typeof head.title === 'string',
    `Your page '${__filename}' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const socialImage = head.hero && head.hero.match('://')
    ? head.hero
    : joinUri(process.env.PHENOMIC_USER_URL, head.hero)

  const meta = [
    { content: 'article', property: 'og:type' },
    { content: metaTitle, property: 'og:title' },
    {
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
      property: 'og:url'
    },
    { content: socialImage, property: 'og:image' },
    { content: head.description, property: 'og:description' },
    { content: 'summary', name: 'twitter:card' },
    { content: metaTitle, name: 'twitter:title' },
    { content: `@${pkg.twitter}`, name: 'twitter:creator' },
    { content: head.description, name: 'twitter:description' },
    { content: socialImage, name: 'twitter:image' },
    { content: head.description, name: 'description' }
  ]

  return (
    <div className={styles.page}>
      <Helmet meta={meta} title={metaTitle}/>
      {
        <div
          className={styles.hero}
          style={
            head.hero && {
              background: `#111 url(${head.hero}) 50% 50% / cover`
            }
          }
        >
          <div className={styles.header}>
            <div className={styles.wrapper}>
              <h1 className={styles.heading}>{head.title}</h1>
              {head.cta &&
                <Link to={head.cta.link}>
                  <Button className={styles.cta} light {...head.cta.props}>
                    {head.cta.label}
                  </Button>
                </Link>}
            </div>
          </div>
        </div>
      }
      <div className={`${styles.wrapper} ${styles.pageContent}`}>
        {header}
        <div className={styles.body}>
          {isLoading ? <Loading/> : <BodyContainer>{body}</BodyContainer>}
        </div>
        {children}
        {footer}
      </div>
    </div>
  )
}

Page.propTypes = {
  __filename: PropTypes.string,
  __url: PropTypes.string,
  body: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.element,
  head: PropTypes.object.isRequired,
  header: PropTypes.element,
  isLoading: PropTypes.bool
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired
}

export default Page
