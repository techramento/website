import AppContainer from '../AppContainer'
import { arrayOf, shape, string } from 'prop-types'
import EventItem from '../components/EventList/EventItem'
import EventList from '../components/EventList'
import { findMainPage } from '../util/mainNavTools'
import Page from '../layouts/Page'
import React from 'react'
import Section from '../components/Section'

const Events = (props, { metadata: { mainNav } }) => (
  <AppContainer>
    <Page head={findMainPage(mainNav, 'Events')}>
      <Section marginTop={2}>
        <EventList featureFirst={true} limitPerSection={4}>
          {(event) => (
            <EventItem event={event} key={event.id} marginVertical={1}/>
          )}
        </EventList>
      </Section>
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
