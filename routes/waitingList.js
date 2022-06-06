

router.get('/', async (req, res) => {
    res.render("layout", {
        partials: {
            body: "partials/waiting-list"
        },
        locals: {
            title: "Make a reservation!"
        }
    })
})