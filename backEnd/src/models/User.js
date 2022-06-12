const db = require ('../dataBase/dbConexao')
const { DataTypes } = require ('sequelize')

const user = db.define ('user', {
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    },
    apartament: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    admin: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'user'
})

module.exports = user