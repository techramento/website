import { find } from 'lodash'

// Returns a page from the mainNav page list that matches the given query
export function findMainPage (pages, label) {
  return find(pages, { label })
}
