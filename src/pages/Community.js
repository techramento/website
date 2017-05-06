import AppContainer from '../AppContainer'
import { Bit } from 'stemcell'
import Page from '../layouts/Page'
import React from 'react'

const head = {
  hero: '/assets/images/community/hero@2x.jpg',
  title: `Our Community`
}

const Community = (props) => (
  <AppContainer>
    <Page head={head}>
      <Bit>COMMUNITY</Bit>
    </Page>
  </AppContainer>
)

export default Community
