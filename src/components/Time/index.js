import { string } from 'prop-types'
import { Text } from 'stemcell'
import moment from 'moment'
import React from 'react'

// TODO: Move to stemcell
const Time = ({ color, dateTime, format, ...props }) => {
  const date = moment(dateTime)
  return (
    <Text as="time" dateTime={date.toISOString()} {...props}>
      {date.format(format)}
    </Text>
  )
}

Time.propTypes = {
  color: string,
  dateTime: string,
  format: string.isRequired
}

export default Time
