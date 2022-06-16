'use strict';
const {
  Model
} = require('sequelize');

const user = require('./user')
const post = require('./post')

module.exports = (sequelize, DataTypes) => {
  class likes extends Model {
    
    static associate(schema) {
      [user.hasMany (schema.like, {foreignKey: 'user_id'}),
      post.hasMany(schema.like, {foreignKey: 'post_id'})
      ]}
  }
  likes.init({
    idLike: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    like: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'likes',
  });
  return likes;
};