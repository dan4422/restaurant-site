const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const models = require('../models');
const app = require('../app');

/* GET users listing. */
router.get('/login', function (req, res, next) {
  res.render('layout', {
    partials: {
      body: 'partials/user-login'
    },
    locals: {
      title: 'Login'
    }
  });
});

router.post('/login', async (req,res) => {
  const {email,password} = req.body
  const user = await models.User.findOne({
    where: {email: email}
  })
  if (!user) {
    res.render('layout', {
      partials: {
        body: 'partials/error-username'
      },
      locals: {
        title: 'Error: Username not found'
      }
    })
    return
  }
  const passwordIsCorrect = await bcrypt.compare(password, user.password)
  if (!passwordIsCorrect) {
    res.render('layout', {
      partials: {
        body: 'partials/error-password'
      },
      locals: {
        title: 'Error: Wrong Password!'
      }
    })
    return
  }
  req.session.user = user
  res.redirect('/')
})

router.get('/logout', (req,res) => {
  // remove customer details from session
  req.session.user = null
  // redirect back to login
  res.redirect('/users/login')
})


module.exports = router;