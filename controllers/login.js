'use strict'

module.exports = (email, password, cb, db) => {
  db.login(email, password, (error, information) => {
    if(error) {
      console.log(error)

      return cb("Problem with get user", null)
    }
    
    if (information) {
      return cb(null, information)
    }

    return cb("user not found", null)

  })
}