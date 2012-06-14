var $ = require('jquery-browserify');

window.$ = window.jQuery = $;

var models = require('./models.js'),
    views = require('./views.js');


console.log(models, views);
