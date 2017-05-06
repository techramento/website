import { Bit } from 'stemcell'
import { css } from 'glamor'
import Helmet from 'react-helmet'
import React from 'react'
import TopBarProgressIndicator from 'react-topbar-progress-indicator'

const spin = css.keyframes('spin', {
  from: { opacity: 1, transform: 'rotate(0deg)' },
  to: { opacity: 1, transform: 'rotate(359deg)' }
})

const style = {
  loader: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  spinner: {
    animation: `${spin} 0.6s infinite linear 0.25s`,
    borderBottomColor: 'var(--colorSpinnerBack)',
    borderLeftColor: 'var(--colorSpinnerBack)',
    borderRadius: '100%',
    borderRightColor: 'var(--colorSpinnerBack)',
    borderTopColor: 'var(--colorSpinnerFront)',
    opacity: 1
  }
}

TopBarProgressIndicator.config({
  barColors: {
    0: '#fff',
    '1.0': '#fff'
  },
  shadowBlur: 5
})

const Loading = (props, { renderer }) => (
  <Bit {...props}>
    <Helmet title="Loading..."/>
    <TopBarProgressIndicator/>
    <Bit css={style.loader} height={4}>
      <Bit borderWidth={6} css={style.spinner} height={4} width={4}/>
    </Bit>
  </Bit>
)

export default Loading
