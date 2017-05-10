import AppContainer from '../AppContainer'
import { arrayOf, shape, string } from 'prop-types'
import BoardMemberList from '../components/BoardMemberList'
import { findMainPage } from '../util/mainNavTools'
import HowWeAreDifferent from '../components/HowWeAreDifferent'
import HowWeWork from '../components/HowWeWork'
import Page from '../layouts/Page'
import React from 'react'
import WhatWeDo from '../components/WhatWeDo'

const Join = (props, { metadata: { mainNav } }) => (
  <AppContainer>
    <Page head={findMainPage(mainNav, 'Mission')}>
      <BoardMemberList marginTop={4}/>
      <HowWeAreDifferent marginTop={4}/>
      <WhatWeDo marginTop={4}/>
      <HowWeWork marginTop={4}/>
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
