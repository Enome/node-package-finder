var general = require('../general/middleware');
var packages = require('./middleware');
var url = require('../website/urls');

module.exports = {

  init: function(app){
    app.get( url('packages_show'), 
             packages.one,
             general.render('packages/show') );

    app.get( url('packages_attachment'), packages.attachment );
  }

};
