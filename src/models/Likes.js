const db = require ('../dataBase/dbConexao')
const { DataTypes } = require ('sequelize')
const { User, Post } = require('.')

const Likes = db.define ('likes', {
    idLike: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Post,
            key: 'idPost'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'idUser'
        }
    },
    like: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'likes'
})

module.exports = Likes