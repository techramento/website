import List from '../List'
import ListItem from '../List/ListItem'
import { shape, string } from 'prop-types'
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
      {({ key, avatarUrl, name, title }) => (
        <ListItem imgsrc={avatarUrl} key={key} rounded title={name}>
          {title}
        </ListItem>
      )}
    </List>
  </Section>
)

BoardMemberList.contextTypes = {
  metadata: shape({
    team: shape({
      avatarUrl: string.isRequired,
      name: string.isRequired,
      title: string.isRequired
    }).isRequired
  }).isRequired
}

export default BoardMemberList
