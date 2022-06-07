const express = require('express');
const router = express.Router();
const { route } = require('.');
const models = require('../models')



router.get('/', async (req, res) => {
    const products = await models.Product.findAll()
    // const product = products.map((product => product.category))
    const results = products.filter(p => p.category == 'Dinner')
    loggedInUser = req.session.user
    res.render("menuLayout", {
        partials: {
            body: "partials/dinner-menu"
        },
        locals: {
            title: "Beefy Bois Dinner Menu!",
            products,
            results,
            loggedInUser
        }
    })
})


module.exports = router;