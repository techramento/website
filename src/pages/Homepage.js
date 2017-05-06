import AppContainer from '../AppContainer'
import CallToAction from '../components/CallToAction'
import FeaturedSitePages from '../components/FeaturedSitePages'
import LatestPosts from '../components/LatestPosts'
import Link from '../components/Link'
import Page from '../layouts/Page'
import React from 'react'

const CtaText = 'Build your<br/>community with<br/>a meetup grant'

const head = {
  hero: 'https://farm4.staticflickr.com/3949/15589950511_3675b15e59_k.jpg',
  title: `Growing the technology community Sacramento deserves`
}

function callToAction () {
  return (
    <CallToAction text={CtaText}>
      <Link outline to="/about">
        Apply Here
      </Link>
      <Link outline to="/mission">
        Learn More
      </Link>
    </CallToAction>
  )
}

const Homepage = (props) => (
  <AppContainer>
    <Page callToAction={callToAction} colorOverlay={false} head={head}>
      <FeaturedSitePages marginTop={2}/>
      <LatestPosts marginTop={4} numberOfPosts={3}/>
    </Page>
  </AppContainer>
)

export default Homepage
