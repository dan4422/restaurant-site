var express = require('express');
var router = express.Router();
const models = require('../models');

/* GET home page. */
router.get('/', async (req, res) => {
  res.render("layout", {
    partials: {
      body: "partials/home"
    },
    locals: {
      title: "Welcome to Beefy Boi's Diner",
    }
  })
})



module.exports = router;