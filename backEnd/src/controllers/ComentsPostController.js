const { ComentsPost } = require ('../models')

const ComentsPostController = {
    async cadastrarComents (req, res) {

        try {
            const {idPost, comments} = req.body
            const newComentsPost = await ComentsPost.create ({
                idPost,
                comments,
            })
            return res.status(201).json (newComentsPost)

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