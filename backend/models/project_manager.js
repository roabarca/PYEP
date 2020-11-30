'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project_manager extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project_manager.hasMany(models.Project,{
        foreignKey: "project_manager",
      });
    }
  };
  Project_manager.init({
    username: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Project_manager',
    timestamps: false,
  });
  return Project_manager;
};