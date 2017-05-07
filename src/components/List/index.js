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
  renderFeature,
  limit,
  ...props
}) => {
  let items = emptyMessage
  let featuredEvent = null
  if (collection.length) {
    items = collection.slice(0, limit || collection.length)
    if (featureFirst) {
      featuredEvent = renderFeature(items[0])
      items = items.slice(1, items.length)
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
  limit: number,
  renderFeature: func
}

export default List
