import { array, node, object, oneOfType, string } from 'prop-types'
import { Bit } from 'stemcell'
import HeroOverlay from '../HeroOverlay'
import React from 'react'
import Section from '../Section'

const style = {
  root: {
    color: 'var(--colorText)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  section: {
    justifyContent: 'center'
  }
}

const HeroSection = ({ children, css, src, ...props }) => (
  <Bit css={[style.root, css]} {...props}>
    <Section css={style.section}>
      {children}
    </Section>
    <HeroOverlay src={src}/>
  </Bit>
)

HeroSection.propTypes = {
  children: node,
  css: oneOfType([array, object]),
  src: string.isRequired
}

export default HeroSection
