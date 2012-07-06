var views = require('./views'),
    models = require('./models');

new views.ServerView({model: new models.Server({'name': 'Dave'})}).render();