import { node, number, string } from 'prop-types'
import { Bit, Image } from 'stemcell'
import ComponentHeading from '../ComponentHeading'
import React from 'react'
import Section from '../Section'

const style = {
  content: {
    display: 'flex',
    flexDirection: 'row'
  },
  heading: {
    flex: 1
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    minWidth: '100%'
  },
  imageContainer: {
    flexBasis: 'auto',
    flexShrink: 0
  }
}

const HorizontalHeroContent = ({ children, height, src, title, ...props }) => (
  <Section {...props}>
    <Bit css={style.imageContainer} height={height} marginRight={1}>
      <Image cover css={style.image} size={1} src={src}/>
    </Bit>
    <Bit css={style.content} marginTop={1}>
      <Bit css={style.heading}>
        <ComponentHeading align="left">
          {title}
        </ComponentHeading>
      </Bit>
      <Bit width={25}>
        {children}
      </Bit>
    </Bit>
  </Section>
)

HorizontalHeroContent.propTypes = {
  children: node,
  height: number,
  src: string,
  title: string
}

export default HorizontalHeroContent
