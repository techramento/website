import { Bit, Heading, Image, Text, Paragraph } from 'stemcell'
import Link from '../Link'
import LocationLink from '../LocationLink'
import { object, shape, string } from 'prop-types'
import Time from '../Time'
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
  thumbnail: {
    maxHeight: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    minWidth: '100%'
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
        <Image
          cover
          css={style.thumbnail}
          size={1}
          src="https://static.pexels.com/photos/30342/pexels-photo-30342.jpg"
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
        <Paragraph css={style.metadata} marginTop={1} size="longPrimer">
          <Time dateTime={start.dateTime} format="dddd, MMMM D [at] h:mma"/>
        </Paragraph>
        <Paragraph css={style.metadata} size="longPrimer">
          <LocationLink location={location}/>
        </Paragraph>
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
