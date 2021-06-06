'use strict'

module.exports = (cb, db) => {
  db.listaCalendario((error, information) => {
    if(error) {
      console.log(error)

      return cb("Problem with get calendar", null)
    }

    return cb(null, information)
  })
}