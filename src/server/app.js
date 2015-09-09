/*jshint node:true*/
'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var environment = process.env.NODE_ENV;

// routing
var routes = require('./routes/index');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../../build')));

app.use('/', routes);

switch (environment) {
    case 'build': {
        console.log('** BUILD **');
        app.use(express.static(path.join(__dirname, '../../build/')));
        break;
    }
    default: {
        console.log('** DEV **');
        app.use(express.static(path.join(__dirname, '../client/')));
        app.use(express.static(path.join(__dirname, '../../')));
        app.use(express.static(path.join(__dirname, '../../.tmp')));
        break;
    }
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500)
            .json({
                message: err.message,
                error: err
            });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500)
        .json({
            message: err.message,
            error: {}
        });
});

module.exports = app;
