'use strict'

const MySQL = require('mysql')

class DBMySQL {
  constructor() {
    this.connection = MySQL.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'medico'
    });
  }

  createTables() {
    this.connection.connect()
    this.connection.query(`
      CREATE TABLE IF NOT EXISTS users(
        user_id INT AUTO_INCREMENT, 
        fullname VARCHAR(250) NOT NULL, 
        email VARCHAR(250) NOT NULL, 
        password VARCHAR(250) NOT NULL, 
        role VARCHAR(10) NOT NULL,
        PRIMARY KEY (user_id, email), 
        UNIQUE (email)
      )ENGINE=INNODB;`, (error, results, fields) => {
      if (error) {
        console.log(error)
      }
    })

    this.connection.query(`CREATE TABLE IF NOT EXISTS calendar(
        calendar_id INT AUTO_INCREMENT, 
        date VARCHAR(250) NOT NULL, 
        status enum('EMPTY', 'BUSY', 'CANCELED', 'DELETED'), 
        PRIMARY KEY (calendar_id)
      ) ENGINE=INNODB;`, (error, results, fields) => {
      if (error) {
        console.log(error)
      }
    })
  }

  createUsers() {
    this.connection.query('SELECT * FROM users WHERE email IN (?,?,?)', ["admin@medicos.com", "user1@usuarios.com", "user2@usuarios.com"], (error, response, fields) => {
      if (error) {
        console.log(error, "error al obtener")
      }

      if (response.length < 3) {
        const users  = [
          "admin@medicos.com", 
          "Administrador", 
          "clavedeadmin",
          "ADMIN",
          "user1@usuarios.com", 
          "Usuario 1",
          "clavedeusuario1",
          "BASIC",
          "user2@usuarios.com", 
          "Usuario 2",
          "clavedeusuario2",
          "BASIC"
        ];
        this.connection.query('INSERT INTO users(email, fullname, password, role) VALUES (?,?,?,?),(?,?,?,?),(?,?,?,?)', users, function (error, results, fields) {
          if (error) console.log(error);
          console.log(results, "resultados de insertar usuarios")
        });
      }
    })
  }

  login(email, password, cb) {
    this.connection.query("SELECT email, fullname, role FROM users WHERE email = ? AND password = ?", [email, password], (error, results, fields) => {
      if (error) {
        return cb(error, null)
      }

      return cb(null, results[0])
    })
  }

  listaCalendario(cb) {
    this.connection.query("SELECT calendar_id, date, status FROM calendar WHERE status <> ?", ["DELETED"], (error, results, fields) => {
      if (error) {
        return cb(error, null)
      }

      return cb(null, results)
    })
  }

  createDate(date, status, cb) {
    this.connection.query("INSERT INTO calendar(date, status) VALUES (?,?)", [date, status], (error, results, fields) => {
      if (error) {
        return cb(error)
      }

      return cb(null)
    })
  }

  updateDate(date, status, calendar_id, cb) {
    this.connection.query("UPDATE calendar SET date=?, status=? WHERE calendar_id = ?", [date, status, calendar_id], (error, results, fields) => {
      if (error) {
        return cb(error)
      }

      return cb(null)
    })
  }
}

module.exports = DBMySQL