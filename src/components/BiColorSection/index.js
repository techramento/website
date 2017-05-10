import { Bit } from 'stemcell'
import { array, node, object, oneOfType } from 'prop-types'
import React from 'react'
import ThemeProvider from '../ThemeProvider'

const style = {
  aside: {
    backgroundColor: 'var(--colorBackground)',
    display: 'flex',
    flexDirection: 'column',
    paddingRight: 'calc((100vw - var(--maxWidth)) / 2)',
    width: '45%'
  },
  content: {
    backgroundColor: 'var(--colorBackground)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 'calc((100vw - var(--maxWidth)) / 2)',
    width: '55%'
  },
  root: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const BiColorSection = ({ aside, children, css, ...props }) => (
  <Bit css={[style.root, css]} {...props}>
    <ThemeProvider theme="callout">
      <Bit css={style.content} paddingRight={3}>
        {children}
      </Bit>
    </ThemeProvider>
    <ThemeProvider theme="invert">
      <Bit css={style.aside} paddingLeft={3} paddingVertical={3}>
        {aside}
      </Bit>
    </ThemeProvider>
  </Bit>
)

BiColorSection.propTypes = {
  aside: node,
  children: node,
  css: oneOfType([array, object])
}

export default BiColorSection
