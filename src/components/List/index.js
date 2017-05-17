import {
  array,
  bool,
  func,
  number,
  object,
  oneOfType,
  node,
  string
} from 'prop-types'
import { Bit, Paragraph } from 'stemcell'
import emptyAry from 'empty/array'
import { extractFeatureableEvent } from '../../util/eventTools'
import React, { isValidElement } from 'react'

const style = {
  emptyMsg: {
    color: 'var(--colorEmpty)',
    fontFamily: 'var(--fontAccent)'
  },
  root: {
    listStyle: 'none',
    padding: 0
  }
}

const List = ({
  children,
  collection,
  css,
  emptyMessage,
  featureFirst,
  isFeatureable,
  limit,
  renderFeature,
  ...props
}) => {
  let items = emptyMessage
  let featuredEvent = null
  if (collection.length) {
    items = collection.slice(0, limit || collection.length)
    if (featureFirst) {
      [featuredEvent, items] = extractFeatureableEvent(items, isFeatureable)
    }
    items = items.map(children)
  } else if (!isValidElement(emptyMessage)) {
    items = <Paragraph css={style.emptyMsg}>{emptyMessage}</Paragraph>
  }
  return (
    <Bit css={[style.root, css]} {...props}>
      {featuredEvent}
      {items}
    </Bit>
  )
}

List.defaultProps = {
  collection: emptyAry
}

List.propTypes = {
  children: func.isRequired,
  collection: array.isRequired,
  css: oneOfType([array, object]),
  emptyMessage: oneOfType([node, string]),
  featureFirst: bool,
  isFeatureable: func,
  limit: number,
  renderFeature: func
}

export default List
