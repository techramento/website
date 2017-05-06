import { CssReset, GlobalStylesheet, VerticalRhythm } from 'stemcell'
import { node } from 'prop-types'
import React from 'react'

import theme from './theme'

const rules = {
  ':root': theme.variables,
  body: {
    backgroundColor: 'var(--backgroundColor)',
    fontFamily: 'var(--fontPrimary)',
    position: 'relative' // TODO: Determine why this is needed
  }
}

const SiteShell = ({ children }) => (
  <CssReset>
    <GlobalStylesheet rules={rules}/>
    <VerticalRhythm baseline>
      {children}
    </VerticalRhythm>
  </CssReset>
)

SiteShell.propTypes = {
  children: node
}

export default SiteShell
