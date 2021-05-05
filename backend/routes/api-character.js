var express = require('express')
var router = express.Router()
const Character = require('../models/characters')
const authenticate = require('../authenticate')


/* GET */
router.get('/', authenticate.verifyUser, function(req, res, next) {
    /* 	#swagger.tags = ['Character']
        #swagger.description = 'Busca personagem no mongodb'
    */

    Character.findOne({ _id: 0 }, (err, character) => {
        res.json({character: character})
    })

    /* #swagger.responses[200] = { 
            schema: { $ref: "#/definitions/Character" },
            description: 'Personagem encontrado.' 
        }
        #swagger.responses[401] = { 
            description: 'Erro na autenticação.' 
        } 
    */
});

/* UPDATE */
router.post('/increment-status', authenticate.verifyUser, async function(req, res) {
    /* 	#swagger.tags = ['Character']
        #swagger.description = 'Incrementa status do personagem'
    */

    let char = await Character.findOne({ _id: 0 })

    if (char.status.pointsAvailable < 1) {
        res.json({ error: 'No points available' })
        return
    }

    switch (req.body.statusToIncrement){
        case 'atk':
            char = await Character.findOneAndUpdate({ _id: 0 }, { $inc: {"status.atk":1, "status.pointsAvailable": -1} } , { new: true })
            break
        case 'res':
            char = await Character.findOneAndUpdate({ _id: 0 }, { $inc: {"status.res":1, "status.pointsAvailable": -1} } , { new: true })
            break
        case 'lck':
            char = await Character.findOneAndUpdate({ _id: 0 }, { $inc: {"status.lck":1, "status.pointsAvailable": -1} } , { new: true })
            break
        case 'rsl':
            char = await Character.findOneAndUpdate({ _id: 0 }, { $inc: {"status.rsl":1, "status.pointsAvailable": -1} } , { new: true })
            break
        default:
            res.json({ error: 'Wrong status type' })
            return
    }

    res.json({ status: char.status })
});

module.exports = router;
