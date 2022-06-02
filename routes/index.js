var express = require('express');
var router = express.Router();
const models = require('../models');

/* GET home page. */
router.get('/', async (req, res) => {
  const user = await models.User.findByPk(req.session.user.id)
  console.log(user)
  res.render("layout", {
    partials: {
      body: "partials/home"
    },
    locals: {
      title: "Welcome to Beefy Boi's Diner",
      user
    }
  })
})



module.exports = router;