router.get('/', async (req, res) => {
    const products = await models.Product.findAll()
    res.render("menuLayout", {
        partials: {
            body: "partials/dinner-menu"
        },
        locals: {
            title: "Welcome to not chick-fil-a dinner menu!",
            products
        }
    })
})