// Imports
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var charRouter = require('./routes/api-character');
var missionRouter = require('./routes/api-missions');
var goldRouter = require('./routes/api-gold');

const mongoose = require('mongoose');
const mongoURI = require('./persistent/uri')


// Initializing
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/', indexRouter);
app.use('/api/character', charRouter);
app.use('/api/missions', missionRouter);
app.use('/api/gold', goldRouter);

// Creating database
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // If the connection was sucessful show:
    console.log('DB connection was sucessful')

    // DB initialization
    const Character = require('./models/characters')
    const Mission = require('./models/missions')
    const GoldOffer = require('./models/goldOffers')
    const Rank = require('./models/ranks')

    Character.findOne({}, (err, character) => {
        if (!character) {
            console.log('Creating a test character in database...')
            const silence = new Character({
                _id: 0,
                picture: "https://dd2t.github.io/psw/images/character/character-images/mafia-luffy.jpg",
                name: 'Backend working',
                reputation: 1001,
                wins: 42,
                losses: 23,
        
                status: {
                    pointsAvailable: 1000,
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
            silence.save((error, silence) => {
                if (error) return console.log(error)
            })
        }
    })

    Mission.findOne({}, (err, mission) => {
        if (!mission) {
            console.log('Creating a test mission in database...')
            const quest = new Mission({
                _id: 0,
                name: 'Fender Ketchup',
                description: 'Follow the damn train CJ',
                sender: 'Big Smoke',
                xp: 50,
                time: 1
            })
            quest.save((error, quest) => {
                if (error) return console.log(error)
            })
        }
    })

    GoldOffer.findOne({}, (err, offer) => {
        if (!offer) {
            console.log('Creating a test gold offer in database...')
            const test = new GoldOffer({
                _id: 0,
                picture: 'https://dd2t.github.io/psw/images/gold-shop/description-images/1200g-300px.jpg',
                description: "Don's heritage",
                link: 'www.google.com',
                value: 1200,
                price: 200,
                discount: 20
            })
            test.save((error, test) => {
                if (error) return console.log(error)
            })
        }
    })

    // TODO: ranking sys
    console.log('DB ready')
});


module.exports = app;
