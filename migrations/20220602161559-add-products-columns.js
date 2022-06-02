'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addColumn('Products', 'category', {
      type: Sequelize.TEXT
    })
    queryInterface.addColumn('Products', 'calories', {
      type: Sequelize.INTEGER
    })
    queryInterface.addColumn('Products', 'img', {
      type: Sequelize.TEXT
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

  }
};
