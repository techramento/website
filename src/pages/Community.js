import AppContainer from '../AppContainer'
import { arrayOf, shape, string } from 'prop-types'
import { Bit } from 'stemcell'
import { findMainPage } from '../util/mainNavTools'
import Page from '../layouts/Page'
import React from 'react'

const Community = (props, { metadata: { mainNav } }) => (
  <AppContainer>
    <Page head={findMainPage(mainNav, 'Community')}>
      <Bit>COMMUNITY</Bit>
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
