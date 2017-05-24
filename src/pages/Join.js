import AppContainer from '../AppContainer'
import { arrayOf, shape, string } from 'prop-types'
import ColumnarParagraph from '../components/ColumnarParagraph'
import ComponentHeading from '../components/ComponentHeading'
import DonateToday from '../components/DonateToday'
import { findMainPage } from '../util/mainNavTools'
import Link from '../components/Link'
import Page from '../layouts/Page'
import React from 'react'
import Section from '../components/Section'
import SponsorDetailList from '../components/SponsorDetailList'
import Testimonials from '../components/Testimonials'
import WhatWeOffer from '../components/WhatWeOffer'

const Join = (props, { metadata: { mainNav } }) => (
  <AppContainer>
    <Page head={findMainPage(mainNav, 'Join')}>
      <Section marginTop={4}>
        <ComponentHeading align="left">
          Indomitable Community
        </ComponentHeading>
        <ColumnarParagraph marginTop={1} size="longPrimer">
          Techramento is a grassroots organization created to spur growth in
          Sacramento’s Tech community. We are looking for organizations
          to join our ranks so we can continue to grow this fledgling community
          of ours. Joining this movement will allow you to focus on your
          organization’s core competencies while leaving logistical and
          financial support to us. Don’t have an organization of our own?
          Consider <Link to="#donate">making a tax-deductible donation</Link> so
          we can continue to build an Indomitable Community!
        </ColumnarParagraph>
      </Section>
      <Testimonials marginTop={4}/>
      <WhatWeOffer/>
      <DonateToday marginTop={4}/>
      <SponsorDetailList marginTop={3}/>
    </Page>
  </AppContainer>
)

Join.contextTypes = {
  metadata: shape({
    mainNav: arrayOf(
      shape({
        description: string,
        label: string,
        route: string
      })
    ).isRequired
  }).isRequired
}

export default Join
