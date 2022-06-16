const jwt = require ('jsonwebtoken')
const secret = process.env.SECRET_KEY
const bcrypt = require ('bcryptjs')

const userLogado = {
    async user (req, res ) {
        try {
            console.log(req.auth)
            return res.status(200).json(req.auth)

        } catch (error) {
            return res.status(401).json('Usuário não Autorizado')
        }
    }
}

module.exports = userLogado