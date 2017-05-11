import { Bit } from 'stemcell'
import { array, node, object } from 'prop-types'
import React from 'react'

const style = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
}

const Container = ({
  children,
  history,
  location,
  params,
  route,
  routeParams,
  routes,
  ...props
}) => (
  <Bit css={style.root} {...props}>
    {children}
  </Bit>
)

Container.propTypes = {
  children: node,
  history: object,
  location: object,
  params: object,
  route: object,
  routeParams: object,
  routes: array
}

export default Container
