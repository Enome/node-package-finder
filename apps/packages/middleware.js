var request = require('request');
var package = require('./presenters').package;
var settings = require('../../settings').couchdb;

module.exports = {

  one: function( req, res, next ){
    
    var url = 'http://' + settings.host + settings.path + '/' + req.params.id;

    request.get(url, function(error, response, body){

      var data;

      if(error){
        return next( {type:'couchdb', error: error} );
      };

      try {
        data = JSON.parse( body );
      } 
      catch(e){
        return next( {type:'json', error: 'parse error'} );
      };

      res.local('package', package(data) );

      return next();

    });

  },

  attachment: function(req, res, next){

    var file = req.params.name + '-' + req.params.version + '.tgz'
    var url = 'http://' + settings.host + settings.path + '/' + req.params.name + '/' + file;
    res.setHeader('Content-Disposition', 'attachment; filename=' + file);
    request.get(url).pipe(res);

  }

};
