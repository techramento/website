import AppContainer from './AppContainer'
import Homepage from './pages/Homepage'
import Page from './layouts/Page'
import { PageContainer as PhenomicPageContainer } from 'phenomic'
import PageError from './layouts/PageError'
import Post from './layouts/Post'
import React from 'react'
import { Route } from 'react-router'
import SiteShell from './SiteShell'

const PageContainer = (props) => (
  <PhenomicPageContainer
    {...props}
    layouts={{
      Page,
      PageError,
      Post
    }}
  />
)

export default (
  <Route component={SiteShell}>
    <Route component={Homepage} path="/"/>
    <Route component={AppContainer}>
      <Route component={PageContainer} path="*"/>
    </Route>
  </Route>
)
