const { Post, User, Likes} = require ('../models')

const likesController = {
    async cadastrarLike (req, res) {

        try {
            const { idPost } = req.params
            const {user_id} = req.body
            
            const newLike = await Likes.create ({
                post_id: idPost,
                user_id,
            })

            return res.status(201).json (newLike)

        } catch (error) {
            console.log(error)
            return res.status(error).json
        } 
    },

    async qtnLikes (req, res) {
        try {
            const { idPost } = req.params
            const listaResposta = await Likes.count({
                where: {
                    post_id: idPost
                }
            })

            res.status(200).json (listaResposta)

        } catch (error) {
            console.log(error)
            return res.status(error).json
        }
    },

    async removerLike (req, res) {

        try {
            const { idLike } = req.params

            await Likes.destroy ({
                where: {
                    idLike: idLike
                }
            })

            return res.status(204).json('Like Removido com Sucesso')
            
        } catch (error) {
            console.log(error)
            return res.status(error).json
        }
    }
}

module.exports = likesController