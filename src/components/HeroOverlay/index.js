import { array, bool, object, oneOfType, string } from 'prop-types'
import { Bit } from 'stemcell'
import React from 'react'

const style = {
  overlay: (blend, blendMode, src) => ({
    backgroundBlendMode: blend ? blendMode : null,
    backgroundImage: `url(${src})`
  }),
  root: {
    backgroundColor: 'var(--colorBackground)',
    backgroundPositionX: '50%',
    backgroundPositionY: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'var(--colorText)',
    filter: 'brightness(0.75)',
    position: 'absolute',
    zIndex: -1
  }
}

const HeroOverlay = ({ blend, blendMode, css, src, ...props }) => (
  <Bit
    bottom={0}
    css={[style.root, style.overlay(blend, blendMode, src), css]}
    left={0}
    right={0}
    top={0}
    {...props}
  />
)

HeroOverlay.defaultProps = {
  blend: true,
  blendMode: 'soft-light'
}

HeroOverlay.propTypes = {
  blend: bool,
  blendMode: string,
  css: oneOfType([array, object]),
  src: string
}

export default HeroOverlay
