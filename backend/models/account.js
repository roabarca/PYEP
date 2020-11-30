'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Account.init({
    username: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    client: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    developer: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    analyst: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    pm: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    }
  }, {
    sequelize,
    modelName: 'Account',
    timestamps: false,
  });
  return Account;
};