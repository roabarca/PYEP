'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Projects', {
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
      project_manager: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model:"Project_managers",
          key:"username",
          as: "project_manager",
        },
      },
      client: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model:"Clients",
          key:"username",
          as: "client",
        },
      },
      state: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Projects');
  }
};