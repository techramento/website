import { Bit, Heading, Paragraph, Rule } from 'stemcell'
import { bool, node, string } from 'prop-types'
import React, { Children, cloneElement } from 'react'
import Link from '../Link'
import ThemeProvider from '../ThemeProvider'

const style = {
  accent: {
    fontFamily: 'var(--fontAccent)',
    textTransform: 'uppercase'
  },
  container: {
    backgroundColor: 'var(--colorBackground)',
    clipPath: 'polygon(0 40px, 50% 0, 100% 40px, 100% 100%, 0% 100%)'
  },
  heading: {
    textAlign: 'center'
  },
  link: {
    display: 'block' // TODO: Deprecate this once `block` exists in Text
  },
  root: {
    color: 'var(--colorAccent)',
    filter: 'drop-shadow(0 2px 9px rgba(98,92,121,0.22))'
  },
  rule: {
    backgroundColor: 'var(--colorRule)'
  }
}

const PricingBox = ({
  children,
  description,
  invert,
  label,
  rate,
  title,
  to,
  ...props
}) => (
  <ThemeProvider theme={invert ? 'invert' : 'default'}>
    <Bit css={style.root} {...props}>
      <Bit
        css={style.container}
        minHeight={20}
        paddingBottom={1}
        paddingHorizontal={3}
        paddingTop={3}
        width={14}
      >
        <Heading css={[style.accent, style.heading]} level={5} size="pica">
          {title}
        </Heading>
        <Paragraph marginTop={1} size="brevier">
          {description}
        </Paragraph>
        <Heading css={style.accent} level={2} size="trafalgar">
          {rate}
        </Heading>
        <Rule css={style.rule}/>
        <Paragraph size="longPrimer">
          {Children.map(children, (child) =>
            cloneElement(child, {
              marginTop: 1,
              size: 'longPrimer'
            })
          )}
        </Paragraph>
        <Bit marginTop={2}>
          <Link css={style.link} marginTop={3} outline to={to}>
            {label}
          </Link>
        </Bit>
      </Bit>
    </Bit>
  </ThemeProvider>
)

PricingBox.defaultProps = {
  invert: false
}

PricingBox.propTypes = {
  children: node,
  description: node,
  invert: bool,
  label: node,
  rate: node,
  title: node,
  to: string
}

export default PricingBox
