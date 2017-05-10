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
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    minWidth: '100%'
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
  title,
  ...props
}) => (
  <Section css={[style.root, css]} {...props}>
    <Bit css={style.imageContainer} height={height} paddingRight={1} width={20}>
      <Image cover css={style.image} size={1} src={src}/>
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
  title: string
}

export default VerticalHeroContent
