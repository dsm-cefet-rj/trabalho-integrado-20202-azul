var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.json({
		character: {
			picture: {},
			name: 'Changed',
			status: {
				atk: 21,
				res: 42,
				lck: 666,
				rsl: 23
			},
			activeMission: {}
		}
	})
});

module.exports = router;
