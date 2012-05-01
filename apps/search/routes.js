var url = require('../website/urls');
var search = require('./middleware');
var general = require('../general/middleware');

module.exports = {
  
  init: function(app){
    app.get( url('search_new'), general.render('search/new') );
    app.get( url('search_index'), search.query, general.render('search/index') );
  }

};
