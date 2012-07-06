"use strict";
var express = require('express');

var app = module.exports = express.createServer();

app.configure(function(){
    app.set('views', __dirname);
    app.set('view engine', 'hbs');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/'));
    app.set('view options', {
      layout: false
    });
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Routes

app.get('/', function(req, res){
    res.render('index');
});

app.listen(3000, function(){
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});