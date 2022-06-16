'use strict';
const {
  Model
} = require('sequelize');

const { Post, User } = require('../../models');
module.exports = (sequelize, DataTypes) => {
  class comentsPost extends Model {
   
    static associate(schema) {
      [Post.hasMany (schema.comentsPost), {foreignKey: 'post_id'},
      User.hasMany (schema.comentsPost, {foreignKey: 'user_id'})
      ]}
  }
  comentsPost.init({
    idComents: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    postComments: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'comentsPost',
  });
  return comentsPost;
};