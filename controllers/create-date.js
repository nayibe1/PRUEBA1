'use strict'

module.exports = (date, status, cb, db) => {
  db.createDate(date, status, (error) => {
    if(error) {
      console.log(error)

      return cb("Problem to create date")
    }

    return cb(null)
  })
}