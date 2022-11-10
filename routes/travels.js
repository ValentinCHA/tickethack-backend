var express = require('express');
var router = express.Router();
const moment = require("moment");
const Travel = require('../models/travel');


// GET the trip details using departure / arrival / date ---//

router.get('/search/:departure/:arrival/:date', (req, res) => {
  const { departure, arrival, date } = req.params;
  //console.log("DATE =>", { $gte: moment(date).startOf('day'), $lte: moment(date).endOf('day') })
  Travel.find({
    departure: new RegExp(departure, 'i'),
    arrival: new RegExp(arrival, 'i'),
    date: { $gte: moment(date).startOf('day'), $lte: moment(date).endOf('day') },
  })
  .then(dbData => {
    //console.log(dbData[0]);
    res.json({dbData })
  })
}); 

// TEST / Get all
router.get('/', (req,res) => {
  Travel.find({}).then(data => {
    res.json({data})
  })
})

module.exports = router;


