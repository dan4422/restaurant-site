var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render("layout", {
    partials: {
      body: "partials/home"
    },
    locals: {
      title: "Welcome to not chick-fil-a!"
    }
  })
})



module.exports = router;