var express = require('express');
var router = express.Router();
const moment = require("moment");
const Cart = require('../models/cart')

router.post('/display', (req,res) => {
    const { departure, arrival, date, price} = req.body

    const newCartItem = new Cart ({
        departure : departure,
		arrival : arrival,
		date : date,
		price : price,
    })

    newCartItem.save().then(newItem => {
        res.json({ newItem })
    })
})

module.exports = router;