import Anchor from './Anchor'
import { array, bool, func, node, object, oneOfType, string } from 'prop-types'
import React from 'react'
import RouterLink from './RouterLink'

const isExternalLink = (to) => to && to.includes('://')

const style = {
  outline: {
    ':hover': {
      backgroundColor: 'var(--linkColor)',
      borderColor: 'var(--linkColor)',
      color: 'var(--accentColor)'
    },
    borderColor: 'var(--linkColor)',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase'
  },
  root: {
    color: 'var(--linkColor)',
    transition: '0.4s all'
  }
}

const Link = ({ children, css, outline, size, ...props }, { theme }) => {
  let LinkComponent = RouterLink
  if (isExternalLink(props.to)) {
    LinkComponent = Anchor
  }
  const linkCss = [style.root]
  let linkProps = {}
  if (outline) {
    linkCss.push(style.outline)
    linkProps = {
      ...linkProps,
      borderWidth: 1,
      marginTop: 1,
      padding: 1,
      size: size || 'longPrimer'
    }
  }
  return (
    <LinkComponent {...linkProps} css={[linkCss, css]} {...props}>
      {children}
    </LinkComponent>
  )
}

Link.contextTypes = {
  theme: object
}

Link.propTypes = {
  children: node,
  color: string,
  css: oneOfType([array, object]),
  outline: bool,
  size: string,
  style: func,
  to: string
}

export default Link
