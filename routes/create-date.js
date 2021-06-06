'use strict'
const CreateDate = require('../controllers/create-date')

module.exports = (sol, res) => {
  console.log(sol.db)
  const {date, status} = sol.body
  const {db} = sol

  CreateDate(date, status, (error, information) => {
    if(error) {
      return res.json({
        "message": "No se pudo agregar nueva fecha"
      })
    }

    res.json({
      success: "Nueva fecha creada"
    })    
  }, db)
}