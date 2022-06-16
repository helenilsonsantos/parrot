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
                include: [{model: User, attributes:['nome']}, {model: Post, attributes:['idPost','comments']}],
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
            const {idPost, comments} = req.body
            const updateComentsPost = await ComentsPost.update (
                { idPost, comments },
                {
                    where: {
                        idPost: id
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
            await destroy ({
                where: {
                    idPost: id
                }
            })
            return res.status(204).json
            
        } catch (error) {
            console.log(error)
            return res.status(error).json
        }
    }
}

module.exports = ComentsPostController