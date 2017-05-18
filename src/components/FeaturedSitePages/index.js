import { arrayOf, shape, string } from 'prop-types'
import List from '../List'
import ListItem from '../List/ListItem'
import React from 'react'
import Section from '../Section'

const style = {
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}

const FeaturedSitePages = (props, { metadata: { mainNav } }) => (
  <Section {...props}>
    <List collection={mainNav} css={style.list}>
      {({ description, hero, path, title }) => (
        <ListItem imgsrc={hero.src} key={path} rounded title={title}>
          {description}
        </ListItem>
      )}
    </List>
  </Section>
)

FeaturedSitePages.contextTypes = {
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

export default FeaturedSitePages
