'use strict'
const Login = require('../controllers/login')
const { generateToken } = require('../helpers/jwt');

module.exports = (sol, res) => {
  const {email, password} = sol.body
  const {db} = sol

  Login(email, password, (error, information) => {
    console.log(error)
    if(error) {
      return res.json({
        "message": "Usuario o contraseña incorrectos"
      })
    }

    information.token = generateToken()

    res.json(information)    
  }, db)
}