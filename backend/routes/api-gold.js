var express = require('express')
var router = express.Router()
const GoldOffer = require('../models/goldOffers')

/* GET users listing. */
router.get('/', function(req, res, next) {
    /* 	#swagger.tags = ['Gold']
        #swagger.description = 'Busca ofertas da loja de gold no mongodb' 
    */

    GoldOffer.find((err, offers) => {
        res.json({ offerArray: offers })
    }).limit(3)
    
    /* #swagger.responses[200] = { 
            schema: { $ref: "#/definitions/GoldOffers" },
            description: 'Ofertas encontradas.' 
        }
    */
});

module.exports = router;
