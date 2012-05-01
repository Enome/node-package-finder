var general = require('../general/middleware');
var url = require('../website/urls');

module.exports = {
  init: function(app){
    app.get( url('packages_show'), general.render('packages/show') );
  }
};
