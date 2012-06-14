
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    browserify = require('browserify'),
    handlebars = require('handlebars');

var app = module.exports = express.createServer();
var bundle = browserify(__dirname + '/public/js/index.js', {watch: true, cache: false});

bundle.register('.html', function (body) {
    console.log('hbs detect', body, handlebars.precompile(body));
    return "return (" + handlebars.precompile(body) + ")();";
});
// Configuration

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'hbs');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    app.use(bundle);
});

app.configure('production', function(){
    app.use(express.errorHandler());
    app.use(browserify(__dirname + '/public/js/index.js'));
});

// Routes

app.get('/', routes.index);

app.listen(3000, function(){
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
