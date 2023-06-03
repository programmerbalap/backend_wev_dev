'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    // await queryInterface.bulkInsert(
    //   'company',
    //   [
    //     {
    //       nama: 'PT. Induk Tani',
    //       nama_pemilik: 'Sendi Nugroho',
    //       alamat: 'Jl. Kancen Alas Tengah No.007609 MWP Jawa Timur',
    //       jenis: 1,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       nama: 'PT. Arya Utama',
    //       nama_pemilik: 'Dimas Arya',
    //       alamat: 'Jl. Sempol No.67009 Jawa Timur',
    //       jenis: 2,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {}
    // );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete('company', null, {});
  },
};
