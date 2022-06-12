const { Post, User } = require ('../models')

const postController = {
    async cadastrarPost (req, res) {

        try {
            const {user_id, comments} = req.body
            
            const newPost = await Post.create ({
                user_id,
                comments,
            })

            return res.status(201).json (newPost)

        } catch (error) {
            console.log(error)
            return res.status(error).json
        }
       
    },

    async listaPost (req, res) {
        try {
            const listaResposta = await Post.findAll({
                attributes: ['idPost', 'comments', 'updatedAt'],
                include: [{model: User, attributes:['nome']}]
            }) 
            res.status(200).json (listaResposta)
        } catch (error) {
            console.log(error)
            return res.status(error).json
        }
    },

    async updatePost (req, res) {
        const { id } = req.params

        try {
            const {user_id, comments} = req.body

            const upadatePost = await Post.update (
                { user_id, comments},
                {
                    where: {
                        idPost: id
                    }
                })

            return res.status(201).json (upadatePost)
        } catch (error) {
            console.log(error)
            return res.status(error).json
        }
    },

    async deletePost (req, res) {

        try {
            const { id } = req.params

            await Post.destroy ({
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

module.exports = postController