import { array, node, object, oneOfType } from 'prop-types'
import { Bit } from 'stemcell'
import React from 'react'

const style = {
  root: {
    '--colorAccent': 'var(--colorPrimary)',
    '--colorLink': 'var(--colorText)',
    '--colorText': 'white',
    color: 'var(--colorText)',
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
