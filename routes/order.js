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

router.post('/checkout', async (req,res) => {
    const {name,email,password,phone,address,city,state} = req.body
    const guest = req.session.user.name
    console.log(guest)
    bcrypt.hash(password,10)
        .then(hash => {
        models.User.create({
            name,
            email,
            password: hash,
            phone,
            address,
            city,
            state
        })
        })
        .then(user => {
            res.redirect('/receipt')
        })
    // const user = await models.User.findOne({
    //     where: {email: email}
    // })
    // if (user) {
    //     res.render('layout', {
    //     partials: {
    //         body: "partials/error-existing-email"
    //     },
    //     locals: {
    //         title: "Error: Email already in use"
    //     }
    //     })
    //     return
    // }
})

module.exports = router;