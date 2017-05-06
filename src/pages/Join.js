import AppContainer from '../AppContainer'
import { arrayOf, shape, string } from 'prop-types'
import { Bit } from 'stemcell'
import { findMainPage } from '../util/mainNavTools'
import Page from '../layouts/Page'
import React from 'react'

const Join = (props, { metadata: { mainNav } }) => (
  <AppContainer>
    <Page head={findMainPage(mainNav, 'Join')}>
      <Bit>JOIN US</Bit>
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
