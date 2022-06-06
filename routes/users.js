var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    partials: {
      body: "partials/error-existing-reservation"
    },
    locals: {
      title: "Time Taken"
    }
  })
});

module.exports = router;
