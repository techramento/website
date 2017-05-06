import colorScheme from './colorScheme'

// System font https://medium.com/designing-medium/system-shock-6b1dc6d6596f
const SystemFont =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'

const theme = {
  variables: {
    colorAccent: colorScheme.DeepAquamarine,
    colorBackground: 'white',
    colorDanger: colorScheme.LightSalmon,
    colorLink: colorScheme.DeepAquamarine,
    colorNeutral: colorScheme.Manatee,
    colorNeutralDark: colorScheme['Manatee-Dark'],
    colorNeutralDarker: colorScheme['Manatee-Darker'],
    colorNeutralDarkest: colorScheme['Manatee-Darkest'],
    colorNeutralLight: colorScheme['Manatee-Light'],
    colorNeutralLighter: colorScheme['Manatee-Lighter'],
    colorNeutralLightest: colorScheme['Manatee-Lightest'],
    colorNeutralPureDark: colorScheme['Manatee-PureDark'],
    colorNeutralPureLight: colorScheme['Manatee-PureLight'],
    colorPrimary: colorScheme.DeepAquamarine,
    colorPrimaryDark: colorScheme['DeepAquamarine-Dark'],
    colorRule: 'var(--colorNeutralLighter)',
    colorSecondary: colorScheme.LightSalmon,
    colorSecondaryDark: colorScheme['LightSalmon-Dark'],
    colorSpinnerBack: 'var(--colorNeutralLightest)',
    colorSpinnerFront: 'var(--colorNeutralDarker)',
    colorText: colorScheme.SmokyBlack,
    fontAccent: `'Montserrat', ${SystemFont}`,
    fontPrimary: `'PT Serif', ${SystemFont}`,
    maxWidth: '53rem'
  }
}

export default theme
