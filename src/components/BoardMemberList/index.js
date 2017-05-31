import { arrayOf, shape, string } from 'prop-types'
import ComponentHeading from '../ComponentHeading'
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
    <ComponentHeading align="left">
      Meet Our Board
    </ComponentHeading>
    <List collection={team} css={style.list} marginTop={1}>
      {({ avatarUrl, name, title }) => (
        <ListItem imgsrc={avatarUrl} key={title} rounded title={name}>
          {title}
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
