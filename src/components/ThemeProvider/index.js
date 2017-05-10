import { Children, cloneElement } from 'react'
import { node, string } from 'prop-types'

const styles = {
  callout: {
    '--colorBackground': 'var(--colorPrimary-50)'
  },
  default: {
    '--colorAccent': 'var(--colorPrimary-500)',
    '--colorAside': 'white',
    '--colorBackground': 'white',
    '--colorDanger': 'var(---colorSecondary-500)',
    '--colorEmpty': 'var(--colorNeutral-200)',
    '--colorIconPrimary': 'var(--colorEmpty)',
    '--colorIconSecondary': 'var(--colorBackground)',
    '--colorLink': 'var(--colorPrimary-500)',
    '--colorRule': 'var(--colorNeutral-200)',
    '--colorSpinnerBack': 'var(--colorNeutral-200)',
    '--colorSpinnerFront': 'var(--colorNeutral-700)',
    '--colorText': 'var(--colorQuinary-500)'
  },
  invert: {
    '--colorAccent': 'white',
    '--colorBackground': 'var(--colorPrimary-500)',
    '--colorIconPrimary': 'white',
    '--colorIconSecondary': 'var(--colorBackground)',
    '--colorLink': 'white',
    '--colorRule': 'rgba(255,255,255,0.25)',
    '--colorSpinnerBack': 'var(--colorNeutral-200)',
    '--colorSpinnerFront': 'var(--colorNeutral-700)',
    '--colorText': 'white'
  }
}

const ThemeProvider = ({ children, theme, ...props }) => {
  const root = Children.only(children)
  return cloneElement(root, {
    css: [root.props.css, styles[theme]]
  })
}

ThemeProvider.defaultProps = {
  theme: 'default'
}

ThemeProvider.propTypes = {
  children: node,
  theme: string
}

export default ThemeProvider
