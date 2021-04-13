var express = require('express');
var router = express.Router();
const CharacterSchema = require('../models/characters')


/* GET */
router.get('/', function(req, res, next) {
	res.json(testChar)
});

/* UPDATE */
router.post('/', function(req, res, next) {
    testChar = { character: req.body }
    res.json('ok')
});

module.exports = router;
