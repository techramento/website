import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

const DefaultHeadMeta = (props, { metadata: { pkg } }) => (
  <div hidden>
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

    {/* Meta viewport safari/chrome/edge */}
    <Helmet
      meta={[
        {
          content: 'width=device-width, initial-scale=1',
          name: 'viewport'
        }
      ]}
    />
    <style>{'@-ms-viewport { width: device-width; }'}</style>
  </div>
)

DefaultHeadMeta.propTypes = {
  meta: React.PropTypes.arrayOf(React.PropTypes.object),
  scripts: React.PropTypes.arrayOf(React.PropTypes.object)
}

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired
}

export default DefaultHeadMeta
