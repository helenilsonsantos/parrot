const express = require ('express')
const userController = require ('../controllers/UserController')
const postController = require ('../controllers/PostController')
const ComentsPostController = require('../controllers/ComentsPostController')
const authController = require('../controllers/authController')
const auth = require ('../middlewares/auth')
const userLogado = require ('../middlewares/userLogado')
const likesController = require('../controllers/likeController')
const routes = express.Router()
const userValidationCreate = require('../validations/user/create')
const userValidationUpdate = require('../validations/user/update')
const userValidationDestroy = require('../validations/user/destroy')
const postValidationCreate = require('../validations/post/create')
const postValidationUpdate = require('../validations/post/update')
const postValidationDestroy = require('../validations/post/destroy')

//ROTAS PARA O CRUD DE USUÁRIOS
routes.post('/usuario/criar', auth, userValidationCreate, userController.cadastrarUser)
routes.get('/usuario/lista', auth, userController.listaUser)
routes.put('/usuario/atualizar/:id', auth, userValidationUpdate, userController.updateUser)
routes.delete('/usuario/deletar/:id', auth, userValidationDestroy, userController.deleteUser)

//ROTAS PARA O CRUD DE POST
routes.post('/post/criar', auth, postValidationCreate, postController.cadastrarPost)
routes.get('/post/lista', auth, postController.listaPost)
routes.put('/post/atualizar/:id', auth, postValidationUpdate, postController.updatePost)
routes.delete('/post/deletar/:id', auth, postValidationDestroy, postController.deletePost)

//ROTAS PARA O CRUD DE FAZER COMENTARIOS EM POST
routes.post('/post/coments/criar', auth, ComentsPostController.cadastrarComents)
routes.get('/post/coments/lista', auth, ComentsPostController.listarComents)
routes.put('/post/coments/atualizar/:id', auth, ComentsPostController.updateComentsPost)
routes.delete('/post/coments/deletar/:id', auth, ComentsPostController.deleteComentsPost)

//ROTAS DE LIKES
routes.post('/post/likes/enviar/:id', auth, likesController.cadastrarLike)
routes.get('/post/likes/qtnlikes/:id', auth, likesController.qtnLikes)
routes.delete('/post/likes/remover/:id', auth, likesController.removerLike)

//ROTA DE LOGIN DO USUÁRIO
routes.post('/login', authController.login)
routes.post('/login/perfil', auth, userLogado.user)


module.exports = routes