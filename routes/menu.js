const express = require('express');
const router = express.Router();
const { route } = require('.');
const models = require('../models')



router.get('/', async (req, res) => {
    const products = await models.Product.findAll()
    res.render("menuLayout", {
        partials: {
            body: "partials/menu"
        },
        locals: {
            title: "Welcome to not chick-fil-a menu!",
            products
        }
    })
})





module.exports = router;