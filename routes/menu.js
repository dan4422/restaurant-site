const express = require('express');
const router = express.Router();
const { route } = require('.');
const models = require('../models')



router.get('/', async (req, res) => {
    const products = await models.Product.findAll()
    loggedInUser = req.session.user
    res.render("menuLayout", {
        partials: {
            body: "partials/menu"
        },
        locals: {
            title: "Beefy Bois Lunch Menu!",
            products,
            loggedInUser
        }
    })
})





module.exports = router;