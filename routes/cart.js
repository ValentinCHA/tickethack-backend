var express = require('express');
var router = express.Router();
const moment = require("moment");
const Cart = require('../models/cart')
const Travel = require('../models/travel')

router.post('/display', (req,res) => {
    const { id } = req.body
    console.log("C'EST l'ID =>" , id)
    Travel.findOne({_id : id})
    
        .then(data1 => {
            console.log("C'EST l'ID APRES=>" , id)
            console.log("DATA1",data1);
            res.json({ data1 })

            const newCartItemOk = new Cart({
                departure: data1.departure,
                arrival: data1.arrival,
                price: data1.price,
                date: data1.date
            })

            newCartItemOk.save()

        })
        
    })


    router.get('/', (req,res) => {
        Cart.find()
        .then(data => {
            res.json({data})
        })
    })
module.exports = router;