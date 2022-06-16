const { User } = require ('../models')
const jwt = require ('jsonwebtoken')
const secret = process.env.SECRET_KEY
const bcrypt = require('bcryptjs')

const authController = {
    async login (req, res) {
        try {
            const { email, password } = req.body
            
            const user = await User.findOne ({
                where: {
                    email: email
                }
            })

        if (!user) {
            return res.status(400).json ('Usuário ou Senha Inválida')
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json ('Usuário ou Senha Inválida')
        }

        const token = jwt.sign ({
            id: user.idUser,
            nome: user.nome,
            admin: user.admin
        }, secret)

        res.cookie ('authParrot', token)
        return res.status(200).json(token)

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = authController