var express = require('express')
var router = express.Router()
const User = require('../models/users')
const passport = require('passport')
const authenticate = require('../authenticate')
const Character = require('../models/characters')

router.post('/signup', (req, res, next) => {
    /* 	
        #swagger.tags = ['Users']
        #swagger.description = 'Registra usuário'
    */
    
    const newChar = new Character()
    newChar.save((error, silence) => {
        if (error) return console.log(error)
    })

    User.register(new User({ username: req.body.username, character: newChar._id }),
        req.body.password, (err, user) => {
            if (err) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.json({ err: err })
            }
            else {
                passport.authenticate('local')(req, res, () => {
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'application/json')
                    res.json({ success: true, status: 'Registration Successful!' })
                })
            }
        }
    )
    /* #swagger.responses[200] = { 
            schema: { $ref: "#/definitions/SignUp" },
            description: 'Registrado com sucesso.' 
        }
        #swagger.responses[500] = { 
            schema: { $ref: "#/definitions/SignUpErro" },
            description: 'O usuário já está cadastrado.' 
        }
    */
})

router.post('/login', passport.authenticate('local'), (req, res, next) => {
    /* 	#swagger.tags = ['Users']
        #swagger.description = 'Loga usuário' 
        #swagger.parameters['obj'] = {
            in: 'body',
            type: "object",
            schema: {$ref: "#/definitions/Login"}
        }
    */
    const token = authenticate.getToken({ _id: req.user._id })
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json({ token: token, username: req.user.username, /*character: req.user.character*/})
    /* #swagger.responses[200] = { 
            schema: { $ref: "#/definitions/LoginResposta" },
            description: 'Logado com sucesso.' 
        }
        #swagger.responses[401] = { 
            description: 'Erro na autenticação.' 
        } 
    */
})

router.post('/logout', authenticate.verifyUser, (req, res) => {
    /* 	#swagger.tags = ['Users']
        #swagger.description = 'Desloga usuário'
        #swagger.parameters['obj'] = {
            in: 'body',
            type: "object",
            schema: {$ref: "#/definitions/Logout"} 
        }
    */

    // Todo: Black list the token in the req
    res.json("You've successfully logged out")
    /*  #swagger.responses[200] = {
            description: 'Deslogado com sucesso.' 
        }
    */
})

module.exports = router
