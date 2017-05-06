import { array, node, object, oneOfType } from 'prop-types'
import { Bit } from 'stemcell'
import React from 'react'

const style = {
  root: {
    '--accentColor': 'var(--colorPrimary)',
    '--linkColor': 'var(--textColor)',
    '--textColor': 'white',
    color: 'var(--textColor)',
    fontFamily: `var(--fontAccent)`,
    fontWeight: 400
  }
}

const HeaderContainer = ({ children, css, ...props }) => (
  <Bit css={[style.root, css]} {...props}>{children}</Bit>
)

HeaderContainer.propTypes = {
  children: node,
  css: oneOfType([array, object])
}

export default HeaderContainer
