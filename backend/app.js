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


// Initializing
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/akbar', indexRouter);
app.use('/api/character', charRouter);
app.use('/api/missions', missionRouter);
app.use('/api/gold', goldRouter);

// Creating database
mongoose.connect('mongodb://localhost/godfatherdb', {useNewUrlParser: true, useUnifiedTopology: true});
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // Connected
    console.log('DB connected')
});

testChar = {
    character: {
        picture: {},
        name: 'Changed',
        status: {
            atk: 21,
            res: 42,
            lck: 666,
            rsl: 23
        },
        activeMission: {}
    }
}


module.exports = app;
