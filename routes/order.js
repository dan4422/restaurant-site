const express = require('express');
const bcrypt = require('bcrypt')

const models = require('../models');
const db = require('../models');

const router = express.Router();

/* GET order page. */
router.get('/', async (req, res) => {
    const [user] = await models.User.findOrCreate({
        where: { id: req.session.user?.id || null },
        defaults: {
            name: "guest"
        }
    })
    req.session.user = user
    loggedInUser = req.session.user
    const [order] = await models.Order.findOrCreate({
        where: {
            status: 'in progress',
            UserId: req.session.user.id
        },
        include: {
            model: models.OrderProduct,
            include: models.Product
        }
    })
    if (!order.OrderProducts) {
        res.render("layout", {
            partials: {
                body: "partials/no-cart"
            },
            locals: {
                title: "Your Cart is Empty"
            }
        })
    }
    else {
        res.render("layout", {
            partials: {
                body: "partials/order"
            },
            locals: {
                title: "Your Order",
                orderProducts: order.OrderProducts,
                loggedInUser
            }
        })
    }
})

router.post('/', (req, res) => {
    res.redirect('/order')
})

/* GET checkout page. */
router.get('/checkout', (req, res) => {
    loggedInUser = req.session.user
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
            products,
            loggedInUser
        }
    })
})

router.post('/checkout', async (req, res) => {
    const { name, email, password, phone, address, city, state, pickupOrDelivery } = req.body
    if (req.session.user.email) {
        res.redirect(`/order/checkout/receipt?method=${pickupOrDelivery}`)
        return
    }
    const user = await models.User.findOne({
        where: { email: email }
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
            res.redirect(`/order/checkout/receipt?method=${pickupOrDelivery}`)
        })
})

router.get('/checkout/receipt', async (req, res) => {
    const [user] = await models.User.findOrCreate({
        where: { id: req.session.user?.id || null },
        defaults: {
            name: "guest"
        }
    })
    req.session.user = user
    loggedInUser = req.session.user
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
    // add in total price
    let total = 0
    for (let op of order.OrderProducts) {
        total += op.Product.price * op.quantity
    }
    order.total = total
    // change status to complete
    order.status = 'complete'
    // save then render
    order.date = new Date()
    order.payment = "Cash"
    await order.save()
    res.render("layout", {
        partials: {
            body: "partials/receipt"
        },
        locals: {
            title: "Order Confirmation",
            user: user,
            order: order,
            orderProducts: order.OrderProducts,
            loggedInUser
        }
    })
})

router.post('/checkout/receipt', async (req, res) => {
    res.redirect('/menu')
})

module.exports = router;