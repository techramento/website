import colorScheme from './colorScheme'

// System font https://medium.com/designing-medium/system-shock-6b1dc6d6596f
const SystemFont =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'

const theme = {
  variables: {
    /* eslint-disable sort-keys */
    colorAccent: 'var(--colorPrimary-500)',
    colorAside: 'white',
    colorBackground: 'white',
    colorDanger: 'var(---colorSecondary-500)',
    colorEmpty: 'var(--colorNeutral-200)',
    colorLink: 'var(--colorPrimary-500)',
    colorRule: 'var(--colorNeutral-300)',
    colorSpinnerBack: 'var(--colorNeutral-200)',
    colorSpinnerFront: 'var(--colorNeutral-700)',
    colorText: colorScheme['SmokyBlack-500'],

    'colorNeutral-100': colorScheme['Manatee-100'],
    'colorNeutral-200': colorScheme['Manatee-200'],
    'colorNeutral-300': colorScheme['Manatee-300'],
    'colorNeutral-500': colorScheme['Manatee-500'],
    'colorNeutral-700': colorScheme['Manatee-700'],

    'colorPrimary-50': colorScheme['DeepAquamarine-50'],
    'colorPrimary-100': colorScheme['DeepAquamarine-100'],
    'colorPrimary-500': colorScheme['DeepAquamarine-500'],

    'colorSecondary-500': colorScheme['LightSalmon-500'],

    fontAccent: `'Montserrat', ${SystemFont}`,
    fontPrimary: `'PT Serif', ${SystemFont}`,

    maxWidth: '53rem'
    /* eslint-enable sort-keys */
  }
}

export default theme
