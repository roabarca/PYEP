'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Requirement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Requirement.belongsTo(models.Developer,{
        foreignKey: "developer",
      });
      Requirement.belongsTo(models.Project,{
        foreignKey: "project",
      });
    }
  };
  Requirement.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: DataTypes.STRING,
    developer: DataTypes.STRING,
    price: DataTypes.INTEGER,
    finished: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    project: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Requirement',
    timestamps: false,
  });
  return Requirement;
};