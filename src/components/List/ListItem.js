import { array, bool, node, object, oneOfType, string } from 'prop-types'
import { Bit, Heading, Image, Paragraph } from 'stemcell'
import React from 'react'

const style = {
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  text: {
    textAlign: 'center'
  },
  title: {
    fontFamily: 'var(--fontAccent)',
    textTransform: 'uppercase'
  }
}

const ListItem = ({ children, css, imgsrc, rounded, title, ...props }) => (
  <Bit css={[style.root, css]} width={8} {...props}>
    <Image cover rounded={rounded} size={6} src={imgsrc}/>
    <Heading css={style.title} level={6} marginTop={1}>
      {title}
    </Heading>
    <Paragraph css={style.text} size="longPrimer">
      {children}
    </Paragraph>
  </Bit>
)

ListItem.propTypes = {
  children: node,
  css: oneOfType([array, object]),
  imgsrc: string.isRequired,
  rounded: bool,
  title: string.isRequired
}

export default ListItem
