const express = require('express');
const router = express.Router();
const { route } = require('.');
const models = require('../models')



// if user doesn't exist then set to null
router.post('/:productId/add', async (req, res) => {
    // brackets around user for pulling first value out by destructuring
    // findOrCreate finds a user by id given or if not found creates a guest id
    const [user] = await models.User.findOrCreate({
        where: { id: req.session.user?.id || null },
        defaults: {
            name: "guest"
        }
    })

    req.session.user = user
    // brackets around order for pulling first value out by destructuring
    const [order] = await models.Order.findOrCreate({
        where: {
            status: 'in progress',
            UserId: user.id
        },
    })
    // brackets around orderProduct for pulling first value out by destructuring
    const [orderProduct] = await models.OrderProduct.findOrCreate({
        where: {
            OrderId: order.id,
            ProductId: req.params.productId,
        },
        defaults: {
            quantity: 0
        }
    })
    orderProduct.quantity += 1
    await orderProduct.save()
    res.redirect("/menu")
})


module.exports = router