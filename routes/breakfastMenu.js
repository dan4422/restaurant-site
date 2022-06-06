const express = require('express');
const router = express.Router();
const { route } = require('.');
const models = require('../models')

router.get('/', async (req, res) => {
    const products = await models.Product.findAll()
    // const product = products.map((product => product.category))
    const results = products.filter(p => p.category == 'Breakfast')
    loggedInUser = req.session.user
    res.render("menuLayout", {
        partials: {
            body: "partials/breakfast-menu"
        },
        locals: {
            title: "Welcome to not chick-fil-a breakfast menu!",
            products,
            results,
            loggedInUser
        }
    })
})


module.exports = router;