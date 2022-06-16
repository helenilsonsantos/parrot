'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      
    }
  }
  User.init({
    idUser: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    apartament: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};