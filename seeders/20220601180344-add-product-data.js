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
        calories: 1400,
        img: "https://sandiegoburgercompany.com/wp-content/uploads/2020/07/mobile-header-bg.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brandon\'s Pasta',
        price: 1500,
        description: 'Alfredo chicken pasta',
        category: 'Dinner',
        calories: 1500,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5NTFd1xJfJb6xzcmOb1LzYzNg6YpD95qzQ&usqp=CAU",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s T-Bone',
        price: 2800,
        description: '40 oz T-Bone steak with sides',
        category: 'Dinner',
        calories: 2000,
        img: "https://thegourmetbonvivant.com/wp-content/uploads/2022/04/t-bone-steak-grill-1200x1200-1.jpg",
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
        description: '20 oz rib-eye steak with sides',
        category: 'Lunch',
        calories: 1800,
        img: "https://therecipecritic.com/wp-content/uploads/2021/07/ribeyesteak.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s BLT',
        price: 800,
        description: 'BLT',
        category: 'Lunch',
        calories: 1000,
        img: "https://www.billyparisi.com/wp-content/uploads/2015/08/blt-1-1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dan\'s Grilled Cheese and Tomato Soup',
        price: 600,
        description: 'Grilled cheese with tomato soup',
        category: 'Lunch',
        calories: 1000,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brandon\'s Club Sandwich',
        price: 800,
        description: 'Club Sandwich',
        category: 'Lunch',
        calories: 1000,
        img: "https://www.cheaprecipeblog.com/wp-content/uploads/2019/06/Grilled-Club-sandwiches-720x540.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Gumbo',
        price: 1100,
        description: 'Seafood Gumbo',
        category: 'Lunch',
        calories: 1100,
        img: "https://www.africanbites.com/wp-content/uploads/2020/08/IMG_3769-2.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dan\'s Korean Style Chicken Wings',
        price: 1100,
        description: 'Korean style chicken wings ',
        category: 'Lunch',
        calories: 1200,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Eggs',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Breakfast',
        calories: 800,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Omelet',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Breakfast',
        calories: 1200,
        img: "https://media-cdn.tripadvisor.com/media/photo-s/14/ca/f7/e3/mix-omlet.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Hashbrowns',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Breakfast',
        calories: 1600,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Waffle',
        price: 1800,
        description: '10 oz rib-eye steak with sides',
        category: 'Breakfast',
        calories: 1100,
        img: "https://www.jocooks.com/wp-content/uploads/2020/09/belgian-waffles-1-16-500x500.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Bun Bao',
        price: 500,
        description: '10 oz rib-eye steak with sides',
        category: 'Breakfast',
        calories: 1300,
        img: "https://www.pressurecookrecipes.com/wp-content/uploads/2021/01/instant-pot-steamed-buns.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Cereal',
        price: 700,
        description: 'Cereal of your choice',
        category: 'Breakfast',
        calories: 500,
        img: "https://www.cspinet.org/sites/default/files/styles/700x530/public/2021-11/december21_bn_hero_700x530.jpg?h=61bc1599",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brandon\'s Deluxe Burger',
        price: 1200,
        description: 'Burger make you go yum',
        category: 'Dinner',
        calories: 1000,
        img: "https://makeyourmeals.com/wp-content/uploads/2019/06/featured-hamburger-735x490.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dan\'s Hotdog',
        price: 600,
        description: 'Amazing beef hot dog which will blow your mind',
        category: 'Lunch',
        calories: 900,
        img: "https://images.immediate.co.uk/production/volatile/sites/2/2016/07/24724.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brandon\'s Shrimp Creole',
        price: 1600,
        description: 'Shrimp creole is just a much better version of shrimp gumbo',
        category: 'Dinner',
        calories: 1400,
        img: "https://therecipecritic.com/wp-content/uploads/2019/02/shrimp_creole.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Com Bo Luc Lac',
        price: 1100,
        description: 'Shaking beef with sides',
        category: 'Dinner',
        calories: 1100,
        img: "https://glebekitchen.com/wp-content/uploads/2020/03/shakingbeeffrontspoon-1024x1024.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dan\'s New York Strip',
        price: 2000,
        description: '16 oz New York Strip steak with sides',
        category: 'Dinner',
        calories: 1100,
        img: "https://cdn1.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/20_34148_30W_01ex.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brice\'s Rib Eye',
        price: 2200,
        description: '10 oz rib-eye steak with sides',
        category: 'Dinner',
        calories: 1000,
        img: "https://diethood.com/wp-content/uploads/2021/02/ribeye-steak-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brandon\'s Porterhouse',
        price: 2400,
        description: '50 oz porterhouse steak with sides',
        category: 'Dinner',
        calories: 1200,
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1c/17/04/1c/22oz-porterhouse-steak.jpg",
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
