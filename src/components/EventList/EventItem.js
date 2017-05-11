import { Bit, Heading, Paragraph, Text, Time } from 'stemcell'
import Link from '../Link'
import LocationLink from '../LocationLink'
import { object } from 'prop-types'
import React from 'react'

const style = {
  date: {
    flexDirection: 'row'
  },
  day: {
    color: 'var(--colorPrimary-500)',
    fontFamily: 'var(--fontAccent)',
    textTransform: 'uppercase'
  },
  headingContainer: {
    flex: 1
  },
  link: {
    textAlign: 'center'
  },
  location: {
    flex: 1
  },
  root: {
    display: 'flex',
    flexDirection: 'row'
  },
  subtitle: {
    fontFamily: 'var(--fontAccent)',
    textTransform: 'uppercase'
  },
  time: {
    color: 'var(--colorNeutral-500)'
  }
}

const EventItem = ({ event, ...props }) => {
  if (!event) {
    return null
  }
  const { description, end, location, meetup, start, summary } = event
  return (
    <Bit css={style.root} marginBottom={2}>
      <Bit css={style.headingContainer} marginHorizontal={2}>
        <Heading css={style.subtitle} level={6}>
          <Link to={meetup.url}>
            {meetup.short_name}: {summary}
          </Link>
        </Heading>
        <Paragraph marginTop={1} size="longPrimer">
          {description}
        </Paragraph>
        <Bit css={style.date} marginTop={1}>
          <Text css={[style.subtitle, style.time]} size="longPrimer">
            <Time dateTime={start.dateTime} format="h:MM tt"/>
            {' - '}
            <Time dateTime={end.dateTime} format="h:MM tt"/>
          </Text>
          <Text css={style.location} marginHorizontal={2} size="longPrimer">
            <LocationLink location={location}/>
          </Text>
        </Bit>
      </Bit>
      <Paragraph css={style.link} minWidth={4} size="longPrimer">
        <Link to={meetup.url}>
          Learn More
        </Link>
      </Paragraph>
    </Bit>
  )
}

EventItem.propTypes = {
  event: object
}

export default EventItem
