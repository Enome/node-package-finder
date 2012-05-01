var express = require('express');
var stylus = require('stylus');

var app = module.exports = express.createServer();

app.configure(function(){
  app.set('views', __dirname + '/apps/website/views');
  app.set('view engine', 'jade');
  app.set('view options', { layout: false });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use( stylus.middleware({
    src:  __dirname + '/apps/website/assets/src',
    dest: __dirname + '/apps/website/assets/public',
    force: true
  }));
  app.use(express.static(__dirname + '/apps/website/assets/public'));
  app.use(app.router);
});


// Routes

require('./apps/search/routes').init( app );
require('./apps/errors/routes').init( app ); //Need to be last


// Helpers

require('./apps/website/helpers').init( app );


app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
