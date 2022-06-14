const db = require ('../dataBase/dbConexao')
const { DataTypes } = require ('sequelize')
const { ComentsPost } = require('./ComentsPost')

const ComentsPost = db.define ('Coments', {
     idComents: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
     },
     idPost: {
          type: DataTypes.INTEGER,
          references: {
               model: Post,
               key: 'idPost'
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
     tableName: 'ComentsPost'
})

module.exports = ComentsPost