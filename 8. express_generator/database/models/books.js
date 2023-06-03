'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    static associate(models) {
      books.belongsTo(models.users, {
        as: 'users',
        foreignKey: 'userId',
        onDelete: 'cascade',
      });
    }
  }
  books.init(
    {
      judul: DataTypes.STRING,
      banyak: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'books',
    }
  );
  return books;
};
