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

const BoardMemberList = (props, { metadata: { team } }) => (
  <Section {...props}>
    <List collection={team} css={style.list}>
      {({ avatarUrl, name, title }) => (
        <ListItem imgsrc={avatarUrl} key={title} rounded title={name}>
          {title} key:{title}
        </ListItem>
      )}
    </List>
  </Section>
)

BoardMemberList.contextTypes = {
  metadata: shape({
    team: arrayOf(
      shape({
        avatarUrl: string.isRequired,
        name: string.isRequired,
        title: string.isRequired
      })
    ).isRequired
  }).isRequired
}

export default BoardMemberList
