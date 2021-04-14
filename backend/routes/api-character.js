var express = require('express');
var router = express.Router();
const Character = require('../models/characters')

// DB quickstart
Character.findOne({}, (err, character) => {
    console.log('Checking database')
    if (!character) {
        console.log('Initializing database...')
        const silence = new Character({
        _id: 0,
        picture: "https://dd2t.github.io/psw/images/character/character-images/mafia-luffy.jpg",
        name: 'Backend working',
        reputation: 1001,
        wins: 42,
        losses: 23,

        status: {
            pointsAvailable: 4,
            atk: 21,
            res: 42,
            lck: 999,
            rsl: 23
        },

        leveling: {
            xp: 7,
            level: 1,
            upXp: 10
        },

        activeMission: {
            missionId: 0,
            missionStartTime: ''
        },

        rankId: 0
    })
    silence.save((err, silence) => {
        if (err) return console.log(err)
    })
    }
})


/* GET */
router.get('/', function(req, res, next) {
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
