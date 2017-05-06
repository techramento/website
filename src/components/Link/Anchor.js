import React from 'react'
import { string } from 'prop-types'
import { Text } from 'stemcell'

const Anchor = ({ to, ...props }) => (
  <Text as="a" href={to} rel="noopener noreferrer" target="_blank" {...props}/>
)

Anchor.propTypes = {
  to: string
}

export default Anchor
