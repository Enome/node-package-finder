var http = require('http');

module.exports = {

  search: function(q, callback){

    var options = {
      host: '0.0.0.0',
      port: '5984',
      path: '/_fti/local/npm/_design/general/search?q=' + encodeURIComponent(q) + '&include_docs=true',
      method: 'GET'
    };

    var get = http.request(options, function(res){

      var body = '';

      res.on('error', function(error){ callback(error); });
      res.on('data', function(chunk){ body += chunk; });
      res.on('end', function(){ 

        try {
          callback( null, JSON.parse(body) ); 
        } catch(e) {
          callback('Json: parse error');
        };

      });

    });

    get.end();

  }

};
