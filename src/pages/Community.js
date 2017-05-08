import AppContainer from '../AppContainer'
import { arrayOf, shape, string } from 'prop-types'
import ComponentHeading from '../components/ComponentHeading'
import CommunityDetailList from '../components/CommunityDetailList'
import { findMainPage } from '../util/mainNavTools'
import HowWeWork from '../components/HowWeWork'
import Page from '../layouts/Page'
import { Paragraph } from 'stemcell'
import React from 'react'
import Section from '../components/Section'

const style = {
  text: {
    columnCount: 2,
    columnWidth: 100
  }
}

const Community = (props, { metadata: { mainNav } }) => (
  <AppContainer>
    <Page head={findMainPage(mainNav, 'Community')}>
      <Section marginTop={2}>
        <ComponentHeading align="left">
          Stewards
        </ComponentHeading>
        <Paragraph css={style.text} marginTop={1} size="longPrimer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
      </Section>
      <HowWeWork marginTop={3}/>
      <CommunityDetailList marginTop={3}/>
    </Page>
  </AppContainer>
)

Community.contextTypes = {
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

export default Community
