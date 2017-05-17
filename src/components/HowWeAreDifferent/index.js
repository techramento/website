import { Paragraph } from 'stemcell'
import React from 'react'
import VerticalHeroContent from '../VerticalHeroContent'

const HowWeAreDifferent = (props) => (
  <VerticalHeroContent
    height={30}
    src="https://static.pexels.com/photos/30342/pexels-photo-30342.jpg"
    srcHeight={2779}
    srcWidth={4208}
    title="How We Are Different"
    {...props}
  >
    <Paragraph marginTop={1} size="longPrimer">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Paragraph>
  </VerticalHeroContent>
)

export default HowWeAreDifferent
