'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Developers', {
      username: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      internal: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      qualification: {
        type: Sequelize.FLOAT
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Developers');
  }
};