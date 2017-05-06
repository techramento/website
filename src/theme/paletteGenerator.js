import { darken, lighten } from 'zamora'
import { fromPairs, reduce, sortBy, toPairs } from 'lodash'

export function darkenPalette (colorPalette) {
  return reduce(
    colorPalette,
    (darkenedPalette, value, name) => ({
      ...darkenedPalette,
      [`${name}-Dark`]: darken(value, { steps: 2.5 }),
      [`${name}-Darker`]: darken(value, { steps: 5 }),
      [`${name}-Darkest`]: darken(value, { steps: 7.5 }),
      [`${name}-PureDark`]: darken(value, { steps: 8.75 })
    }),
    {}
  )
}

export function lightenPalette (colorPalette) {
  return reduce(
    colorPalette,
    (lightenedPalette, value, name) => ({
      ...lightenedPalette,
      [`${name}-Light`]: lighten(value, { steps: 2.5 }),
      [`${name}-Lighter`]: lighten(value, { steps: 5 }),
      [`${name}-Lightest`]: lighten(value, { steps: 7.5 }),
      [`${name}-PureLight`]: lighten(value, { steps: 8.75 })
    }),
    {}
  )
}

export function palette (baseColorPalette) {
  // Sort color names for aesthetic reasons
  return fromPairs(
    sortBy(
      toPairs({
        ...lightenPalette(baseColorPalette),
        ...baseColorPalette,
        ...darkenPalette(baseColorPalette)
      }),
      0
    )
  )
}
