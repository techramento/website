import { darken, lighten } from 'zamora'
import { fromPairs, reduce, sortBy, toPairs } from 'lodash'

const scale = 'major eleventh'

export function swatchify (colorPalette) {
  return reduce(
    colorPalette,
    (swatches, value, name) => ({
      ...swatches,
      [`${name}-50`]: lighten(value, { scale, steps: 4.6 }),
      [`${name}-100`]: lighten(value, { scale, steps: 4 }),
      [`${name}-200`]: lighten(value, { scale, steps: 3 }),
      [`${name}-300`]: lighten(value, { scale, steps: 2 }),
      [`${name}-400`]: lighten(value, { scale, steps: 1 }),
      [`${name}-500`]: value,
      [`${name}-600`]: darken(value, { scale, steps: 1 }),
      [`${name}-700`]: darken(value, { scale, steps: 2 }),
      [`${name}-800`]: darken(value, { scale, steps: 3 }),
      [`${name}-900`]: darken(value, { scale, steps: 4 })
    }),
    {}
  )
}

export function palette (baseColorPalette) {
  // Sort color names for aesthetic reasons
  return fromPairs(
    sortBy(
      toPairs({
        ...swatchify(baseColorPalette)
      }),
      0
    )
  )
}
