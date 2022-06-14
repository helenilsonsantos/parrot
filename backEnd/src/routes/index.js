const express = require ('express')
const userController = require ('../controllers/UserController')
const postController = require ('../controllers/PostController')
const ComentsPostController = require('../controllers/ComentsPostController')
const routes = express.Router()

//ROTAS PARA O CRUD DE USUÁRIOS
routes.post('/usuario/criar', userController.cadastrarUser)
routes.get('/usuario/lista', userController.listaUser)
routes.put('/usuario/atualizar/:id', userController.updateUser)
routes.delete('/usuario/deletar/:id', userController.deleteUser)

//ROTAS PARA O CRUD DE POST
routes.post('/post/criar', postController.cadastrarPost)
routes.get('/post/lista', postController.listaPost)
routes.put('/post/atualizar/:id', postController.updatePost)
routes.delete('/post/deletar/:id', postController.deletePost)

//ROTAS PARA O CRUD DE FAZER COMENTARIOS EM POST
routes.post('/post/coments/criar', ComentsPostController.cadastrarComents)
routes.put('/post/coments/atualizar/:id', ComentsPostController.updateComentsPost)
routes.delete('/post/coments/deletar/:id', ComentsPostController.deleteComentsPost)


module.exports = routes