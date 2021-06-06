'use strict'
const ListCalendar = require('../controllers/list-calendar')

module.exports = (sol, res) => {
  const {db} = sol

  ListCalendar((error, information) => {
    if(error) {
      return res.json({
        "message": "Error al obtener la lista"
      })
    }

    res.json({calendar: information})    
  }, db)
}