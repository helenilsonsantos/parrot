const express = require ('express')
const userController = require ('../controllers/UserController')
const routes = express.Router()

//ROTAS PARA O CRUD DE USUÁRIOS
routes.post('/usuario/criar', userController.cadastrarUser)
routes.get('/usuario/lista', userController.listaUser)
routes.put('/usuario/atualizar/:id', userController.updateUser)
routes.delete('/usuario/deletar/:id', userController.deleteUser)

module.exports = routes