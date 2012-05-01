var http = require('http');
var settings = require('../../settings').search;
var _ = require('underscore');
var request = require('request');

module.exports = {

  search: function(q, callback){

    var url = 'http://' + settings.host + ':' + settings.port + '/' + settings.path + '/_search?q=' + encodeURIComponent(q) + '&size=100'

    request.get(url, function(error, response, body){

      try {
        callback( null, JSON.parse(body) ); 
      } catch(e) {
        callback('Json: parse error');
      };

    });

  }

};
