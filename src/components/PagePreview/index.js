import React, { PropTypes } from 'react'
import { Link } from 'phenomic'

import Button from '../../components/Button'

import styles from './index.css'

const PagePreview = ({ __url, title, date, description }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div className={styles.wrapper}>
      <Link className={styles.title} to={__url}>
        {title}
      </Link>
      <div className={styles.meta}>
        {pageDate &&
          <time key={pageDate.toISOString()}>
            {pageDate.toDateString()}
          </time>}
      </div>
      <div className={styles.description}>
        {description}
        {' '}
      </div>
      <Link className={styles.readMore} to={__url}>
        <Button secondary>{'Read More →'}</Button>
      </Link>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default PagePreview
