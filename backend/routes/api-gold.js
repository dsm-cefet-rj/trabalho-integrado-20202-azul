var express = require('express')
var router = express.Router()
const GoldOffer = require('../models/goldOffers')

/* GET users listing. */
router.get('/', function(req, res, next) {

    GoldOffer.find((err, offers) => {
        res.json({ offerArray: offers })
    }).limit(3)
    
});

module.exports = router;
