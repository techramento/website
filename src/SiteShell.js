import { CssReset, GlobalStylesheet, VerticalRhythm } from 'stemcell'
import { node } from 'prop-types'
import React from 'react'
import ThemeProvider from './components/ThemeProvider'

import theme from './theme'

const rules = {
  ':root': theme.variables,
  body: {
    backgroundColor: 'var(--colorBackground)',
    fontFamily: 'var(--fontPrimary)',
    position: 'relative' // TODO: Determine why this is needed
  }
}

const SiteShell = ({ children }) => (
  <CssReset>
    <GlobalStylesheet rules={rules}/>
    <ThemeProvider>
      <VerticalRhythm baseline={false}>
        {children}
      </VerticalRhythm>
    </ThemeProvider>
  </CssReset>
)

SiteShell.propTypes = {
  children: node
}

export default SiteShell
