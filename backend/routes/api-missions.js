var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.json({
		missionList: [
            {
                name: 'Sicilian immigrant',
                description: '',
                xp: 20,
                cash: 50,
                time: 3
            },
            {
                name: 'Fender Ketchup',
                description: '',
                xp: 10,
                cash: 10,
                time: 1
            },
            {
                name: 'Just business',
                description: '',
                xp: 15,
                cash: 30,
                time: 2
            }
        ]
	})
});

module.exports = router;
