import AppContainer from '../AppContainer'
import { arrayOf, shape, string } from 'prop-types'
import ColumnarParagraph from '../components/ColumnarParagraph'
import ComponentHeading from '../components/ComponentHeading'
import CommunityDetailList from '../components/CommunityDetailList'
import { findMainPage } from '../util/mainNavTools'
import HowWeWork from '../components/HowWeWork'
import Page from '../layouts/Page'
import React from 'react'
import Section from '../components/Section'

const Community = (props, { metadata: { mainNav } }) => (
  <AppContainer>
    <Page head={findMainPage(mainNav, 'Community')}>
      <Section marginTop={2}>
        <ComponentHeading align="left">
          Technology Stewards
        </ComponentHeading>
        <ColumnarParagraph marginTop={1} size="longPrimer">
          With an on-going Downtown revitalization, Sacramento is shifting focus from government jobs to jobs rooted in innovation. In order to pull this off, Sacramento needs a pool of developers and related tech talent. Techramento is a grassroots effort to build out the foundation for the growth our local development talent needs to lure and land jobs in the technology field. While other organizations are focused on bringing in corporations and entrepeneurs, we are focused on being good stewards to the individual developers, designers, and students that go on to work at those companies.
        </ColumnarParagraph>
      </Section>
      <HowWeWork marginTop={3}/>
      <CommunityDetailList marginTop={3}/>
    </Page>
  </AppContainer>
)

Community.contextTypes = {
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

export default Community
