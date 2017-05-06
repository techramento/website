import { darken, lighten } from 'zamora'
import { fromPairs, reduce, sortBy, toPairs } from 'lodash'

const scale = 'major eleventh'

export function darkenPalette (colorPalette) {
  return reduce(
    colorPalette,
    (darkenedPalette, value, name) => ({
      ...darkenedPalette,
      [`${name}-Dark`]: darken(value, { scale, steps: 1 }),
      [`${name}-Darker`]: darken(value, { scale, steps: 2 }),
      [`${name}-Darkest`]: darken(value, { scale, steps: 3 }),
      [`${name}-PureDark`]: darken(value, { scale, steps: 4 })
    }),
    {}
  )
}

export function lightenPalette (colorPalette) {
  return reduce(
    colorPalette,
    (lightenedPalette, value, name) => ({
      ...lightenedPalette,
      [`${name}-Light`]: lighten(value, { scale, steps: 1 }),
      [`${name}-Lighter`]: lighten(value, { scale, steps: 2 }),
      [`${name}-Lightest`]: lighten(value, { scale, steps: 3 }),
      [`${name}-PureLight`]: lighten(value, { scale, steps: 4 })
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
