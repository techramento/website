import { Bit, ComponentizeContent, Heading } from 'stemcell'
import { joinUri } from 'phenomic'
import { bool, element, func, node, object, shape, string } from 'prop-types'
import HeaderContainer from '../../components/HeaderContainer'
import Helmet from 'react-helmet'
import HeroOverlay from '../../components/HeroOverlay'
import Loading from '../../components/Loading'
import React from 'react'
import Section from '../../components/Section'
import warning from 'warning'

const style = {
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  heading: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  overlay: {
    backgroundColor: 'var(--colorAccent)'
  },
  pageHeader: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative' // TODO: Move to stemcell?
  }
}

function defaultCallToAction (head) {
  return (
    <Heading css={style.heading} level={1} marginTop={6} size="doublePica">
      {head.title}
    </Heading>
  )
}

const Page = (
  {
    isLoading,
    __filename,
    __url,
    callToAction,
    head,
    body,
    colorOverlay,
    header,
    footer,
    children,
    ...props
  },
  { metadata: { pkg, metaTitle } }
) => {
  const { hero, title } = head
  warning(typeof title === 'string', `Your page '${__filename}' needs a title`)
  metaTitle = [
    metaTitle,
    (head.metaTitle || title || '').replace(/<br\/>/gi, ' ')
  ].join(': ')
  let heroImgSrc
  if (hero && hero.src) {
    heroImgSrc = joinUri(process.env.PHENOMIC_USER_URL, hero.src)
    if (hero.src.match('://')) {
      heroImgSrc = hero.src
    }
  }

  const meta = [
    // TODO: Move all of this to a component
    {
      content: 'article',
      property: 'og:type'
    },
    {
      content: metaTitle,
      property: 'og:title'
    },
    {
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
      property: 'og:url'
    },
    {
      content: heroImgSrc,
      property: 'og:image'
    },
    {
      content: head.description,
      property: 'og:description'
    },
    {
      content: 'summary',
      name: 'twitter:card'
    },
    {
      content: metaTitle,
      name: 'twitter:title'
    },
    {
      content: `@${pkg.twitter}`,
      name: 'twitter:creator'
    },
    {
      content: head.description,
      name: 'twitter:description'
    },
    {
      content: heroImgSrc,
      name: 'twitter:image'
    },
    {
      content: head.description,
      name: 'description'
    }
  ]
  return (
    <Bit {...props}>
      <Helmet meta={meta} title={metaTitle}/>
      <HeaderContainer css={style.pageHeader} paddingVertical={3}>
        <HeroOverlay
          blend={colorOverlay}
          css={style.overlay}
          src={heroImgSrc}
        />
        {callToAction(head)}
      </HeaderContainer>
      <Bit css={style.content}>
        {header}
        <Section>
          {isLoading
            ? <Loading/>
            : <ComponentizeContent>
              {body}
            </ComponentizeContent>}
        </Section>
        {children}
        {footer}
      </Bit>
    </Bit>
  )
}

Page.defaultProps = {
  body: '',
  callToAction: defaultCallToAction
}

Page.propTypes = {
  __filename: string,
  __url: string,
  body: string,
  callToAction: func,
  children: node,
  colorOverlay: bool,
  footer: element,
  head: shape({
    hero: shape({
      src: string.isRequired
    })
  }).isRequired,
  header: element,
  isLoading: bool
}

Page.contextTypes = {
  metadata: shape({
    metaTitle: string.isRequired,
    pkg: object.isRequired
  }).isRequired
}

export default Page
