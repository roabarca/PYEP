'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:"Projects",
          key:"id",
          as: "project",
        },
      },
      message: {
        allowNull: false,
        type: Sequelize.STRING
      },
      client: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model:"Clients",
          key:"username",
          as: "project",
        },
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Comments');
  }
};