var http = require('http');
var settings = require('../../settings');
var _ = require('underscore');
var request = require('request');

module.exports = {

  search: function(q, callback){

    var url = settings.search + '/_search?q=' + encodeURIComponent(q) + '&size=150'

    request.get(url, function(error, response, body){

      if(error){
        return callback( error );
      };

      callback( null, JSON.parse(body) );

    });

  }

};
