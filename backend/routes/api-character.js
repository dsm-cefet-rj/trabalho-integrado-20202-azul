var express = require('express')
var router = express.Router()
const Character = require('../models/characters')
const Mission = require('../models/missions')
const authenticate = require('../authenticate')


/* GET */
router.get('/', authenticate.verifyUser, async function(req, res, next) {
    /* 	#swagger.tags = ['Character']
        #swagger.description = 'Busca personagem no mongodb'
    */

    let char = await (await Character.findOne({ _id: 0 }).populate('activeMission.missionId')).execPopulate()
    res.json({character: char})

    /* #swagger.responses[200] = { 
            schema: { $ref: "#/definitions/Character" },
            description: 'Personagem encontrado.' 
        }
        #swagger.responses[401] = { 
            description: 'Erro na autenticação.' 
        } 
    */
});

router.post(
    '/complete-mission',
    authenticate.verifyUser,
    async (req, res) => {
        const charId = req.body.characterId
        let character = await (await Character.findOne({ _id: charId }).populate('activeMission.missionId')).execPopulate()
        const mission = character.activeMission.missionId
        const startTime = character.activeMission.missionStartTime
        const deltaTime = ((Date.now() - startTime) / 1000) / 60

        if (deltaTime < mission.time) return res.json({ completeMissionStatus: 'failed' })

        character = await Character.findOneAndUpdate({ _id: charId }, { "activeMission.missionId": null, "activeMission.missionStartTime": null } , { new: true })

        res.json({ character: character })
    }
)

// Activate Mission
router.post(
    '/activate-mission',
    authenticate.verifyUser,
    async (req, res) => {
        const charId = req.body.characterId
        const missionId = req.body.missionId
        let character = await Character.findOne({ _id: charId })
        const mission = await Mission.findOne({ _id: missionId })

        if (character.activeMission.missionId) return res.json({ activateMissionStatus: 'Failed. This character already has a mission' })
        if (!mission) return res.json({ activateMissionStatus: 'Failed. Mission pointed was not found' })

        character = await (
            await Character
            .findOneAndUpdate(
                { _id: charId }, 
                { 
                    "activeMission.missionId": missionId, 
                    "activeMission.missionStartTime": Date.now() 
                }, 
                { new: true }
            )
            .populate('activeMission.missionId')
        ).execPopulate()

        res.json({ character: character })
    }
)

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
    /* #swagger.responses[200] = { 
            schema: { $ref: "#/definitions/IncrementStatus" },
            description: 'Status incrementado.' 
        }
    */
});

module.exports = router;
