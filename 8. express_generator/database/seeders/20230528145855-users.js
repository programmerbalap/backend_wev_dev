'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt();
    const pass = '123';
    const password = await bcrypt.hash(pass, salt);
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'subhan',
          email: 'subhan@gmail.com',
          password: password,
          role: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'lukman',
          email: 'lukman@gmail.com',
          password: password,
          role: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
