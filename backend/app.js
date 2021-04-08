var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var charRouter = require('./routes/character');
var missionRouter = require('./routes/api-missions');
var goldRouter = require('./routes/api-gold');
var updateCharRouter = require('./routes/api-update-char');

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
app.use('/api/update-char', updateCharRouter);

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
