'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Project,{
        foreignKey: "project",
      });
      Comment.belongsTo(models.Client,{
        foreignKey: "client",
      });
    }
  };
  Comment.init({
    project: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    client: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Comment',
    timestamps: false,
  });
  return Comment;
};