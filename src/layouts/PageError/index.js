import { Bit, Paragraph } from 'stemcell'
import { oneOfType, number, string } from 'prop-types'
import Page from '../Page'
import React from 'react'

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}

const PageError = ({ error, errorText }) => {
  const head = {
    // Hero credit: https://www.flickr.com/photos/mypubliclands/16101654539/
    hero: 'https://farm8.staticflickr.com/7559/16101654539_bee5151340_k.jpg',
    title: `${error} ${errorText}`
  }
  return (
    <Page head={head}>
      <Bit css={styles.container} marginVertical={4}>
        <Paragraph>
          It seems you found a broken link. Sorry about that.
          <br/>
          Do not hesitate to report this page 😁.
        </Paragraph>
      </Bit>
    </Page>
  )
}

PageError.propTypes = {
  error: oneOfType([number, string]),
  errorText: string
}

PageError.defaultProps = {
  error: 404,
  errorText: 'Page Not Found'
}

export default PageError
