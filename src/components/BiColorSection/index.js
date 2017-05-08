import { Bit } from 'stemcell'
import { array, node, object, oneOfType } from 'prop-types'
import React from 'react'

const style = {
  aside: {
    backgroundColor: 'var(--colorAccent)',
    display: 'flex',
    flexDirection: 'column',
    paddingRight: 'calc((100vw - var(--maxWidth)) / 2)',
    width: '45%'
  },
  content: {
    '--colorBackground': 'var(--colorPrimary-50)',
    backgroundColor: 'var(--colorPrimary-50)',
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
    <Bit css={style.content} paddingRight={3}>
      {children}
    </Bit>
    <Bit css={style.aside} paddingLeft={3} paddingVertical={3}>
      {aside}
    </Bit>
  </Bit>
)

BiColorSection.propTypes = {
  aside: node,
  children: node,
  css: oneOfType([array, object])
}

export default BiColorSection
