import { Bit, Heading } from 'stemcell'
import { node, string } from 'prop-types'
import React, { Children, cloneElement } from 'react'
import Section from '../Section'

const style = {
  button: {
    display: 'block',
    flex: 1
  },
  buttons: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  root: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  title: {
    color: 'white',
    letterSpacing: 2.66,
    textTransform: 'uppercase'
  }
}

const CallToAction = ({ children, text, ...props }) => {
  const buttons = Children.map(children, (child) => {
    if (typeof child !== 'object') {
      return child
    }
    const { css, ...childProps } = child.props
    return cloneElement(child, {
      ...childProps,
      css: [style.button, css]
    })
  })
  return (
    <Section css={style.root} paddingVertical={7}>
      <Heading
        css={style.title}
        dangerouslySetInnerHTML={{ __html: text }}
        level={1}
        marginTop={1}
      />
      <Bit css={style.buttons} width={20}>
        {buttons}
      </Bit>
    </Section>
  )
}

CallToAction.propTypes = {
  children: node,
  text: string
}

export default CallToAction
