import { array } from 'prop-types'
import { Bit, Heading, Image, Paragraph } from 'stemcell'
import ComponentHeading from '../ComponentHeading'
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

const SponsorDetailList = (props, { sponsors }) => (
  <Section {...props}>
    <ComponentHeading>
      Corporate Partners
    </ComponentHeading>
    <List
      collection={sponsors}
      css={style.list}
      emptyMessage="No Sponsors Organizations"
    >
      {(sponsor) => (
        <Bit
          css={style.org}
          key={sponsor.short_title}
          paddingVertical={2}
          width={20}
        >
          <Bit paddingRight={1}>
            <Image fill size={6} src={sponsor.logo}/>
            <SocialLinks networks={sponsor.social} size={1}/>
          </Bit>
          <Bit>
            <Heading css={style.heading} level={6}>
              {sponsor.short_title}
            </Heading>
            <Paragraph marginTop={1} size="longPrimer">
              {sponsor.description}
            </Paragraph>
          </Bit>
        </Bit>
      )}
    </List>
    <Bit as="footer" css={style.footer}>
      <Link outline to="/join#donate-today">
        Sponsor Us
      </Link>
    </Bit>
  </Section>
)

SponsorDetailList.contextTypes = {
  sponsors: array
}

export default SponsorDetailList
