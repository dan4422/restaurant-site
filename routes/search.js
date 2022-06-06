const express = require('express');
const router = express.Router();
const { route } = require('.');
const models = require('../models')
const bodyParser = require("body-parser")
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const { Op } = require("sequelize")
router.get('/', async (req, res) => {
    const products = await models.Product.findAll()
    loggedInUser = req.session.user
    res.render("layout", {
        partials: {
            body: "partials/search"
        },
        locals: {
            title: "Welcome to Beefy Boi's Diner",
            products,
            loggedInUser
        }
    })
})

router.post('/', async (req, res) => {
    const { name } = req.body
    console.log(name)
    const product = await models.Product.findAll({
        where: {
            name: {
                [Op.iLike]: "%" + name + "%"
            }
        }
    })
    res.render("layout", {
        partials: {
            body: "partials/search-results"
        },
        locals: {
            title: "Welcome to Beefy Boi's Diner",
            product,
        }
    })
})

module.exports = router;