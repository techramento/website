import { array, shape } from 'prop-types'
import { Bit, Image, Paragraph } from 'stemcell'
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
      hero="/assets/images/community/hero@2x.jpg"
      paddingTop={2}
      {...props}
    >
      <ComponentHeading level={4}>
        Success Stories
      </ComponentHeading>
      <Paragraph css={style.quotationMark} marginBottom={-2} size="canon">
        “
      </Paragraph>
      <Paragraph css={style.content} marginTop={1} size="longPrimer">
        {testimonials[0].content}
      </Paragraph>
      <Bit css={style.citation} marginTop={1}>
        <Image
          cover
          marginRight={1}
          rounded
          size={2}
          src={testimonials[0].avatar_url}
        />
        <Bit>
          <Paragraph size="longPrimer">
            {testimonials[0].name}
          </Paragraph>
          <Paragraph css={style.org} size="longPrimer">
            {testimonials[0].organization}
          </Paragraph>
        </Bit>
      </Bit>
      <Paragraph css={style.quotationMark} size="canon">
        ”
      </Paragraph>
    </HeroSection>
  </ThemeProvider>
)

Testimonials.contextTypes = {
  metadata: shape({
    testimonials: array.isRequired
  }).isRequired
}

export default Testimonials
