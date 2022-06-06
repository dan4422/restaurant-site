const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const models = require('../models');
const app = require('../app');




router.get('/', (req, res) => {
    res.render('layout', {
        partials: {
            body: "partials/wait-list"
        },
        locals: {
            title: "Reservation taken"
        }
    })
})



module.exports = router