'use strict';

const user = require("../schema/user")
const post = require("../schema/post")

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comentsPosts', {
      idComents: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'post',
          key: 'idPost'
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'idUser'
        }
      },
      postComments: {
        type: Sequelize.STRING(180),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('comentsPosts');
  }
};