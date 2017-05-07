import { Bit, Heading, Paragraph, Text } from 'stemcell'
import Link from '../Link'
import LocationLink from '../LocationLink'
import Time from '../Time'
import React from 'react'
import { object, shape, string } from 'prop-types'

const style = {
  content: {
    flex: 1
  },
  date: {
    textAlign: 'center'
  },
  dateContainer: {
    borderRightColor: 'var(--colorNeutral-500)'
  },
  day: {
    color: 'var(--colorPrimary-500)',
    fontFamily: 'var(--fontAccent)'
  },
  heading: {
    fontFamily: 'var(--fontAccent)',
    textTransform: 'uppercase'
  },
  link: {
    flex: 1
  },
  month: {
    color: 'var(--colorNeutral-500)',
    fontFamily: 'var(--fontAccent)',
    textTransform: 'uppercase'
  },
  root: {
    background: 'var(--colorNeutral-100)',
    display: 'flex',
    flexDirection: 'row'
  },
  timeContainer: {
    flexDirection: 'row'
  }
}

const EventPreview = ({
  event: { end, location, meetup, start, summary },
  ...props
}) => (
  <Bit css={style.root} marginBottom={2} padding={1}>
    <Bit
      borderRightWidth={1}
      css={style.dateContainer}
      paddingLeft={1}
      paddingRight={2}
    >
      <Paragraph css={style.date}>
        <Time
          css={style.day}
          dateTime={start.dateTime}
          format="D"
          inline={false}
          size="trafalgar"
        />
      </Paragraph>
      <Paragraph css={style.date}>
        <Time
          css={style.month}
          dateTime={start.dateTime}
          format="MMM"
          inline={false}
          size="longPrimer"
        />
      </Paragraph>
    </Bit>
    <Bit css={style.content} marginHorizontal={2}>
      <Heading css={style.heading} level={6}>
        <Link to={meetup.url}>
          {meetup.short_name}: {summary}
        </Link>
      </Heading>
      <Paragraph css={style.timeContainer} marginTop={1}>
        <Text css={style.meta} size="longPrimer">
          <Time dateTime={start.dateTime} format="h:mma"/>
          {'- '}
          <Time dateTime={end.dateTime} format="h:mma"/>
        </Text>
        <Text css={style.link} marginHorizontal={2} size="longPrimer">
          <LocationLink location={location}/>
        </Text>
      </Paragraph>
    </Bit>
    <Paragraph size="longPrimer">
      <Link to={meetup.url}>
        Learn More
      </Link>
    </Paragraph>
  </Bit>
)

EventPreview.propTypes = {
  event: shape({
    end: shape({
      dateTime: string
    }),
    id: string,
    location: object,
    meetup: shape({
      description: string.isRequired,
      url: string.isRequired
    }),
    start: shape({
      dateTime: string
    }),
    summary: string
  })
}

export default EventPreview
