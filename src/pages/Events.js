import AppContainer from '../AppContainer'
import { arrayOf, shape, string } from 'prop-types'
import { Bit } from 'stemcell'
import { findMainPage } from '../util/mainNavTools'
import Page from '../layouts/Page'
import React from 'react'

const Events = (props, { metadata: { mainNav } }) => (
  <AppContainer>
    <Page head={findMainPage(mainNav, 'Events')}>
      <Bit>EVENTS</Bit>
    </Page>
  </AppContainer>
)

Events.contextTypes = {
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

export default Events
