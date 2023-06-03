'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      'books',
      [
        {
          judul: 'Bumi Manusia',
          banyak: 12,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          judul: 'Laskar Pelangi',
          banyak: 17,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          judul: 'Anak Semua bangsa',
          banyak: 14,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          judul: 'Negeri 5 Menara',
          banyak: 24,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          judul: 'Jejak Langkah',
          banyak: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  },
};
