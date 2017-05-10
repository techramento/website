import { array, node, object, oneOfType, string } from 'prop-types'
import { Bit } from 'stemcell'
import HeroOverlay from '../HeroOverlay'
import React from 'react'
import Section from '../Section'

const style = {
  overlay: {
    backgroundColor: 'var(--colorBackground)'
  },
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

const HeroSection = ({ children, css, hero, ...props }) => (
  <Bit css={[style.root, css]} {...props}>
    <Section css={style.section}>
      {children}
    </Section>
    <HeroOverlay css={style.overlay} hero={hero}/>
  </Bit>
)

HeroSection.propTypes = {
  children: node,
  css: oneOfType([array, object]),
  hero: string
}

export default HeroSection
