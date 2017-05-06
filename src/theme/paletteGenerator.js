import { darken, lighten } from 'zamora'
import { fromPairs, reduce, sortBy, toPairs } from 'lodash'

export function darkenPalette (colorPalette) {
  return reduce(
    colorPalette,
    (darkenedPalette, value, name) => ({
      ...darkenedPalette,
      [`${name}-Dark`]: darken(value, 2.5),
      [`${name}-Darker`]: darken(value, 5),
      [`${name}-Darkest`]: darken(value, 7.5),
      [`${name}-PureDark`]: darken(value, 8.75)
    }),
    {}
  )
}

export function lightenPalette (colorPalette) {
  return reduce(
    colorPalette,
    (lightenedPalette, value, name) => ({
      ...lightenedPalette,
      [`${name}-Light`]: lighten(value, 2.5),
      [`${name}-Lighter`]: lighten(value, 5),
      [`${name}-Lightest`]: lighten(value, 7.5),
      [`${name}-PureLight`]: lighten(value, 8.75)
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
