var Backbone = require('backbone-browserify'),
    models = require('./models.js');


var ServerView = Backbone.View.extend({
    model: models.Server,
    tagName: "li",

    render: function(){
        console.log(this, this.template());
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
window.ServerView = ServerView;
new ServerView({'name': 'testing'}).render();
module.exports = {'ServerView': ServerView};
