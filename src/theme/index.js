import colorScheme from './colorScheme'

// System font https://medium.com/designing-medium/system-shock-6b1dc6d6596f
const SystemFont =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'

const theme = {
  variables: {
    colorNeutral: colorScheme.Manatee,
    colorNeutralDark: colorScheme['Manatee-Dark'],
    colorNeutralLight: colorScheme['Manatee-Light'],
    colorPrimary: colorScheme.DeepAquamarine,
    colorPrimaryDark: colorScheme['DeepAquamarine-Dark'],
    colorSecondary: colorScheme.LightSalmon,
    colorSecondaryDark: colorScheme['LightSalmon-Dark'],
    colorText: colorScheme.SmokyBlack,
    fontAccent: `'Montserrat', ${SystemFont}`,
    fontPrimary: `'PT Serif', ${SystemFont}`,
    maxWidth: '53rem'
  }
}

export default theme
