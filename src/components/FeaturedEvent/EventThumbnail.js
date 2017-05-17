import { Image } from 'stemcell'
import { string } from 'prop-types'
import React from 'react'

/*
  * Sums all the digits of the event's timestamp together in order to generate
  * a "hash" which is then used to reference an image in an image set.
  */
function sumAll (nums) {
  const retval = nums.reduce((sum, x) => sum + Number(x), 0)
  if (retval > 10) {
    return sumAll(String(retval).split(''), 0)
  }
  return retval
}

const EventThumbnail = ({ dateKey, path, ...props }) => {
  const src = sumAll(String(Date.parse(dateKey)).split(''))
  return (
    <Image
      alt="thumb"
      cover
      fillParent
      src={`${path}/${src}@2x.jpg`}
      srcHeight={1200}
      srcWidth={1600}
    />
  )
}

EventThumbnail.propTypes = {
  dateKey: string,
  path: string
}

export default EventThumbnail
