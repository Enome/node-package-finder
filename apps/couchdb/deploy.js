var http = require('http');
var stringify = require('./utils').stringify;
var designDoc = require('./design_doc');

var options = {
  host: '0.0.0.0',
  port: '5984',
  path: '/npm/_design/general',
};


var createDesignDoc = function(callback){

  options.method = 'HEAD';

  var head = http.request(options, function(res){

    res.on('end', function(){

      designDoc._rev = res.headers.etag.replace(/"/g,'');

      return callback( stringify( designDoc ) );

    });

  });

  head.end();
  
};


createDesignDoc( function(doc){


  options.method = 'PUT';

  var get = http.request(options, function(res){

    var body = '';

    res.on('data', function(chunk){ body += chunk; });
    res.on('end', function(){ console.log( body ); });

  });

  get.setHeader('Content-Type', 'application/json');
  get.write( doc );
  get.end();

});
