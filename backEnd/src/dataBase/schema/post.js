'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    
    static associate(schema) {
      user.hasMany (schema.post, {foreignKey: 'user_id'})
    }
  }
  Post.init({
    idPost: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comments: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'post',
  });
  return Post;
};