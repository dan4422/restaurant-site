'use strict';

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
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Dan\'s Burger',
        price: 1200,
        description: 'double burger with cheese,lettuce,tomato,onions and special sauce!',
        category: 'Dinner',
        calories: 100,
        img: "https://sandiegoburgercompany.com/wp-content/uploads/2020/07/mobile-header-bg.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brandon\'s Pasta',
        price: 1500,
        description: 'Alfredo chicken pasta',
        category: 'Dinner',
        calories: 100,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5NTFd1xJfJb6xzcmOb1LzYzNg6YpD95qzQ&usqp=CAU",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Steak',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Dinner',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dan\'s Apple Pie',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Dinner',
        calories: 100,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSav7PRqeiCJEaYjmZntskkFki4uP5lRWlU2A&usqp=CAU",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brandon\'s Rib Eye',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Lunch',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Steak',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Lunch',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Steak',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Lunch',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Steak',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Lunch',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Steak',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Lunch',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Steak',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Lunch',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Eggs',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Breakfast',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Omelet',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Breakfast',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Hashbrowns',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Breakfast',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Waffle',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Breakfast',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Bun Bao',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Breakfast',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Cereal',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Breakfast',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Steak',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Dinner',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Steak',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Dinner',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Steak',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Dinner',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Steak',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Dinner',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Steak',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Dinner',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Steak',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Dinner',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Steak',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Dinner',
        calories: 100,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
