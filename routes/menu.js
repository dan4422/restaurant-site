var express = require('express');
var router = express.Router();
const { route } = require('.');
const models = require('../models')
const bcrypt = require("bcrypt");

/* GET users listing. */


router.get('/', (req, res) => {
    res.render("layout", {
        partials: {
            body: "partials/menu"
        },
        locals: {
            title: "Welcome to not chick-fil-a menu!"
        }
    })
})


module.exports = router;