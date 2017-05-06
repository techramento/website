import AppContainer from '../AppContainer'
import { Bit } from 'stemcell'
import Page from '../layouts/Page'
import React from 'react'

const head = {
  hero: '/assets/images/community/hero@2x.jpg',
  title: `Join Us`
}

const Join = (props) => (
  <AppContainer>
    <Page head={head}>
      <Bit>JOIN US</Bit>
    </Page>
  </AppContainer>
)

export default Join
