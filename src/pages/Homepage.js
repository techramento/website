import AppContainer from '../AppContainer'
import { Bit } from 'stemcell'
import CallToAction from '../components/CallToAction'
import Link from '../components/Link'
import Page from '../layouts/Page'
import React from 'react'

const head = {
  cta: 'Build your<br/>community with<br/>a meetup grant',
  hero: 'https://farm4.staticflickr.com/3949/15589950511_3675b15e59_k.jpg',
  title: `Growing the technology community Sacramento deserves`
}

function callToAction () {
  return (
    <CallToAction text={head.cta}>
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
      <Bit>HOMEPAGE</Bit>
    </Page>
  </AppContainer>
)

export default Homepage
