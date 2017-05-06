import { array, number } from 'prop-types'
import { Bit } from 'stemcell'
import ComponentHeading from '../ComponentHeading'
import enhanceCollection from 'phenomic/lib/enhance-collection'
import Link from '../Link'
import List from '../List'
import PagePreview from '../PagePreview'
import React from 'react'
import Section from '../Section'

const style = {
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}

const LatestPosts = ({ numberOfPosts, ...props }, { collection }) => {
  const latestPosts = enhanceCollection(collection, {
    filter: {
      layout: 'Post'
    },
    reverse: true,
    sort: 'date'
  }).slice(0, numberOfPosts)
  return (
    <Section {...props}>
      <ComponentHeading align="center">
        Latest Posts
      </ComponentHeading>
      <List collection={latestPosts} emptyMessage="No posts yet">
        {(page) => <PagePreview {...page} key={page.title}/>}
      </List>
      <Bit css={style.footer} marginTop={2}>
        <Link css={style.link} inline={false} outline to="posts">
          All Posts
        </Link>
      </Bit>
    </Section>
  )
}

LatestPosts.defaultPops = {
  numberOfPosts: 6
}

LatestPosts.propTypes = {
  numberOfPosts: number
}

LatestPosts.contextTypes = {
  collection: array.isRequired
}

export default LatestPosts
