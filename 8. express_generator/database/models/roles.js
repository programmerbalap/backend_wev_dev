'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    static associate(models) {
      roles.hasMany(models.users, {
        as: 'users',
        foreignKey: 'role',
        onDelete: 'cascade',
      });
    }
  }
  roles.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'roles',
    }
  );
  return roles;
};
