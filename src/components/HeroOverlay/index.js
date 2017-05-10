import { array, bool, object, oneOfType, string } from 'prop-types'
import { Bit } from 'stemcell'
import React from 'react'

const style = {
  overlay: (blend, blendMode, hero) => ({
    backgroundBlendMode: blend ? blendMode : null,
    backgroundImage: `url(${hero})`
  }),
  root: {
    backgroundPositionX: '50%',
    backgroundPositionY: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'brightness(0.75)',
    position: 'absolute',
    zIndex: -1
  }
}

const HeroOverlay = ({ blend, blendMode, css, hero, ...props }) => (
  <Bit
    bottom={0}
    css={[style.root, style.overlay(blend, blendMode, hero), css]}
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
  hero: string
}

export default HeroOverlay
