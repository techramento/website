import React, { PropTypes } from 'react'
import cx from 'classnames'

// import styles from './index.css'
const styles = {}

const Button = ({ className, secondary, light, big, ...otherProps }) => (
  <span
    role="button"
    {...otherProps}
    className={cx({
      [className]: className,
      [styles.button]: true,
      [styles.secondary]: secondary,
      [styles.light]: light,
      [styles.big]: big
    })}
  />
)

Button.propTypes = {
  big: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  light: PropTypes.bool,
  secondary: PropTypes.bool
}

Button.displayName = 'Button'

export default Button
