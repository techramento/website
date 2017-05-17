import { arrayOf, node, shape, string } from 'prop-types'
import { Bit } from 'stemcell'
import Link from '../Link'
import React from 'react'

const ActiveClassName = 'main-nav-active-link'

const style = {
  link: {
    [`&.${ActiveClassName}`]: {
      borderBottomColor: 'var(--colorLink)',
      boxShadow: 'inset 0 -2px 0 0 var(--colorLink)'
    },
    ':hover': {
      borderColor: 'initial'
    },
    alignItems: 'center',
    borderColor: 'rgba(255,255,255,0.5)',
    flexBasis: 0,
    flexGrow: 1,
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase'
  },
  root: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start'
  }
}

function componentize (pageNav) {
  return (
    <Link
      activeClassName={ActiveClassName}
      borderBottomWidth={2}
      css={style.link}
      inline={false}
      key={pageNav.path}
      marginTop={1}
      padding={1}
      size="longPrimer"
      to={pageNav.path}
    >
      {pageNav.label}
    </Link>
  )
}

const MainNav = ({ children, ...props }, { metadata: { mainNav } }) => {
  const links = mainNav.map(componentize)
  const leftLinks = links.splice(0, links.length / 2)
  return (
    <Bit css={style.root} marginTop={1}>
      {leftLinks}
      <Link inline={false} to="/">{children}</Link>
      {links}
    </Bit>
  )
}

MainNav.contextTypes = {
  metadata: shape({
    mainNav: arrayOf(
      shape({
        description: string,
        label: string,
        route: string
      })
    ).isRequired
  }).isRequired
}

MainNav.propTypes = {
  children: node
}

export default MainNav
