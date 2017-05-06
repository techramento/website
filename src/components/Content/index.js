import { Bit } from 'stemcell'
import { array, node, object, oneOfType } from 'prop-types'
import React from 'react'

const style = {
  root: {
    alignItems: 'stretch',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1
  }
}

const Content = ({ children, css, ...props }) => (
  <Bit css={[style.root, css]} {...props}>
    {children}
  </Bit>
)

Content.propTypes = {
  children: node,
  css: oneOfType([array, object])
}

export default Content
