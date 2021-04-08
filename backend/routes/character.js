var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
	res.json(testChar)
});

module.exports = router;
