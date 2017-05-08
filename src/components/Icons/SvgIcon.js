import { array, node, number, object, oneOfType, string } from 'prop-types'
import { Bit } from 'stemcell'
import { css as glamor } from 'glamor'
import React, { Children, cloneElement } from 'react'

const style = {
  root: {
    overflow: 'hidden',
    textAlign: 'center'
  },
  svg: {
    height: '100%',
    maxWidth: '100%',
    objectFit: 'cover',
    width: 'auto'
  }
}

/* eslint-disable max-len */
const SvgIcon = ({
  css,
  primaryColor,
  secondaryColor,
  size,
  viewBox,
  ...props
}) => {
  const fills = [primaryColor, secondaryColor]
  const children = Children.map(props.children, (child, i) =>
    cloneElement(child, {
      fill: fills[i]
    })
  )
  return (
    <Bit css={[style.root, css]} {...props}>
      <svg className={glamor(style.svg)} viewBox={viewBox}>
        {children}
      </svg>
    </Bit>
  )
}

SvgIcon.defaultProps = {
  primaryColor: 'gray',
  secondaryColor: 'white',
  viewBox: '0 0 16 16'
}

SvgIcon.propTypes = {
  children: node.isRequired,
  css: oneOfType([array, object]),
  primaryColor: string,
  secondaryColor: string,
  size: number,
  viewBox: string
}

export default SvgIcon
