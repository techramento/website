import colorScheme from './colorScheme'

// System font https://medium.com/designing-medium/system-shock-6b1dc6d6596f
const SystemFont =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'

const theme = {
  variables: {
    backgroundColor: 'white',
    colorAccent: colorScheme.DeepAquamarine,
    colorLink: colorScheme.DeepAquamarine,
    colorNeutral: colorScheme.Manatee,
    colorNeutralDark: colorScheme['Manatee-Dark'],
    colorNeutralLight: colorScheme['Manatee-Light'],
    colorNeutralLighter: colorScheme['Manatee-Lighter'],
    colorPrimary: colorScheme.DeepAquamarine,
    colorPrimaryDark: colorScheme['DeepAquamarine-Dark'],
    colorRule: 'var(--colorNeutralLighter)',
    colorSecondary: colorScheme.LightSalmon,
    colorSecondaryDark: colorScheme['LightSalmon-Dark'],
    colorText: colorScheme.SmokyBlack,
    fontAccent: `'Montserrat', ${SystemFont}`,
    fontPrimary: `'PT Serif', ${SystemFont}`,
    maxWidth: '53rem'
  }
}

export default theme
