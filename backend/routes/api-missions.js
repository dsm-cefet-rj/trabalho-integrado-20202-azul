var express = require('express');
var router = express.Router();
const Mission = require('../models/missions')
const authenticate = require('../authenticate')

/* GET users listing. */
router.route('/').get( authenticate.verifyUser, (req, res, next) => {

    Mission.find((err, missions) => {
        res.json({ missionList: missions })
    }).limit(3)
    
});

module.exports = router;
