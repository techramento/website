import { Bit, Heading, Paragraph, Time } from 'stemcell'
import EventThumbnail from './EventThumbnail'
import Link from '../Link'
import LocationLink from '../LocationLink'
import { object, shape, string } from 'prop-types'
import React from 'react'

const style = {
  container: {
    flexGrow: 1
  },
  heading: {
    fontFamily: 'var(--fontAccent)',
    textTransform: 'uppercase'
  },
  metadata: {
    color: 'var(--colorNeutral-500)'
  },
  root: {
    display: 'flex',
    flexDirection: 'row'
  },
  thumbnailContainer: {
    flexBasis: 'auto',
    flexShrink: 0
  }
}

const FeaturedEvent = ({ event, ...props }) => {
  if (!event) {
    return null
  }
  const { location, meetup, start, summary } = event
  return (
    <Bit css={style.root} marginTop={2} {...props}>
      <Bit
        css={style.thumbnailContainer}
        height={12}
        paddingRight={1}
        width={18}
      >
        <EventThumbnail
          dateKey={start.dateTime}
          path={`/assets/images/organizations/${meetup.short_name}`}
        />
      </Bit>
      <Bit css={style.container}>
        <Bit>
          <Heading css={style.heading} level={5}>
            <Link to={meetup.url}>
              {meetup.short_name}: {summary}
            </Link>
          </Heading>
        </Bit>
        <Bit css={style.metadata}>
          <Time
            dateTime={start.dateTime}
            format="dddd, mmmm d 'at' h:MMtt"
            size="longPrimer"
          />
        </Bit>
        <Bit css={style.metadata}>
          <LocationLink location={location} size="longPrimer"/>
        </Bit>
        <Paragraph marginTop={1} size="longPrimer">
          {meetup.description}
        </Paragraph>
        <Paragraph marginTop={1} size="longPrimer">
          <Link to={meetup.url}>
            Learn More →
          </Link>
        </Paragraph>
      </Bit>
    </Bit>
  )
}

FeaturedEvent.propTypes = {
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

export default FeaturedEvent
