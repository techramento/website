import { Bit } from 'stemcell'
import React, { PropTypes } from 'react'

const style = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
}

const Container = ({ children, ...props }) => (
  <Bit css={style.root} {...props}>
    {children}
  </Bit>
)

Container.propTypes = {
  children: PropTypes.node
}

export default Container
