const express = require ('express')
const cors = require('cors')
const port = process.env.PORT
const routes = require('../src/routes')
const handleError = require ('../src/middlewares/handleError')
const db = require ('../src/dataBase/dbConexao')

const app = express()
app.use (cors())

db.conectarBanco()

app.use (express.json())
app.use (routes)
app.use (handleError)

app.listen (port || 8900, () => console.log ('Servidor Rodando na Porta 8900'))