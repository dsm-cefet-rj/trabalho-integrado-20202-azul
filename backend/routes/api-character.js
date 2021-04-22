var express = require('express')
var router = express.Router()
const Character = require('../models/characters')
const authenticate = require('../authenticate')


/* GET */
router.get('/', authenticate.verifyUser, function(req, res, next) {
    Character.findOne({ _id: 0 }, (err, character) => {
        res.json({character: character})
    })
});

/* UPDATE */
router.post('/', function(req, res, next) {
    Character.updateOne({ _id: req.body._id }, { status: req.body.status}, (err, writeOpResult) => {
        // console.log(req.body.status)
    })
    res.json('Status updated')
});

module.exports = router;
