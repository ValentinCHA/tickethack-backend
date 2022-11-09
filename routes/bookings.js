var express = require('express');
var router = express.Router();
const moment = require("moment");
const Bookings = require('../models/bookings')

router.post('/display', (req,res) => {
    const { departure, arrival, date, price} = req.body

    const newBookingsItem = new Bookings ({
        departure : departure,
		arrival : arrival,
		date : date,
		price : price,
    })

    newBookingsItem.save().then(newBookingItem => {
        res.json({ newBookingItem })
    })
})

module.exports = router;