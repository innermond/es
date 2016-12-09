import React from 'react'
import DatePicker from 'material-ui/DatePicker'

let a = new Date(), z = new Date()
a.setDate(a.getDate() - (7 + 1))
z.setDate(z.getDate() - 1)
function disableAllExcept (date) {
  // allow only last 7 days
  return !(date > a && date < z)
}

const TemplateName = () => <DatePicker hintText='Choose Template name' shouldDisableDate={disableAllExcept} />

export default TemplateName
