const dotenv = require ('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_USUARIO,
    "password": process.env.DB_SENHA,
    "database": process.env.DB_NOME,
    "host": process.env.DB_HOST,
    "dialect": 'mysql'
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
