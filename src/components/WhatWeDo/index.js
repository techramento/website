import HorizontalHeroContent from '../HorizontalHeroContent'
import { Paragraph } from 'stemcell'
import React from 'react'

const WhatWeDo = (props) => (
  <HorizontalHeroContent
    height={30}
    src="https://static.pexels.com/photos/30342/pexels-photo-30342.jpg"
    title="What We Do"
    {...props}
  >
    <Paragraph size="longPrimer">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
    </Paragraph>
  </HorizontalHeroContent>
)

export default WhatWeDo
