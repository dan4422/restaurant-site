const express = require('express');
const router = express.Router();
const { route } = require('.');
const models = require('../models')


router.get('/', async (req, res) => {
    loggedInUser = req.session.user
    res.render("layout", {
        partials: {
            body: "partials/reservation-made"
        },
        locals: {
            title: "Reservation made!",
            loggedInUser
        }
    })
})

module.exports = router;