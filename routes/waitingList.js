

router.get('/', async (req, res) => {
    loggedInUser = req.session.user
    res.render("layout", {
        partials: {
            body: "partials/waiting-list"
        },
        locals: {
            title: "Make a reservation!",
            loggedInUser
        }
    })
})