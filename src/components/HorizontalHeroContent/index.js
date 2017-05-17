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
  imageContainer: {
    flexBasis: 'auto',
    flexShrink: 0
  }
}

const HorizontalHeroContent = ({
  children,
  height,
  src,
  srcHeight,
  srcWidth,
  title,
  ...props
}) => (
  <Section {...props}>
    <Bit css={style.imageContainer} height={height} marginRight={1}>
      <Image
        cover
        fillParent
        src={src}
        srcHeight={srcHeight}
        srcWidth={srcWidth}
      />
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
  srcHeight: number.isRequired,
  srcWidth: number.isRequired,
  title: string
}

export default HorizontalHeroContent
