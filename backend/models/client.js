'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Client.hasMany(models.Project,{
        foreignKey: "client",
      });
      Client.hasMany(models.Comment,{
        foreignKey: "client",
      });
    }
  };
  Client.init({
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
    modelName: 'Client',
    timestamps: false,
  });
  return Client;
};