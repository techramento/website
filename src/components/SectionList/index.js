import {
  array,
  arrayOf,
  bool,
  func,
  number,
  object,
  shape,
  string
} from 'prop-types'
import { Bit } from 'stemcell'
import emptyFn from 'empty/function'
import List from '../List'
import React from 'react'

const style = {
  list: {
    flex: 1
  }
}

const SectionList = ({
  children,
  emptyMessage,
  featureFirst,
  featureFirstPerSection,
  limit,
  limitPerSection,
  renderFeature,
  renderSectionHeader,
  sectionProps,
  sections,
  ...props
}) => {
  let featuredEvent = null
  if (featureFirst) {
    featuredEvent = renderFeature(sections[0].data[0])
    sections[0].data = sections[0].data.slice(1, sections[0].data.length)
    // If a section is now empty, purge it
    if (!sections[0].data.length) {
      sections = sections.slice(1, sections.length)
    }
  }
  if (limit) {
    sections = sections.slice(0, limit)
  }
  const blocks = sections.reduce((set, section) => {
    set.push(
      <Bit key={section.key} {...props}>
        {renderSectionHeader(section)}
        <List
          collection={section.data}
          css={style.list}
          emptyMessage={emptyMessage}
          featureFirst={featureFirstPerSection}
          limit={limitPerSection}
          renderFeature={renderFeature}
        >
          {children}
        </List>
      </Bit>
    )
    return set
  }, [])
  return (
    <Bit>
      {featuredEvent}
      {blocks}
    </Bit>
  )
}

SectionList.defaultProps = {
  children: emptyFn,
  renderSectionHeader: emptyFn
}

SectionList.propTypes = {
  children: func,
  emptyMessage: string,
  featureFirst: bool,
  featureFirstPerSection: bool,
  limit: number,
  limitPerSection: number,
  renderFeature: func,
  renderSectionHeader: func,
  sectionProps: object,
  sections: arrayOf(
    shape({
      data: array,
      key: string
    })
  )
}

export default SectionList
