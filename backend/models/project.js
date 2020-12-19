'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsTo(models.Project_manager,{
        foreignKey: "project_manager",
      });
      Project.belongsTo(models.Client,{
        foreignKey: "client",
      });
      Project.hasMany(models.Requirement,{
        foreignKey: "project",
      });
      Project.hasMany(models.Comment,{
        foreignKey: "project",
      });
    }
  };
  Project.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    project_manager: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    client: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    state: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    progress: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Project',
    timestamps: false,
  });
  return Project;
};