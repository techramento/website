import { Paragraph } from 'stemcell'
import React, { Component } from 'react'
import emptyFn from 'empty/function'
import { func } from 'prop-types'
import FetchComponent from 'react-fetch-component'
import Loading from '../Loading'

const style = {
  errorMsg: {
    color: 'var(--colorDanger)'
  },
  loading: {
    textAlign: 'center'
  }
}

function defaultRenderError (state) {
  return (
    <Paragraph css={style.errorMsg}>
      Oops! The following error occurred: {state.error.toString()}
    </Paragraph>
  )
}

function defaultRenderLoading () {
  return <Loading css={style.loading}/>
}

export default class Fetch extends Component {
  static defaultProps = {
    children: emptyFn,
    renderError: defaultRenderError,
    renderLoading: defaultRenderLoading
  }
  static propTypes = {
    children: func.isRequired,
    renderError: func,
    renderLoading: func
  }
  render () {
    return (
      <FetchComponent {...this.props}>
        {({ data: response, error, loading }) => {
          if (loading) {
            this.props.renderLoading({ error, loading, response })
          } else if (error) {
            return this.props.renderError({ error, loading, response })
          } else if (response) {
            return this.props.children(response.data)
          }
          return null
        }}
      </FetchComponent>
    )
  }
}
