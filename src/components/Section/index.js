import { array, node, object, oneOfType } from 'prop-types'
import { Bit } from 'stemcell'
import React from 'react'

const style = {
  content: {
    alignSelf: 'center',
    maxWidth: 'var(--maxWidth)',
    width: '100%'
  }
}

const Section = ({ children, css, ...props }) => (
  <Bit css={[style.content, css]} {...props}>{children}</Bit>
)

Section.propTypes = {
  children: node,
  css: oneOfType([array, object])
}

export default Section
