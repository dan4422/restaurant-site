const express = require('express');
const router = express.Router();
const { route } = require('.');
const models = require('../models')


router.get('/', async (req, res) => {
    loggedInUser = req.session.user
    res.render("layout", {
        partials: {
            body: "partials/reservation"
        },
        locals: {
            title: "Make a reservation!",
            loggedInUser
        }
    })
})

router.post('/', async (req, res) => {
    const { name, phone, date } = req.body
    const user = await models.User.findOne({
        where: { phone: phone }
    })
    console.log(user)
    if (user) {
        const reservationTaken = await models.Reservations.findOne({
            where: {
                date: date,
            }
        })
        if (!reservationTaken) {
            await models.Reservations.create({
                UserId: user.id,
                date: date
            })
                .then(user => {
                    res.redirect('/reservation-made')
                })
        }
        else if (reservationTaken) {
            res.redirect('/wait-list')
        }
    }
    if (!user) {
        await models.User.create({
            name,
            phone,
        })
        const user = await models.User.findOne({
            where: { phone: phone }
        })
        const reservations = await models.Reservations.findOne({
            where: { date: date }

        })
        if (!reservations) {
            await models.Reservations.create({
                date,
                UserId: user.id

            })
                .then(user => {
                    res.redirect('/reservation-made')
                })
        }
        else if (reservations) {
            res.redirect('/wait-list')
        }
    }



})

module.exports = router;