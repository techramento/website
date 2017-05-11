import { Bit, Heading } from 'stemcell'
import { bool, func, number } from 'prop-types'
import React, { Component } from 'react'
import emptyFn from 'empty/function'
import EventProvider from '../EventProvider'
import FeaturedEvent from '../FeaturedEvent'
import SectionList from '../SectionList'

const style = {
  list: {
    display: 'flex',
    flexDirection: 'row'
  },
  sectionHeading: {
    color: 'var(--colorAccent)',
    fontFamily: 'var(--fontAccent)',
    textTransform: 'uppercase'
  }
}

function groupByDay (item) {
  const startDate = new Date(item.start.dateTime)
  let day = startDate.getDate()
  // eslint-disable-next-line no-magic-numbers
  if (day < 10) {
    day = `0${day}`
  }
  return `${startDate.getMonth() + 1}/${day}`
}

function defaultRenderFeature (event) {
  return <FeaturedEvent event={event} marginBottom={2}/>
}

function defaultRenderSectionHeader (group) {
  return (
    <Bit width={3}>
      <Heading css={style.sectionHeading} level={4}>
        {group.key}
      </Heading>
    </Bit>
  )
}

export default class EventList extends Component {
  static defaultProps = {
    children: emptyFn,
    featureFirst: false,
    renderFeature: defaultRenderFeature,
    renderSectionHeader: defaultRenderSectionHeader
  }
  static propTypes = {
    children: func,
    featureFirst: bool,
    featureFirstPerSection: bool,
    limit: number,
    limitPerSection: number,
    renderFeature: func,
    renderSectionHeader: func
  }
  render () {
    const {
      children,
      featureFirst,
      featureFirstPerSection,
      limit,
      limitPerSection,
      renderFeature,
      renderSectionHeader,
      ...props
    } = this.props
    return (
      <Bit {...props}>
        <EventProvider groupBy={groupByDay}>
          {(events) => (
            <SectionList
              css={style.list}
              emptyMessage="No events scheduled"
              featureFirst={featureFirst}
              featureFirstPerSection={featureFirstPerSection}
              limit={limit}
              limitPerSection={limitPerSection}
              renderFeature={renderFeature}
              renderSectionHeader={renderSectionHeader}
              sections={events}
            >
              {children}
            </SectionList>
          )}
        </EventProvider>
      </Bit>
    )
  }
}
