var settings = require('../../settings');
var request = require('request');

module.exports = {

  search: function(q, callback){

    var options = { 
      method: 'POST',
      json: {
        size: 100,
        query: { 
          query_string: {
            fields: ['name', 'author', 'tags'],
            query: q
          }
        }
      },
      uri: settings.search + '/_search',
      timeout: 60000 
    };

    request(options, function(error, response, body){

      if(error){
        return callback( error );
      };

      callback( null, body );

    });

  }

};
