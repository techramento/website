import { array, func, object } from 'prop-types'
import emptyObj from 'empty/object'
import Fetch from '../Fetch'
import { groupBy as _groupBy, reduce } from 'lodash-es'
import React from 'react'

// eslint-disable-next-line max-len
const CALENDAR_URL =
  'https://qzpvb05ind.execute-api.us-east-1.amazonaws.com/prod'
const DefaultOptions = { crossDomain: true, mode: 'cors' }

function sectionCollection (set, data, key) {
  set.push({
    data,
    key
  })
  return set
}

function mergeWithOrgs (events, organizations) {
  return events.map((event) => {
    const organization = organizations.find((o) => event.meetup.short_name)
    return Object.assign({}, event, {
      organization
    })
  })
}

const EventProvider = ({ children, groupBy, options }, { organizations }) => (
  <Fetch options={{ ...DefaultOptions, options }} url={CALENDAR_URL}>
    {(events) => {
      events = mergeWithOrgs(events, organizations)
      if (groupBy) {
        events = reduce(_groupBy(events, groupBy), sectionCollection, [])
      }
      return children(events)
    }}
  </Fetch>
)

EventProvider.contextTypes = {
  organizations: array
}

EventProvider.defaultProps = {
  options: emptyObj
}

EventProvider.propTypes = {
  children: func,
  groupBy: func,
  options: object
}

export default EventProvider
