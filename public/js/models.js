var Backbone = require('backbone');

var Server = Backbone.Model.extend({
    defaults: {
        name: 'Unknown',
        rules: [],
        notifies: []
    }
});

var ServerCollection = Backbone.Collection.extend({
    model: Server,
    url: '/servers'
});

var Rule = Backbone.Model.extend({
    defaults: {
        name: "usual",
        start_day: "monday",
        start_time: "09:00:00",
        stop_day: "friday",
        stop_time: "18:00:00"
    }
});

var RuleCollection = Backbone.Collection.extend({
    model: Rule
});

module.exports = {
    'Rule': Rule,
    'RuleCollection': RuleCollection,
    'Server': Server,
    'ServerCollection': ServerCollection
};
