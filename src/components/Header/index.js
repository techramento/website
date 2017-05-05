import React, { PropTypes } from 'react'
import { Link } from 'phenomic'
import Svg from 'react-svg-inline'

import twitterSvg from '../icons/iconmonstr-twitter-1.svg'
import gitHubSvg from '../icons/iconmonstr-github-1.svg'

import styles from './index.css'

const Header = (props, { metadata: { pkg } }) => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <div className={styles.navPart1}>
        <Link className={styles.link} to={'/'}>
          {'Home'}
        </Link>
      </div>
      <div className={styles.navPart2}>
        {pkg.twitter &&
          <a
            className={styles.link}
            href={`https://twitter.com/${pkg.twitter}`}
          >
            <Svg cleanup svg={twitterSvg}/>
            {'Twitter'}
          </a>}
        {pkg.repository &&
          <a className={styles.link} href={pkg.repository}>
            <Svg cleanup svg={gitHubSvg}/>
            {'GitHub'}
          </a>}
      </div>
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired
}

export default Header
