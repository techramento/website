function DefaultIsFeatureable () {
  return true
}

export function extractFeatureableEvent (
  items,
  isFeatureable = DefaultIsFeatureable
) {
  const featuredEvent = items.find(isFeatureable)
  if (featuredEvent) {
    const featuredEventIdx = items.indexOf(featuredEvent)
    items.splice(featuredEventIdx, 1)
  }
  return [featuredEvent, items]
}
