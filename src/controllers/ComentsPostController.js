const { ComentsPost, User, Post } = require ('../models')

const ComentsPostController = {
    async cadastrarComents (req, res) {

        try {
            const {post_id, user_id, postComments} = req.body
            const newComentsPost = await ComentsPost.create ({
                post_id,
                user_id,
                postComments,
            })
            return res.status(201).json (newComentsPost)

        } catch (error) {
            console.log(error)
            return res.status(error).json
        }
    },

    async listarComents (req, res) {

        try {
            const listaResposta = await ComentsPost.findAll({
                attributes: ['postComments', 'updatedAt'],
                include: [{model: User, attributes:['nome']}]
            }) 
            res.status(200).json (listaResposta)

        } catch (error) {
            console.log(error)
            return res.status(error).json
        }
    },

    async updateComentsPost (req, res) {
        const { id } = req.params

        try {
            const {post_id, user_id, postComments} = req.body
            const updateComentsPost = await ComentsPost.update (
                { post_id, user_id, postComments},
                {
                    where: {
                        idComents: id
                    }
                })

            return res.status(201).json (updateComentsPost)
        } catch (error) {
            console.log(error)
            return res.status(error).json
        }
    },

    async deleteComentsPost (req, res) {

        try {
            const { id } = req.params
            await ComentsPost.destroy ({
                where: {
                    idComents: id
                }
            })

            return res.status(204).json('Comentário Deletado com Sucesso')
            
        } catch (error) {
            console.log(error)
            return res.status(error).json
        }
    }
}

module.exports = ComentsPostController