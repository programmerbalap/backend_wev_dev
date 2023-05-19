'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js' && file.indexOf('.test.js') === -1;
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// Tambahkan Baris ini

// db.Province = require('./Province')(sequelize, Sequelize);
// db.City = require('./City')(sequelize, Sequelize);

// dan kita relasikan sebagai berikut;

// provinsi mempunyai beberapa kota

// db.Province.hasMany(db.City, {
//   foreignKey: 'province_id',
//   as: 'cities',
//   sourceKey: 'id',
// });

// dan tiap kota memiliki provinsi id masing-masing

// db.City.belongsTo(db.Province, {
//   foreignKey: 'province_id',
//   as: 'province',
//   targetKey: 'id',
// });

// module.exports = db;

// dan ketika di panggil Query di Controller maka akan seperti ini :

// import { City, Province } from '../db/models';
// ...
// const models = await Province.findAll({
//   attributes: ['id', 'name', 'created_at'],
//   include: [
//     {
//       model: City,
//       as: 'cities',
//       attributes: ['name', 'id'],
//     },
//   ],
// });
