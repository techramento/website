import { array } from 'prop-types'
import { Bit, Paragraph, Text } from 'stemcell'
import ComponentHeading from '../ComponentHeading'
import enhanceCollection from 'phenomic/lib/enhance-collection'
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

const SponsorList = (props, { collection }) => {
  const sponsors = enhanceCollection(collection, {
    filter: {
      class: 'Sponsor'
    },
    sort: 'short_name'
  })
  return (
    <Section {...props}>
      <ComponentHeading>
        Sponsors
      </ComponentHeading>
      <Paragraph
        css={style.description}
        marginTop={1}
        paddingHorizontal={5}
        size="longPrimer"
      >
        Techramento would not be possible without the generous support of our
        sponsors. Thanks go out to all of our sponsors that, past and future,
        that have donated their time or resources into building Sacramento’s
        tech community!
      </Paragraph>
      <List
        collection={sponsors}
        css={style.list}
        emptyMessage="No Sponsors yet!"
        marginTop={2}
      >
        {(sponsor) => (
          <ListItem
            imgsrc={sponsor.logo}
            key={sponsor.short_title}
            title={sponsor.short_title}
          />
        )}
      </List>
      <Bit as="footer" css={style.footer} marginTop={1}>
        <Text paddingHorizontal={1}>
          <Link outline to="/sponsors">
            Sponsor Us
          </Link>
        </Text>
        <Text paddingHorizontal={1}>
          <Link outline to="/community/sponsors">
            See More
          </Link>
        </Text>
      </Bit>
    </Section>
  )
}

SponsorList.contextTypes = {
  collection: array
}

export default SponsorList
