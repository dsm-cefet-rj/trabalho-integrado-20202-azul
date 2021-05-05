var express = require('express')
var router = express.Router()
const User = require('../models/users')
const passport = require('passport')
const authenticate = require('../authenticate')

router.post('/signup', (req, res, next) => {
    /* 	#swagger.tags = ['Users']
        #swagger.description = 'Registra usuário'*/

    User.register(new User({ username: req.body.username }),
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
})

router.post('/login', passport.authenticate('local'), (req, res, next) => {
    /* 	#swagger.tags = ['Users']
        #swagger.description = 'Loga usuário' */
    
    const token = authenticate.getToken({ _id: req.user._id })
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json({ token: token, username: req.user.username})
})

router.post('/logout', authenticate.verifyUser, (req, res) => {
    /* 	#swagger.tags = ['Users']
        #swagger.description = 'Desloga usuário' */

    // Todo: Black list the token in the req
    res.json("You've successfully logged out")
})

module.exports = router
