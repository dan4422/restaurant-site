const express = require('express');
const router = express.Router();
const { route } = require('.');
const models = require('../models')


router.get('/', async (req, res) => {
    res.render("layout", {
        partials: {
            body: "partials/reservation"
        },
        locals: {
            title: "Make a reservation!",
        }
    })
})

router.post('/', async (req, res) => {
    const { name, phone, date } = req.body
    const user = await models.User.findOne({
        where: { phone: phone }
    })
    if (user) {
        const reservationTaken = await models.Reservations.findOne({
            where: {
                date: date,
            }
        })
        if (!reservationTaken) {
            await models.Reservations.create({
                userId: user.id,
                date: date
            })
                .then(user => {
                    res.redirect('/reservation')
                })
        }
        else if (reservationTaken) {
            res.redirect('/wait-list')
        }
    }
    console.log(date)
    if (!user) {
        console.log(date)
        await models.User.create({
            name,
            phone,
        })
        const user = await models.User.findOne({
            where: { phone: phone }
        })
        console.log(date)
        const reservations = await models.Reservations.findOne({
            where: { date: date }

        })
        if (!reservations) {
            await models.Reservations.create({
                date,
                UserId: user.id

            })
                .then(user => {
                    res.redirect('/')
                })
        }
        else if (reservations) {
            res.redirect('/wait-list')
        }
    }



})

module.exports = router;