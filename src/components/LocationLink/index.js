import { compact, isEmpty } from 'lodash-es'
import Link from '../Link'
import React from 'react'
import { shape, string } from 'prop-types'

function addressLink (address) {
  return compact([
    address.name,
    `${address.number} ${address.street} ${address.type}`,
    address.city,
    address.state
  ]).join(', ')
}

const LocationLink = ({ location }) => {
  if (isEmpty(location)) {
    return null
  }
  const address = addressLink(location)
  const to = `https://www.google.com/maps/search/${encodeURI(address)}`
  return (
    <Link to={to}>
      {location.name}
    </Link>
  )
}

LocationLink.propTypes = {
  location: shape({
    city: string,
    name: string,
    number: string,
    state: string,
    street: string,
    type: string
  })
}

export default LocationLink
