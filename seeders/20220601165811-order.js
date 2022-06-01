'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [{ 
      UserId: 1, 
      status: 'Paid', 
      date: new Date(), 
      total: 15, 
      paymentMethod: 'Cash',
      createdAt: new Date(), 
      updatedAt: new Date() 
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
