import { array, node } from 'prop-types'
import { CssReset, GlobalStylesheet, VerticalRhythm } from 'stemcell'
import enhanceCollection from 'phenomic/lib/enhance-collection'
import React, { Component } from 'react'
import ThemeProvider from './components/ThemeProvider'

import theme from './theme'

const rules = {
  ':root': theme.variables,
  body: {
    backgroundColor: 'var(--colorBackground)',
    fontFamily: 'var(--fontPrimary)',
    position: 'relative' // TODO: Determine why this is needed
  }
}

export default class SiteShell extends Component {
  static childContextTypes = {
    organizations: array,
    posts: array,
    sponsors: array
  }
  static contextTypes = {
    collection: array
  }
  static propTypes = {
    children: node
  }
  getChildContext () {
    const organizations = enhanceCollection(this.context.collection, {
      filter: {
        class: 'Organization'
      },
      sort: 'short_name'
    })
    const posts = enhanceCollection(this.context.collection, {
      filter: {
        layout: 'Post'
      },
      reverse: true,
      sort: 'date'
    })
    const sponsors = enhanceCollection(this.context.collection, {
      filter: {
        class: 'Sponsor'
      },
      sort: 'short_name'
    })
    return {
      organizations,
      posts,
      sponsors
    }
  }
  render () {
    return (
      <CssReset>
        <GlobalStylesheet rules={rules}/>
        <ThemeProvider>
          <VerticalRhythm baseline={false}>
            {this.props.children}
          </VerticalRhythm>
        </ThemeProvider>
      </CssReset>
    )
  }
}
