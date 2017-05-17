import { Bit } from 'stemcell'
import ComponentHeading from '../ComponentHeading'
import EventList from '../EventList'
import EventPreview from '../EventPreview'
import emptyFn from 'empty/function'
import Link from '../Link'
import { number } from 'prop-types'
import React from 'react'
import Section from '../Section'

const style = {
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  list: {
    flex: 1
  }
}

function isFeatureable (event) {
  return Boolean(event.organization)
}

const UpcomingEvents = ({ numberOfEvents, ...props }) => (
  <Section {...props}>
    <ComponentHeading>
      Events
    </ComponentHeading>
    <EventList
      css={style.list}
      featureFirst
      isFeatureable={isFeatureable}
      limit={numberOfEvents}
      renderSectionHeader={emptyFn}
    >
      {(event) => <EventPreview event={event} flex={1} key={event.id}/>}
    </EventList>
    <Bit as="footer" css={style.footer} marginTop={1}>
      <Link outline to="events">
        All Events
      </Link>
    </Bit>
  </Section>
)

UpcomingEvents.propTypes = {
  numberOfEvents: number
}

export default UpcomingEvents
