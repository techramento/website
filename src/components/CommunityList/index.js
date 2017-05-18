import { array } from 'prop-types'
import { Bit, Paragraph } from 'stemcell'
import ComponentHeading from '../ComponentHeading'
import Link from '../Link'
import List from '../List'
import ListItem from '../List/ListItem'
import React from 'react'
import Section from '../Section'

const style = {
  description: {
    textAlign: 'center'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
}

const CommunityList = (props, { organizations }) => (
  <Section {...props}>
    <ComponentHeading>
      Community
    </ComponentHeading>
    <Paragraph
      css={style.description}
      marginTop={1}
      paddingHorizontal={5}
      size="longPrimer"
    >
      We are dedicated to strengthening the technology community in
      Sacramento by providing quality events and experiences to everyone.
      Check out some of the fantastic organizations that have joined our
      ranks to provide you, and all of Sacramento, with the best resources
      our area needs.
    </Paragraph>
    <List
      collection={organizations}
      css={style.list}
      emptyMessage="No Community Organizations"
      marginTop={2}
    >
      {(
        { logo, short_title } // eslint-disable-next-line camelcase
      ) => <ListItem imgsrc={logo} key={short_title} title={short_title}/>}
    </List>
    <Bit as="footer" css={style.footer} marginTop={1}>
      <Paragraph paddingHorizontal={1}>
        <Link outline to="/join">
          Join Us
        </Link>
      </Paragraph>
      <Paragraph paddingHorizontal={1}>
        <Link outline to="/community#organizations">
          See More
        </Link>
      </Paragraph>
    </Bit>
  </Section>
)

CommunityList.contextTypes = {
  organizations: array
}

export default CommunityList
