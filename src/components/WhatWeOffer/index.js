import { array } from 'prop-types'
import BiColorSection from '../BiColorSection'
import { Bit, Paragraph, Text } from 'stemcell'
import ComponentHeading from '../ComponentHeading'
import Link from '../Link'
import React from 'react'

const style = {
  aside: {
    alignItems: 'center',
    color: 'var(--colorText)',
    display: 'flex',
    flexDirection: 'column'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  link: {
    flex: 1
  },
  stat: {
    fontFamily: 'var(--fontAccent)'
  }
}

const WhatWeOffer = (props, { organizations, sponsors }) => (
  <BiColorSection
    aside={
      <Bit css={style.aside} width={5}>
        <Text block css={style.stat} size="trafalgar">
          43
        </Text>
        <Text block size="brevier">
          Events
        </Text>

        <Text block css={style.stat} marginTop={1} size="trafalgar">
          {organizations.length}
        </Text>
        <Text block size="brevier">
          Organizations
        </Text>

        <Text block css={style.stat} marginTop={1} size="trafalgar">
          {sponsors.length}
        </Text>
        <Text block size="brevier">
          Sponsors
        </Text>
      </Bit>
    }
    {...props}
  >
    <Bit marginVertical={2}>
      <ComponentHeading align="left">
        What We Offer
      </ComponentHeading>
      <Paragraph marginTop={1} size="longPrimer">
        <Text inline={false}>
          Techramento is committed to providing the Sacramento Tech Community
          with events of outstanding quality. Joining our organization allows
          you to take advantage of the numerous resources that we provide.
          Joining is 100% free and easy to do!
        </Text>
        <Text inline={false} marginTop={1}>
          In order to qualify for support, groups need to meet all of the
          following guidelines:
        </Text>
      </Paragraph>
      {/* TODO: Make this a List component from stemcell */}
      <Paragraph as="ul" marginTop={1} size="longPrimer">
        <Text as="li" inline={false}>
          Meet to discuss a concrete technological topic, idea, or
          philosophy
        </Text>
        <Text as="li" inline={false}>
          Three organizers or volunteers
        </Text>
        <Text as="li" inline={false}>
          An inclusive Code of Conduct
        </Text>
        <Text as="li" inline={false}>
          Conduct business in an public, open source manner using common
          tools collaboration tools.
        </Text>
        <Text as="li" inline={false}>
          Be good community stewards
        </Text>
      </Paragraph>
      <Paragraph as="footer" css={style.footer} marginTop={1} size="longPrimer">
        <Link css={style.link} to="/">
          Become a Member
        </Link>
        <Link css={style.link} to="/">
          Apply for a Grant
        </Link>
        <Link css={style.link} to="/">
          Engage Your Community
        </Link>
      </Paragraph>
    </Bit>
  </BiColorSection>
)

WhatWeOffer.contextTypes = {
  organizations: array,
  sponsors: array
}

export default WhatWeOffer
