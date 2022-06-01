'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User)
      Order.belongsToMany(models.Product, {through:models.OrderProduct})
      Order.hasMany(models.OrderProduct)
    }
  }
  Order.init({
    status: DataTypes.TEXT,
    date: DataTypes.DATE,
    total: DataTypes.INTEGER,
    paymentMethod: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};