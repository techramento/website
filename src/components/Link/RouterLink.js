import { Link } from 'phenomic'
import React from 'react'
import { Text } from 'stemcell'

/*
 * TODO: Implement
 * <FoundRouterLink
 *   activeStyle={{ textDecoration: 'underline' }}
 *   {...props}
 * />
*/

const RouterLink = (props) => <Text as={Link} {...props}/>

export default RouterLink
