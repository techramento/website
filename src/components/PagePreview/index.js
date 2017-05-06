import { Bit, Heading, Image, Paragraph, Text } from 'stemcell'
import Link from '../Link'
import React from 'react'
import { string } from 'prop-types'

const style = {
  headingContainer: {
    flexGrow: 1
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    minWidth: '100%'
  },
  imageContainer: {
    flexBasis: 'auto',
    flexShrink: 0
  },
  link: {
    textDecoration: 'none'
  },
  metadata: {
    color: 'var(--colorNeutral)'
  },
  root: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const PagePreview = ({ __url, date, description, hero, title }) => {
  let pageDate = null
  let pageDateNode = null
  if (date) {
    pageDate = new Date(date)
    pageDateNode = (
      <Text as="time" key={pageDate.toISOString()}>
        {pageDate.toDateString()}
      </Text>
    )
  }
  return (
    <Bit css={style.root} marginTop={2}>
      <Bit css={style.imageContainer} height={10} paddingRight={1} width={20}>
        <Image cover css={style.image} size={1} src={hero}/>
      </Bit>
      <Bit css={style.headingContainer}>
        <Bit>
          <Heading level={5}>
            <Link to={__url}>
              {title}
            </Link>
          </Heading>
        </Bit>
        <Paragraph css={style.metadata} size="brevier">
          {pageDateNode}
        </Paragraph>
        <Paragraph size="longPrimer">
          {description}
        </Paragraph>
        <Paragraph marginTop={1} size="longPrimer">
          <Link css={style.link} to={__url}>
            Read More →
          </Link>
        </Paragraph>
      </Bit>
    </Bit>
  )
}

PagePreview.defaultProps = {
  hero: '/assets/images/news-hero-fallback.jpg'
}

PagePreview.propTypes = {
  __url: string.isRequired,
  date: string,
  description: string,
  hero: string,
  title: string.isRequired
}

export default PagePreview
