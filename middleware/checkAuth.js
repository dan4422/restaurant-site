function checkAuth(req, res, next) {
    // if req is not logged in
    if (!req.session.customer) {
      // redirect to login page
      res.redirect('/users/login')
      return
    }
    // continue as per normal
    next()
  }
  
  module.exports = checkAuth