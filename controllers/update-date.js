'use strict'

module.exports = (date, status, calendar_id, cb, db) => {
  db.updateDate(date, status, calendar_id, (error) => {
    if(error) {
      console.log(error)

      return cb("Problem to update date")
    }

    return cb(null)
  })
}