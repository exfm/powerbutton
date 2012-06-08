var Backbone = require('backbone'),
    models = require('./models.js');


var ServerView = Backbone.View.extend({
    model: models.Server,
    render: function(){
        console.log(this, this.template);
    }
});

var AppView = Backbone.View.extend({
    constructor: function(){
        new ServerView({'name': 'testing'}).render();
    },
    render: function(){

    }
});
window.AppView= AppView;

module.exports = {'ServerView': ServerView};
