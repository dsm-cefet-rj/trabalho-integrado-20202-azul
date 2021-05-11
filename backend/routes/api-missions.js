var express = require('express');
var router = express.Router();
const Mission = require('../models/missions')
const authenticate = require('../authenticate')

/* GET users listing. */
router.route('/').get( authenticate.verifyUser, async (req, res, next) => {
    /* 	#swagger.tags = ['Missions']
        #swagger.description = 'Busca missões no mongodb'
    */

    missions = await Mission.find({}).limit(3)
    res.json({ missionList: missions})

    /* #swagger.responses[200] = { 
            schema: { $ref: "#/definitions/Missions" },
            description: 'Missões encontradas.' 
        }
        #swagger.responses[401] = { 
            description: 'Erro na autenticação.' 
        } 
    */
});

module.exports = router;
