'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      // define association here
      users.belongsTo(models.roles, {
        as: 'roles',
        foreignKey: 'role',
        onDelete: 'cascade',
      });
      users.hasMany(models.books, {
        as: 'books',
        foreignKey: 'userId',
        onDelete: 'cascade',
      });
    }
  }
  users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'users',
    }
  );
  return users;
};
