'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Accounts', {
      username: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      client: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      developer: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      analyst: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      pm: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Accounts');
  }
};