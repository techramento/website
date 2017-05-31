import { Paragraph } from 'stemcell'
import React from 'react'
import VerticalHeroContent from '../VerticalHeroContent'

const HowWeAreDifferent = (props) => (
  <VerticalHeroContent
    height={30}
    src="/assets/images/mission/how-we-are-different@2x.jpg"
    srcHeight={1200}
    srcWidth={1600}
    title="How We Are Different"
    {...props}
  >
    <Paragraph marginTop={1} size="longPrimer">
      Most local technology non-profits focus on business, industry, and entrepenurship. Techramento differentiates itself by focusing on the individual developers that make all of those higher-level organizations successful. Investing in the future of our developers focuses a light on existing Sacramento tech companies. Subsequently, this shows off what Sacramento is capable of and makes the region more enticing to outside companies to invest or even relocate.
    </Paragraph>
    <Paragraph size="longPrimer">
      By being a grassroots organization, run by deverlopers, for developers, Techramento has a unique insight into the needs of developers. We are on top of the latest trends and the hottest technologies, showcasing them at each of our events, allowing the entirety of our community to learn and engage with them. We also have connections to some of the best and brightest in our industry and have to capability to invite them to Sacramento to share their knowledge directly with us, one on one.
    </Paragraph>
  </VerticalHeroContent>
)

export default HowWeAreDifferent
