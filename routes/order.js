const express = require('express');
const bcrypt = require('bcrypt')

const models = require('../models');
const db = require('../models');

const router = express.Router();

/* GET order page. */
router.get('/', async (req, res) => {
    const orderProducts = await models.OrderProduct.findAll({
        include: models.Product
    })
    const products = await models.Product.findByPk()
    res.render("layout", {
        partials: {
            body: "partials/order"
        },
        locals: {
            title: "Your Order",
            orderProducts,
            products
        }
    })
})

/* GET checkout page. */
router.get('/checkout', (req, res) => {
    const orderProducts = models.OrderProduct.findAll({
        include: models.Product
    })
    const products = models.Product.findByPk()
    res.render("layout", {
        partials: {
            body: "partials/checkout"
        },
        locals: {
            title: "Checkout",
            orderProducts,
            products
        }
    })
})

module.exports = router;