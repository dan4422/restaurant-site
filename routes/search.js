const express = require('express');
const router = express.Router();
const { route } = require('.');
const models = require('../models')


router.get('/search', (req, res) => {
    let { term } = req.query;

    // Make lowercase
    term = term.toLowerCase();

    models.findAll({ where: { products: { [Op.like]: '%' + term + '%' } } })
        .then(gigs => res.render('gigs', { gigs }))
        .catch(err => res.render('error', { error: err }));
});

module.exports = router;