import { array, number, node, object, oneOfType, string } from 'prop-types'
import ComponentHeading from '../ComponentHeading'
import { Bit, Image } from 'stemcell'
import React from 'react'
import Section from '../Section'

const style = {
  content: {
    alignSelf: 'center',
    flex: 1
  },
  imageContainer: {
    flexBasis: 'auto',
    flexShrink: 0
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}

const VerticalHeroContent = ({
  children,
  css,
  height,
  src,
  srcHeight,
  srcWidth,
  title,
  ...props
}) => (
  <Section css={[style.root, css]} {...props}>
    <Bit css={style.imageContainer} height={height} paddingRight={1} width={20}>
      <Image
        cover
        fillParent
        size={1}
        src={src}
        srcHeight={srcHeight}
        srcWidth={srcWidth}
      />
    </Bit>
    <Bit css={style.content}>
      <ComponentHeading align="left">
        {title}
      </ComponentHeading>
      {children}
    </Bit>
  </Section>
)

VerticalHeroContent.propTypes = {
  children: node,
  css: oneOfType([array, object]),
  height: number,
  src: string,
  srcHeight: number.isRequired,
  srcWidth: number.isRequired,
  title: string
}

export default VerticalHeroContent
