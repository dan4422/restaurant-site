const express = require('express');
const router = express.Router();
const { route } = require('.');
const models = require('../models')



router.get('/', async (req, res) => {
    const user = models.User.findOne({
        where: {
            userId: req.session.user
        },
    })
    console.log(user)
    res.render("layout", {
        partials: {
            body: "partials/receipt"
        },
        locals: {
            title: "Thank you!",
            order
        }
    })
})





module.exports = router;