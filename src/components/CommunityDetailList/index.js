import { array } from 'prop-types'
import { Bit, Heading, Image, Paragraph } from 'stemcell'
import ComponentHeading from '../ComponentHeading'
import enhanceCollection from 'phenomic/lib/enhance-collection'
import Link from '../Link'
import List from '../List'
import React from 'react'
import Section from '../Section'
import SocialLinks from '../SocialLinks'

const style = {
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  heading: {
    color: 'var(--colorAccent)',
    fontFamily: 'var(--fontAccent)'
  },
  list: {
    alignContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  org: {
    display: 'flex',
    flexDirection: 'row'
  },
  topics: {
    color: 'var(--colorAccent)'
  }
}

const CommunityDetailList = (props, { collection }) => {
  const orgs = enhanceCollection(collection, {
    filter: {
      type: 'Organization'
    },
    sort: 'short_name'
  })
  return (
    <Section {...props}>
      <ComponentHeading>
        Organizations
      </ComponentHeading>
      <List
        collection={orgs}
        css={style.list}
        emptyMessage="No Community Organizations"
      >
        {(org) => (
          <Bit
            css={style.org}
            key={org.short_title}
            paddingVertical={2}
            width={20}
          >
            <Bit paddingRight={1}>
              <Image fill size={6} src={org.logo}/>
              <SocialLinks networks={org.social} size={1}/>
            </Bit>
            <Bit>
              <Heading css={style.heading} level={6}>
                {org.short_title}
              </Heading>
              <Paragraph marginTop={1} size="longPrimer">
                {org.description}
              </Paragraph>
              <Paragraph css={style.topics} marginTop={1} size="brevier">
                {org.topics.join(', ')}
              </Paragraph>
            </Bit>
          </Bit>
        )}
      </List>
      <Bit as="footer" css={style.footer}>
        <Link outline to="/join" width={5}>
          Join Us
        </Link>
      </Bit>
    </Section>
  )
}

CommunityDetailList.contextTypes = {
  collection: array
}

export default CommunityDetailList
