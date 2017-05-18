import { array, node, object, oneOfType } from 'prop-types'
import { Bit } from 'stemcell'
import React from 'react'
import ThemeProvider from '../ThemeProvider'

const style = {
  root: {
    fontFamily: `var(--fontAccent)`,
    fontWeight: 400
  }
}

const HeaderContainer = ({ children, css, ...props }) => (
  <ThemeProvider theme="invert">
    <Bit css={[style.root, css]} {...props}>{children}</Bit>
  </ThemeProvider>
)

HeaderContainer.propTypes = {
  children: node,
  css: oneOfType([array, object])
}

export default HeaderContainer
