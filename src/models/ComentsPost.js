const db = require ('../dataBase/dbConexao')
const { DataTypes } = require ('sequelize')
const { User, Post } = require('.')

const comentsPosts = db.define ('comentsPosts', {
     idComents: {
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
     postComments: {
          type: DataTypes.STRING
     },
     createdAt: {
          type: DataTypes.DATE
     },
     updatedAt: {
          type: DataTypes.DATE
     }
},  {
     tableName: 'ComentsPosts'
})

module.exports = comentsPosts