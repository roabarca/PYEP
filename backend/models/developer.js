'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Developer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Developer.hasOne(models.Requirement,{
        foreignKey: "developer",
      });
    }
  };
  Developer.init({
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
      type: DataTypes.STRING
    },
    internal: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    qualification: {
      type: DataTypes.FLOAT
    }
  }, {
    sequelize,
    modelName: 'Developer',
    timestamps: false,
  });
  return Developer;
};