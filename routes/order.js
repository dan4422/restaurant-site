const express = require('express');
const bcrypt = require('bcrypt')

const models = require('../models');
const db = require('../models');

const router = express.Router();

/* GET order page. */
router.get('/', async (req, res) => {
    const order = await models.Order.findOne({
        where: {
            status: 'in progress',
            UserId: req.session.user.id
        },
        include: {
            model: models.OrderProduct,
            include: models.Product
        }
    })
    console.log(order)
    res.render("layout", {
        partials: {
            body: "partials/order"
        },
        locals: {
            title: "Your Order",
            orderProducts: order.OrderProducts
        }
    })
})

router.post('/', (req, res) => {
    res.redirect('/order')
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
    const user = await models.User.findOne({
        where: {email: email}
    })
    if (user) {
        res.render('layout', {
        partials: {
            body: "partials/error-existing-email"
        },
        locals: {
            title: "Error: Email already in use"
        }
        })
        return
    }
    let guest = req.session.user
    guest.name = name
    guest.email = email
    guest.phone = phone
    guest.address = address
    guest.city = city
    guest.state = state

    if (req.body.register && password) {
        guest.password = await bcrypt.hash(password, 10)
    }
    models.User.update(
        guest
    ,
    {
        where: { id: guest.id },
    })
        .then(user => {
            res.redirect('/receipt')
        })

})

module.exports = router;