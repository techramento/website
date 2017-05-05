import React from 'react'

import styles from './index.css'

const Footer = () => (
  <footer className={styles.footer}>
    {/* If you like Phenomic, this is a way to share the love ;) */}
    <p>
      <a
        className={styles.phenomicReference}
        href={process.env.PHENOMIC_HOMEPAGE}
      >
        {'Website generated with '}
        <span className={styles.phenomicReferenceName}>
          {`<${process.env.PHENOMIC_NAME} />`}
        </span>
      </a>
    </p>
  </footer>
)

export default Footer
