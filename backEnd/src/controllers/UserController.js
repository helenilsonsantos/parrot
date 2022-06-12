const { User } = require ('../models')
const bcrypt = require ('bcryptjs')

const userController = {
    async cadastrarUser (req, res) {

        try {
            const {nome, email, apartament, password, admin} = req.body

            const newPassword = bcrypt.hashSync (password, 10)
            
            const newUser = await User.create ({
                nome,
                email,
                apartament,
                password: newPassword,
                admin
            })

            return res.status(201).json (newUser)

        } catch (error) {
            console.log(error)
            return res.status(error).json
        }
       
    },

    async listaUser (req, res) {
        try {
            const listaResposta = await User.findAll(
                {attributes: ['idUser', 'nome', 'email', 'apartament', 'admin']}
            ) 
            res.status(200).json (listaResposta)
        } catch (error) {
            console.log(error)
            return res.status(error).json
        }
    },

    async updateUser (req, res) {
        const { id } = req.params

        try {
            const {nome, email, apartament, password, admin} = req.body
            const newPassword = bcrypt.hashSync (password, 10)

            const upadateUser = await User.update (
                { nome, email, apartament, password: newPassword, admin },
                {
                    where: {
                        idUser: id
                    }
                })

            return res.status(201).json (upadateUser)
        } catch (error) {
            console.log(error)
            return res.status(error).json
        }
    },

    async deleteUser (req, res) {

        try {
            const { idUser } = req.params

            await User.destroy ({
                where: {
                    idUser
                }
            })

            return res.status(204).json
            
        } catch (error) {
            console.log(error)
            return res.status(error).json
        }
    }
}

module.exports = userController