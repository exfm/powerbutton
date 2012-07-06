"use strict";
var Backbone = require('backbone'),
    models = require('./models');

module.exports.ServerView = Backbone.View.extend({
    model: models.Server,
    template: require('views/server-list'),
    render: function(){
        $('body').append(this.template({'servers': [{'name': 'Dave'}]}));
    }
});