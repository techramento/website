import HorizontalHeroContent from '../HorizontalHeroContent'
import { Paragraph } from 'stemcell'
import React from 'react'

const WhatWeDo = (props) => (
  <HorizontalHeroContent
    height={30}
    src="/assets/images/mission/what-we-do@2x.jpg"
    srcHeight={1067}
    srcWidth={1600}
    title="What We Do"
    {...props}
  >
    <Paragraph size="longPrimer">
      Techramento hosts several community meetups each month as well as a handful of hands-on workshops a year. Each meetup is focused on a specific technology like Javascript and Python, or a concise idea or philosophy like Civic Coding. These meetups are open to everyone, regardless of background or competancy. We encourage people of all backgrounds to come and learn!
    </Paragraph>
  </HorizontalHeroContent>
)

export default WhatWeDo
