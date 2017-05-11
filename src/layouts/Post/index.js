import { Heading } from 'stemcell'
import { object, string } from 'prop-types'
import React from 'react'
import Time from '../../components/Time'
import LatestPosts from '../../components/LatestPosts'
import Page from '../Page'

const styles = {
  heading: {
    color: 'var(--colorEmpty)',
    display: 'flex',
    justifyContent: 'center'
  }
}

const Post = ({ __resourceUrl, __dataUrl, ...props }) => (
  <Page
    {...props}
    header={
      <Heading css={styles.heading} marginTop={1} size="brevier">
        <Time dateTime={props.head.date} format="ddd MMM D YYYY"/>
      </Heading>
    }
  >
    <LatestPosts marginTop={4}/>
  </Page>
)

Post.propTypes = {
  __dataUrl: string,
  __resourceUrl: string,
  head: object.isRequired
}

export default Post
