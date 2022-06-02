'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.Order, { through: models.OrderProduct })
      Product.hasMany(models.OrderProduct)
    }
  }
  Product.init({
    name: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    category: DataTypes.TEXT,
    calories: DataTypes.INTEGER,
    img: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};