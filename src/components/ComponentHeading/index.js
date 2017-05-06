import { array, bool, object, oneOf, oneOfType } from 'prop-types'
import { Bit, Heading } from 'stemcell'
import React from 'react'

const style = {
  headingAlignmentProps: {
    center: {
      marginLeft: 3,
      paddingLeft: 1
    },
    left: {}
  },
  invertedRule: {
    [false]: {
      borderColor: 'var(--colorNeutral)'
    },
    [true]: {
      borderColor: 'white'
    }
  },
  invertedText: {
    [false]: {
      color: 'var(--colorAccent)'
    },
    [true]: {
      color: 'white'
    }
  },
  root: {
    display: 'flex',
    flexDirection: 'row'
  },
  rootAlignment: {
    center: {
      justifyContent: 'center'
    },
    left: {
      justifyContent: 'flex-start'
    }
  },
  text: {
    backgroundColor: 'var(--colorBackground)',
    fontFamily: 'var(--fontAccent)',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  wrapper: {
    backgroundImage: 'linear-gradient(to bottom, transparent 50%, var(--colorRule) 50%, var(--colorRule) calc(50% + 1px), transparent 50%)',
    backgroundRepeatY: 'no-repeat',
    backgroundSize: 'auto 95%'
  }
}

const ComponentHeading = ({ align, css, invert, ...props }) => (
  <Bit css={[style.root, style.rootAlignment[align]]}>
    <Bit css={[style.wrapper]}>
      <Heading
        css={[style.invertedText[invert], style.text, css]}
        inline={false}
        level={4}
        marginRight={3}
        paddingRight={1}
        {...style.headingAlignmentProps[align]}
        {...props}
      />
    </Bit>
  </Bit>
)

ComponentHeading.defaultProps = {
  align: 'center',
  invert: false
}

ComponentHeading.propTypes = {
  align: oneOf(['center', 'left']),
  css: oneOfType([array, object]),
  invert: bool
}

export default ComponentHeading
