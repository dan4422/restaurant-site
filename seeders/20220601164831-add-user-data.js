'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'drsherman@shermandental.com.au',
        password: 'pancakes',
        name: 'Doctoral Sherman',
        phone: '0243893625',
        address: '42 Wallaby Way',
        city: 'Sydney',
        state: 'NSW',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },
  /**
   * Add seed commands here.
   *
   * Example:
   * await queryInterface.bulkInsert('People', [{
   *   name: 'John Doe',
   *   isBetaMember: false
   * }], {});
  */
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
