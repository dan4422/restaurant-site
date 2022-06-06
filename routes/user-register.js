const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const models = require('../models');
const app = require('../app');

/* GET users listing. */
router.get('/', function (req, res, next) {
  loggedInUser = req.session.user
  res.render("layout", {
    partials: {
        body: "partials/user-register"
    },
    locals: {
        title: "Registration",
        loggedInUser
    }
  })
});

router.post('/', async (req,res) => {
  const {name,email,password,phone,address,city,state} = req.body
  const user = await models.User.findOne({
    where: {email: email}
  })
  if (user) {
    res.render('layout', {
      partials: {
        body: "partials/error-existing-email"
      },
      locals: {
        title: "Error: Email already in use"
      }
    })
    return
  }
  bcrypt.hash(password,10)
    .then(hash => {
      models.User.create({
        name,
        email,
        password: hash,
        phone,
        address,
        city,
        state
      })
    })
      .then(user => {
        res.redirect('/user/login')
      })
})

module.exports = router;