import { arrayOf, object } from 'prop-types'
import { Bit } from 'stemcell'
import Helmet from 'react-helmet'
import React from 'react'

const DefaultHeadMeta = (props, { metadata: { pkg } }) => (
  <Bit hidden>
    <Helmet
      meta={[
        {
          content: `${process.env.PHENOMIC_NAME} ${process.env.PHENOMIC_VERSION}`,
          name: 'generator'
        },
        { content: pkg.name, property: 'og:site_name' },
        { content: `@${pkg.twitter}`, name: 'twitter:site' },
        ...(props.meta ? props.meta : [])
      ]}
      script={[
        {
          src: 'https://cdn.polyfill.io/v2/polyfill.min.js' +
            '?features=es6&flags=gated'
        },
        ...(props.scripts ? props.scripts : [])
      ]}
    />
    <Helmet
      link={[
        {
          // eslint-disable-next-line max-len
          href: '//fonts.googleapis.com/css?family=Montserrat|PT+Serif:400,400i,700',
          rel: 'stylesheet'
        }
      ]}
    />
    <Helmet
      meta={[
        {
          content: 'width=device-width, initial-scale=1',
          name: 'viewport'
        }
      ]}
    />
    <style>{'@-ms-viewport { width: device-width; }'}</style>
  </Bit>
)

DefaultHeadMeta.propTypes = {
  meta: arrayOf(object),
  scripts: arrayOf(object)
}

DefaultHeadMeta.contextTypes = {
  metadata: object.isRequired
}

export default DefaultHeadMeta
