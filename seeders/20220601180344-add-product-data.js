'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  await queryInterface.bulkInsert('Products', [
    {
      name: 'Dan\'s Burger',
      price: 1200,
      description: 'double burger with cheese,lettuce,tomato,onions and special sauce!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Brandon\'s Pasta',
      price: 1500,
      description: 'Alfredo chicken pasta',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Brice\'s Steak',
      price: 1800,
      description: '10 oz rib-eye steak with sides',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
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
