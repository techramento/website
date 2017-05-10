import { Bit, Paragraph, Text } from 'stemcell'
import ComponentHeading from '../ComponentHeading'
import PricingBox from '../PricingBox'
import React from 'react'
import Section from '../Section'

const style = {
  content: {
    textAlign: 'center'
  },
  footer: {
    textAlign: 'center'
  },
  pricing: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

const DonateToday = (props) => (
  <Section {...props}>
    <ComponentHeading>
      Donate Today
    </ComponentHeading>
    <Paragraph
      css={style.content}
      marginHorizontal={5}
      marginTop={1}
      size="longPrimer"
    >
      Even if you do not run an organization, you can still join our mission
      in building the Sacramento Tech Community! With your help, we can fund
      new and exciting technology events so that Sacramento can learn from
      the world’s best and brightest and expand upon the local organizations
      that have already started improving our community.
    </Paragraph>
    <Bit css={style.pricing} marginTop={4}>
      <PricingBox
        description="As low as"
        label="Donate"
        rate="$5"
        title="Donations"
        to="/"
      >
        <Text inline={false}>
          Great for individuals
        </Text>
        <Text inline={false}>
          Tax deductible
        </Text>
        <Text inline={false}>
          Support SacTech!
        </Text>
      </PricingBox>
      <PricingBox
        description="Starting at"
        invert
        label="Sponsor"
        rate="$2,048"
        title="Sponsorships"
        to="/"
      >
        <Text inline={false}>
          Recognition at Events
        </Text>
        <Text inline={false}>
          Connect with attendees
        </Text>
        <Text inline={false}>
          Support the community
        </Text>
      </PricingBox>
    </Bit>
    <Paragraph
      css={style.footer}
      marginHorizontal={5}
      marginTop={4}
      size="brevier"
    >
      Techramento is recognized by the Federal
      Government and the State of California as a 501(c)(3) non-profit
      organization, so your financial contribution will be fully
      tax-deductible!
    </Paragraph>
  </Section>
)

export default DonateToday
