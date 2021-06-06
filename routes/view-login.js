'use strict'
const path = require('path')

module.exports = (sol, res) => {
  res.sendFile(path.join(__dirname, '../view/index.html'))
}