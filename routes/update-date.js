'use strict'
const CreateDate = require('../controllers/update-date')

module.exports = (sol, res) => {
  const {date, status, calendar_id} = sol.body
  const {
    db,
    headers: { role },
  } = sol

  if (role != "ADMIN") {
    return res.json({
      message: "Not forbidden"
    })
  }

  CreateDate(date, status, calendar_id, (error, information) => {
    if(error) {
      return res.json({
        "message": "No se pudo actualizar la fecha"
      })
    }

    res.json({
      success: "Fecha actualizada"
    })    
  }, db)
}