import { array, node, object, oneOfType } from 'prop-types'
import { Paragraph } from 'stemcell'
import React from 'react'

const style = {
  root: {
    columnCount: 2,
    columnWidth: 100
  }
}

const ColumnarParagraph = ({ css, ...props }) => (
  <Paragraph css={[style.root, css]} {...props}/>
)

ColumnarParagraph.propTypes = {
  children: node,
  css: oneOfType([array, object])
}

export default ColumnarParagraph
