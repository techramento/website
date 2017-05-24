import { array, shape } from 'prop-types'
import { Bit, Image, Text } from 'stemcell'
import ComponentHeading from '../ComponentHeading'
import HeroSection from '../HeroSection'
import React from 'react'
import ThemeProvider from '../ThemeProvider'

const style = {
  citation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  content: {
    textAlign: 'center'
  },
  org: {
    fontStyle: 'italic'
  },
  quotationMark: {
    textAlign: 'center'
  }
}

const Testimonials = (props, { metadata: { testimonials } }) => (
  <ThemeProvider theme="invert">
    <HeroSection
      paddingTop={2}
      src="/assets/images/community/hero@2x.jpg"
      {...props}
    >
      <ComponentHeading level={4}>
        Success Stories
      </ComponentHeading>
      <Text block css={style.quotationMark} marginBottom={-2} size="canon">
        “
      </Text>
      <Text block css={style.content} marginTop={1} size="longPrimer">
        {testimonials[0].content}
      </Text>
      <Bit css={style.citation} marginTop={1}>
        <Image
          cover
          marginRight={1}
          rounded
          size={2}
          src={testimonials[0].avatar_url}
        />
        <Bit>
          <Text block size="longPrimer">
            {testimonials[0].name}
          </Text>
          <Text block css={style.org} size="longPrimer">
            {testimonials[0].organization}
          </Text>
        </Bit>
      </Bit>
      <Text block css={style.quotationMark} size="canon">
        ”
      </Text>
    </HeroSection>
  </ThemeProvider>
)

Testimonials.contextTypes = {
  metadata: shape({
    testimonials: array.isRequired
  }).isRequired
}

export default Testimonials
