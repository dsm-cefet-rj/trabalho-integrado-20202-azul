var express = require('express');
var router = express.Router();
const Mission = require('../models/missions')

/* GET users listing. */
router.get('/', function(req, res, next) {

    Mission.find((err, missions) => {
        res.json({ missionList: missions })
    }).limit(3)
    
});

module.exports = router;
