'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Requirements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      developer: {
        type: Sequelize.STRING,
        references: {
          model:"Developers",
          key:"username",
          as: "developer",
        },
      },
      price: {
        type: Sequelize.INTEGER
      },
      state: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      project: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model:"Projects",
          key:"id",
          as: "project",
        },
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Requeriments');
  }
};