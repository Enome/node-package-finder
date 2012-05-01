var http = require('http');

module.exports = {
  
  requestEs: function(change, method, package){

    var doc = change.doc;

    var options = {
      host: '0.0.0.0',
      port: 9200,
      path: '/packages/package/' + doc._id,
      method: method
    };

    var request = http.request(options, function(res){

      var body = '';

      res.on('error', function(error){ console.log( error.stack ); });
      res.on('data', function(chunk){ body += chunk; });
      res.on('end', function(){ 
        console.log( method, body, { doc: doc._id, seq: change.seq } );
      });

    });

    if( package ){
      request.setHeader('Content-Type', 'application/json');
      request.write( package );
    };

    request.on('error', function(error){
      console.log( 'REQUEST', { doc: doc._id, seq: change.seq } );
    });

    request.end();

  }

};
