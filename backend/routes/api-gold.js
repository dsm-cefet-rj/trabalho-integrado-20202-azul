var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.json({
        offerArray: [
            {
                title: 'Herança do Don',
                value: 1200,
                picture: {},
                price: 200,
                bonus: '20%'
            },
            {
                title: 'Dote de casamento',
                value: 575,
                picture: {},
                price: 100,
                bonus: '15%'
            },
            {
                title: 'Pensão alimentícia',
                value: 275,
                picture: {},
                price: 50,
                bonus: '10%'
            }
        ]
    })
});

module.exports = router;
